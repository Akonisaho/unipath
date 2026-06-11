import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { GoogleGenerativeAI } = require('@google/generative-ai')
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

    const { base64, fileName, institutionName, academicYear } = await req.json()

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

    const isText = fileName?.endsWith('.txt')

    const prompt = `
You are extracting course information from a South African university prospectus.

Institution: ${institutionName}
Academic Year: ${academicYear}

Extract ALL courses/programmes and return ONLY a JSON array.
Each course should have this structure:
{
  "name": "Full course name",
  "faculty": "Faculty name",
  "level": "degree|diploma|certificate|honours|postgrad",
  "nqf_level": 7,
  "min_aps": 28,
  "duration": "3 years",
  "description": "Brief description",
  "careers": ["Career 1", "Career 2"],
  "university_name": "${institutionName}",
  "academic_year": ${academicYear},
  "application_deadline": "30 September 2025",
  "subject_requirements": [
    {"subject": "Mathematics", "minimum_mark": 60},
    {"subject": "English", "minimum_mark": 50}
  ],
  "selected": true
}

Return ONLY the JSON array, no other text, no markdown.
`

    let result

    if (isText) {
      // Decode base64 text
      const text = Buffer.from(base64, 'base64').toString('utf-8')
      result = await model.generateContent(`${prompt}\n\nPROSPECTUS CONTENT:\n${text}`)
    } else {
      // PDF file
      result = await model.generateContent([
        prompt,
        {
          inlineData: {
            mimeType: 'application/pdf',
            data: base64,
          },
        },
      ])
    }

    const text = result.response.text()
    console.log('Raw AI response:', text.substring(0, 500))
    const clean = text.replace(/```json|```/g, '').trim()
    
    try {
      const courses = JSON.parse(clean)
      console.log('Parsed courses count:', courses.length)
      return NextResponse.json({ courses })
    } catch (parseError) {
      console.error('JSON parse error:', parseError)
      console.log('Clean text:', clean.substring(0, 500))
      return NextResponse.json({ error: 'Could not parse AI response', raw: clean.substring(0, 1000) }, { status: 500 })
    }
  } catch (error: any) {
    console.error('Extraction error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}