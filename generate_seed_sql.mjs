// Generates seed.sql (chunked into multiple DO $$ blocks) from seed-courses.js
import { writeFileSync, readFileSync } from 'fs'

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

function buildBlock(courses) {
  const lines = []
  lines.push('DO $$')
  lines.push('DECLARE')
  lines.push('  cid UUID;')
  lines.push('BEGIN')

  for (const c of courses) {
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

  lines.push(`\n  RAISE NOTICE 'Block complete (${courses.length} courses processed)';`)
  lines.push('END $$;')
  return lines.join('\n')
}

const CHUNK = 40
const chunks = []
for (let i = 0; i < COURSES.length; i += CHUNK) {
  chunks.push(COURSES.slice(i, i + CHUNK))
}

const parts = []
parts.push('-- UniPath Course Seed SQL')
parts.push(`-- ${COURSES.length} courses split into ${chunks.length} blocks of ~${CHUNK}`)
parts.push('-- Paste the ENTIRE file into Supabase SQL Editor and click Run')
parts.push('-- Safe to re-run: each block skips courses that already exist\n')

chunks.forEach((chunk, i) => {
  parts.push(`-- ════════ BLOCK ${i + 1} of ${chunks.length} (courses ${i * CHUNK + 1}–${Math.min((i + 1) * CHUNK, COURSES.length)}) ════════`)
  parts.push(buildBlock(chunk))
  parts.push('')
})

parts.push('-- Verify totals')
parts.push('SELECT COUNT(*) AS total_courses FROM courses;')
parts.push('SELECT COUNT(*) AS total_universities FROM course_universities;')
parts.push('SELECT COUNT(*) AS total_subject_reqs FROM course_subject_requirements;')

const sql = parts.join('\n')
writeFileSync('./seed.sql', sql, 'utf8')
console.log(`Generated seed.sql — ${COURSES.length} courses in ${chunks.length} blocks`)
console.log('File size: ' + Math.round(sql.length / 1024) + ' KB')
