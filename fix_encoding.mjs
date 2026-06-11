import { readdirSync, readFileSync, writeFileSync, statSync } from 'fs'
import { join, extname } from 'path'

// Build from-strings using Unicode code points to avoid string delimiter confusion.
// Each mojibake sequence is the Windows-1252 interpretation of the original UTF-8 bytes.
function w(...codepoints) { return codepoints.map(c => String.fromCodePoint(c)).join('') }

const W1252 = {
  0x80: 0x20AC, 0x82: 0x201A, 0x83: 0x0192, 0x84: 0x201E, 0x85: 0x2026,
  0x86: 0x2020, 0x87: 0x2021, 0x88: 0x02C6, 0x89: 0x2030, 0x8A: 0x0160,
  0x8B: 0x2039, 0x8C: 0x0152, 0x8E: 0x017D, 0x91: 0x2018, 0x92: 0x2019,
  0x93: 0x201C, 0x94: 0x201D, 0x95: 0x2022, 0x96: 0x2013, 0x97: 0x2014,
  0x98: 0x02DC, 0x99: 0x2122, 0x9A: 0x0161, 0x9B: 0x203A, 0x9C: 0x0153,
  0x9E: 0x017E, 0x9F: 0x0178,
}

// Convert UTF-8 byte array of a Unicode char into its Windows-1252 mojibake string
function moji(utf8bytes) {
  return utf8bytes.map(b => {
    if (b < 0x80) return String.fromCodePoint(b)
    return String.fromCodePoint(W1252[b] ?? b)
  }).join('')
}

const replacements = [
  // Middle dot separator  · U+00B7 = bytes C2 B7
  [moji([0xC2, 0xB7]), '·'],
  // Em dash — U+2014 = bytes E2 80 94
  [moji([0xE2, 0x80, 0x94]), '—'],
  // En dash – U+2013 = bytes E2 80 93
  [moji([0xE2, 0x80, 0x93]), '–'],
  // Right single quote ' U+2019 = bytes E2 80 99
  [moji([0xE2, 0x80, 0x99]), '’'],
  // Left double quote " U+201C = bytes E2 80 9C
  [moji([0xE2, 0x80, 0x9C]), '“'],
  // Right double quote " U+201D = bytes E2 80 9D
  [moji([0xE2, 0x80, 0x9D]), '”'],
  // Bullet • U+2022 = bytes E2 80 A2
  [moji([0xE2, 0x80, 0xA2]), '•'],
  // Right arrow → U+2192 = bytes E2 86 92
  [moji([0xE2, 0x86, 0x92]), '→'],
  // Left arrow ← U+2190 = bytes E2 86 90
  [moji([0xE2, 0x86, 0x90]), '←'],
  // Check mark ✓ U+2713 = bytes E2 9C 93
  [moji([0xE2, 0x9C, 0x93]), '✓'],
  // Heavy check mark ✅ U+2705 = bytes E2 9C 85
  [moji([0xE2, 0x9C, 0x85]), '✅'],
  // Cross mark ✗ U+2717 = bytes E2 9C 97
  [moji([0xE2, 0x9C, 0x97]), '✗'],
  // Heart ♥ U+2665 = bytes E2 99 A5
  [moji([0xE2, 0x99, 0xA5]), '♥'],
  // Heart outline ♡ U+2661 = bytes E2 99 A1
  [moji([0xE2, 0x99, 0xA1]), '♡'],
  // Warning ⚠ U+26A0 = bytes E2 9A A0
  [moji([0xE2, 0x9A, 0xA0]), '⚠'],
  // Lightning ⚡ U+26A1 = bytes E2 9A A1
  [moji([0xE2, 0x9A, 0xA1]), '⚡'],
  // Scales ⚖ U+2696 = bytes E2 9A 96
  [moji([0xE2, 0x9A, 0x96]), '⚖'],
  // Question ❓ U+2753 = bytes E2 9D 93
  [moji([0xE2, 0x9D, 0x93]), '❓'],
  // Red heart ❤ U+2764 = bytes E2 9D A4
  [moji([0xE2, 0x9D, 0xA4]), '❤'],
  // Circle ○ U+25CB = bytes E2 97 8B
  [moji([0xE2, 0x97, 0x8B]), '○'],
  // 4-byte emoji: 👋 U+1F44B = bytes F0 9F 91 8B
  [moji([0xF0, 0x9F, 0x91, 0x8B]), '\u{1F44B}'],
  // 👍 U+1F44D = bytes F0 9F 91 8D
  [moji([0xF0, 0x9F, 0x91, 0x8D]), '\u{1F44D}'],
  // 🎉 U+1F389 = bytes F0 9F 8E 89
  [moji([0xF0, 0x9F, 0x8E, 0x89]), '\u{1F389}'],
  // 🟢 U+1F7E2 = bytes F0 9F 9F A2
  [moji([0xF0, 0x9F, 0x9F, 0xA2]), '\u{1F7E2}'],
  // 🔴 U+1F534 = bytes F0 9F 94 B4
  [moji([0xF0, 0x9F, 0x94, 0xB4]), '\u{1F534}'],
  // 📋 U+1F4CB = bytes F0 9F 93 8B
  [moji([0xF0, 0x9F, 0x93, 0x8B]), '\u{1F4CB}'],
  // 🔬 U+1F52C = bytes F0 9F 94 AC
  [moji([0xF0, 0x9F, 0x94, 0xAC]), '\u{1F52C}'],
  // 📚 U+1F4DA = bytes F0 9F 93 9A
  [moji([0xF0, 0x9F, 0x93, 0x9A]), '\u{1F4DA}'],
  // 📺 U+1F4FA = bytes F0 9F 93 BA
  [moji([0xF0, 0x9F, 0x93, 0xBA]), '\u{1F4FA}'],
  // 🌱 U+1F331 = bytes F0 9F 8C B1
  [moji([0xF0, 0x9F, 0x8C, 0xB1]), '\u{1F331}'],
  // 🌟 U+1F31F = bytes F0 9F 8C 9F
  [moji([0xF0, 0x9F, 0x8C, 0x9F]), '\u{1F31F}'],
  // 🎓 U+1F393 = bytes F0 9F 8E 93
  [moji([0xF0, 0x9F, 0x8E, 0x93]), '\u{1F393}'],
  // 🎨 U+1F3A8 = bytes F0 9F 8E A8
  [moji([0xF0, 0x9F, 0x8E, 0xA8]), '\u{1F3A8}'],
  // 🏗 U+1F3D7 = bytes F0 9F 8F 97
  [moji([0xF0, 0x9F, 0x8F, 0x97]), '\u{1F3D7}'],
  // 🏛 U+1F3DB = bytes F0 9F 8F 9B
  [moji([0xF0, 0x9F, 0x8F, 0x9B]), '\u{1F3DB}'],
  // 🏥 U+1F3E5 = bytes F0 9F 8F A5
  [moji([0xF0, 0x9F, 0x8F, 0xA5]), '\u{1F3E5}'],
  // 👩 U+1F469 = bytes F0 9F 91 A9
  [moji([0xF0, 0x9F, 0x91, 0xA9]), '\u{1F469}'],
  // 👨 U+1F468 = bytes F0 9F 91 A8
  [moji([0xF0, 0x9F, 0x91, 0xA8]), '\u{1F468}'],
  // 👤 U+1F464 = bytes F0 9F 91 A4
  [moji([0xF0, 0x9F, 0x91, 0xA4]), '\u{1F464}'],
  // 💡 U+1F4A1 = bytes F0 9F 92 A1
  [moji([0xF0, 0x9F, 0x92, 0xA1]), '\u{1F4A1}'],
  // 💰 U+1F4B0 = bytes F0 9F 92 B0
  [moji([0xF0, 0x9F, 0x92, 0xB0]), '\u{1F4B0}'],
  // 💻 U+1F4BB = bytes F0 9F 92 BB
  [moji([0xF0, 0x9F, 0x92, 0xBB]), '\u{1F4BB}'],
  // 💼 U+1F4BC = bytes F0 9F 92 BC
  [moji([0xF0, 0x9F, 0x92, 0xBC]), '\u{1F4BC}'],
  // 🏷 U+1F3F7 = bytes F0 9F 8F B7
  [moji([0xF0, 0x9F, 0x8F, 0xB7]), '\u{1F3F7}'],
  // ✈ U+2708 = bytes E2 9C 88
  [moji([0xE2, 0x9C, 0x88]), '✈'],
  // 🇿🇦 ZA flag = U+1F1FF U+1F1E6 = bytes F0 9F 87 BF F0 9F 87 A6
  [moji([0xF0, 0x9F, 0x87, 0xBF, 0xF0, 0x9F, 0x87, 0xA6]), '\u{1F1FF}\u{1F1E6}'],
  // ❌ U+274C = bytes E2 9D 8C  (0x9D undefined in W1252 → U+009D, 0x8C → U+0152 Œ)
  [moji([0xE2, 0x9D, 0x8C]), '✗'],
  // ☐ ballot box U+2610 = bytes E2 98 90  (0x98 → U+02DC ˜, 0x90 → U+0090 control)
  [moji([0xE2, 0x98, 0x90]), '○'],
  // ☑ U+2611 = bytes E2 98 91  (0x91 → U+2018 ')
  [moji([0xE2, 0x98, 0x91]), '✓'],
  // Variation selector FE0F = bytes EF B8 8F
  // (appears after emoji to request emoji presentation — safe to keep as-is after fixing emoji)
  [moji([0xEF, 0xB8, 0x8F]), '️'],
  // Non-breaking space U+00A0 = bytes C2 A0
  [moji([0xC2, 0xA0]), ' '],
  // Residual stray Â that didn't match above
  ['Â', ''],
]

function walkDir(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory() && entry !== 'node_modules' && entry !== '.next') {
      walkDir(full)
    } else if (stat.isFile() && ['.tsx', '.ts', '.css'].includes(extname(entry))) {
      let content = readFileSync(full, 'utf8')
      let changed = false
      for (const [from, to] of replacements) {
        if (content.includes(from)) {
          content = content.split(from).join(to)
          changed = true
        }
      }
      if (changed) {
        writeFileSync(full, content, 'utf8')
        console.log('Fixed:', full)
      }
    }
  }
}

walkDir('./src')
console.log('Done')
