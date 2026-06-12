// Generates seed.sql from seed-courses.js data
import { createRequire } from 'module'
import { writeFileSync, readFileSync } from 'fs'

// Load the COURSES array by evaluating the JS file (strip the supabase bits)
const raw = readFileSync('./src/scripts/seed-courses.js', 'utf8')
const courseMatch = raw.match(/const COURSES = (\[[\s\S]*?\n\])/m)
if (!courseMatch) { console.error('Could not find COURSES array'); process.exit(1) }

let COURSES
eval('COURSES = ' + courseMatch[1])

function esc(str) {
  if (str == null) return 'NULL'
  return "'" + String(str).replace(/'/g, "''") + "'"
}

function escArr(arr) {
  if (!arr || arr.length === 0) return "ARRAY[]::text[]"
  return "ARRAY[" + arr.map(s => esc(s)).join(', ') + "]"
}

const lines = []
lines.push('-- UniPath Course Seed SQL')
lines.push('-- Paste this entire block into Supabase SQL Editor and click Run')
lines.push('-- Safe to re-run: skips courses that already exist\n')

lines.push('DO $$')
lines.push('DECLARE')
lines.push('  cid UUID;')
lines.push('BEGIN')

for (const c of COURSES) {
  lines.push(`\n  -- ${c.name}`)
  lines.push(`  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = ${esc(c.name)}) THEN`)
  lines.push(`    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)`)
  lines.push(`    VALUES (${esc(c.name)}, ${esc(c.faculty)}, ${esc(c.level)}, ${c.nqf_level}, ${c.min_aps}, ${esc(c.duration)}, ${esc(c.description)}, ${escArr(c.careers)}, true, 2025)`)
  lines.push(`    RETURNING id INTO cid;`)

  if (c.subjects && c.subjects.length > 0) {
    lines.push(`    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES`)
    const sRows = c.subjects.map(s => `      (cid, ${esc(s.subject)}, ${s.minimum_mark})`)
    lines.push(sRows.join(',\n') + ';')
  }

  if (c.universities && c.universities.length > 0) {
    lines.push(`    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES`)
    const uRows = c.universities.map(u => `      (cid, ${esc(u.name)}, ${u.min_aps}, ${esc(u.deadline)})`)
    lines.push(uRows.join(',\n') + ';')
  }

  lines.push(`  ELSE`)
  lines.push(`    RAISE NOTICE 'Skipping (exists): ${c.name.replace(/'/g, "''")}';`)
  lines.push(`  END IF;`)
}

lines.push('\n  RAISE NOTICE \'Seed complete!\';')
lines.push('END $$;')
lines.push('\n-- Verify')
lines.push('SELECT COUNT(*) AS total_courses FROM courses;')
lines.push('SELECT COUNT(*) AS total_universities FROM course_universities;')
lines.push('SELECT COUNT(*) AS total_subject_reqs FROM course_subject_requirements;')

const sql = lines.join('\n')
writeFileSync('./seed.sql', sql, 'utf8')
console.log('Generated seed.sql — ' + COURSES.length + ' courses')
console.log('File size: ' + Math.round(sql.length / 1024) + ' KB')
