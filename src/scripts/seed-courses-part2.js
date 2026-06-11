const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  'https://opkmhbzaslcgdpdjsklk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wa21oYnphc2xjZ2RwZGpza2xrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2NTI4NTQsImV4cCI6MjA5NTIyODg1NH0.TCIUQ0bCltmtEvwEtsUNPcyQCcULZ50ew0lvOaa9zB8'
)

const COURSES = [

  // ════════════════════════════════
  // HEALTH SCIENCES (ADDITIONAL)
  // ════════════════════════════════
  {
    name: 'Bachelor of Clinical Medical Practice (Clinical Associate)',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Mid-level healthcare provider working under supervision of doctors. Growing field in SA.',
    careers: ['Clinical Associate', 'District Hospital Clinician', 'Rural Healthcare Provider'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2025' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 26, deadline: '30 September 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'Bachelor of Audiology',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 25, duration: '4 years',
    description: 'Diagnose and treat hearing and balance disorders.',
    careers: ['Audiologist', 'Hearing Healthcare Specialist', 'Cochlear Implant Specialist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 26, deadline: '31 July 2025' },
      { name: 'Sefako Makgatho Health Sciences University (SMU)', min_aps: 25, deadline: '31 July 2025' },
    ],
  },
  {
    name: 'Bachelor of Speech-Language Pathology',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 25, duration: '4 years',
    description: 'Help people with communication and swallowing disorders.',
    careers: ['Speech Therapist', 'Language Pathologist', 'School-Based Therapist'],
    subjects: [
      { subject: 'English', minimum_mark: 65 },
      { subject: 'Life Sciences', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 26, deadline: '31 July 2025' },
      { name: 'Sefako Makgatho Health Sciences University (SMU)', min_aps: 25, deadline: '31 July 2025' },
    ],
  },
  {
    name: 'BSc Biokinetics',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: 'Use exercise as medicine to improve health and rehabilitate patients.',
    careers: ['Biokineticist', 'Sports Scientist', 'Rehabilitation Specialist', 'Wellness Coach'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2025' },
      { name: 'North-West University (NWU)', min_aps: 26, deadline: '30 September 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 28, deadline: '31 July 2025' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BSc Medical Laboratory Science',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: 'Perform medical tests that help diagnose disease. Critical role in healthcare.',
    careers: ['Medical Scientist', 'Laboratory Technologist', 'Pathology Scientist', 'Blood Bank Scientist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'Physical Sciences', minimum_mark: 60 },
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2025' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2025' },
      { name: 'Durban University of Technology (DUT)', min_aps: 24, deadline: '30 September 2025' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2025' },
      { name: 'University of Limpopo (UL)', min_aps: 24, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BSc Environmental Health',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Protect communities from environmental health hazards.',
    careers: ['Environmental Health Officer', 'Food Safety Inspector', 'Public Health Official'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2025' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2025' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2025' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2025' },
    ],
  },

  // ════════════════════════════════
  // COMMERCE (ADDITIONAL)
  // ════════════════════════════════
  {
    name: 'BCom Information Systems',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Bridge between business and IT. Manage information systems in organisations.',
    careers: ['IT Manager', 'Business Analyst', 'Systems Consultant', 'ERP Specialist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 32, deadline: '31 July 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 28, deadline: '31 July 2025' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2025' },
    ],
  },
  {
    name: 'BSc Actuarial Science',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 32, duration: '3 years',
    description: 'Apply mathematics and statistics to assess financial risks. One of the highest paying careers in SA.',
    careers: ['Actuary', 'Risk Analyst', 'Insurance Mathematician', 'Pension Fund Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 80 },
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 36, deadline: '31 July 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 34, deadline: '30 September 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 34, deadline: '31 July 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 32, deadline: '30 June 2025' },
    ],
  },
  {
    name: 'BCom Statistics',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Collect, analyse and interpret data for business and government decisions.',
    careers: ['Statistician', 'Data Analyst', 'Research Analyst', 'Biostatistician'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 28, deadline: '31 July 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 26, deadline: '30 November 2025' },
    ],
  },
  {
    name: 'BCom Risk Management',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Identify and manage risks in organisations and financial markets.',
    careers: ['Risk Manager', 'Compliance Officer', 'Insurance Analyst', 'Risk Consultant'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2025' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2025' },
    ],
  },
  {
    name: 'BCom Entrepreneurship',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Learn to start and grow businesses. Perfect for future business owners.',
    careers: ['Entrepreneur', 'Small Business Owner', 'Startup Founder', 'Business Consultant'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2025' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2025' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BCom Public Administration',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Manage government departments and public sector organisations.',
    careers: ['Government Official', 'Public Manager', 'Municipal Manager', 'Policy Analyst'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2025' },
      { name: 'University of Limpopo (UL)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'University of Venda (UNIVEN)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 20, deadline: '30 September 2025' },
    ],
  },

  // ════════════════════════════════
  // ENGINEERING (ADDITIONAL)
  // ════════════════════════════════
  {
    name: 'BEng Mechatronic Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 32, duration: '4 years',
    description: 'Combine mechanical, electrical and computer engineering. Future of automation.',
    careers: ['Mechatronic Engineer', 'Robotics Engineer', 'Automation Engineer', 'Systems Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'Stellenbosch University (SU)', min_aps: 34, deadline: '31 July 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 32, deadline: '30 June 2025' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 30, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BEng Metallurgical Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 30, duration: '4 years',
    description: 'Work with metals and materials. Critical for SA mining and manufacturing sectors.',
    careers: ['Metallurgical Engineer', 'Materials Engineer', 'Smelting Engineer', 'Corrosion Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of the Witwatersrand (Wits)', min_aps: 32, deadline: '30 September 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2025' },
      { name: 'University of Johannesburg (UJ)', min_aps: 30, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BSc Geomatics',
    faculty: 'Built Environment', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: 'Survey and map the earth. Critical for land development, mining and urban planning.',
    careers: ['Land Surveyor', 'Geomatician', 'GIS Specialist', 'Remote Sensing Analyst'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'Physical Sciences', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2025' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 26, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BSc Construction Management',
    faculty: 'Built Environment', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Manage construction projects from planning to completion.',
    careers: ['Construction Manager', 'Site Manager', 'Project Manager', 'Contracts Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2025' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 26, deadline: '30 September 2025' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2025' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BSc Town and Regional Planning',
    faculty: 'Built Environment', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: 'Plan cities, towns and regions for sustainable development.',
    careers: ['Town Planner', 'Urban Designer', 'Regional Planner', 'Environmental Planner'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2025' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2025' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 26, deadline: '30 September 2025' },
    ],
  },

  // ════════════════════════════════
  // SCIENCE (ADDITIONAL)
  // ════════════════════════════════
  {
    name: 'BSc Mathematics',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Study pure and applied mathematics. Opens doors to many high-paying careers.',
    careers: ['Mathematician', 'Statistician', 'Data Scientist', 'Actuary', 'Quantitative Analyst'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 75 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 34, deadline: '31 July 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 32, deadline: '30 September 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 30, deadline: '31 July 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 26, deadline: '30 November 2025' },
    ],
  },
  {
    name: 'BSc Physics',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Study the fundamental laws of the universe. Gateway to engineering and research.',
    careers: ['Physicist', 'Research Scientist', 'Nuclear Scientist', 'Geophysicist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 32, deadline: '31 July 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 30, deadline: '31 July 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 26, deadline: '30 November 2025' },
    ],
  },
  {
    name: 'BSc Chemistry',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Study matter and its properties. Applied in pharmaceuticals, food and materials.',
    careers: ['Chemist', 'Analytical Chemist', 'Quality Control Analyst', 'Pharmaceutical Chemist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'Physical Sciences', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 32, deadline: '31 July 2025' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2025' },
    ],
  },
  {
    name: 'BSc Geology',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Study the earth\'s structure and resources. Essential for SA mining industry.',
    careers: ['Geologist', 'Mining Geologist', 'Hydrogeologist', 'Petroleum Geologist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'Physical Sciences', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 28, deadline: '31 July 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2025' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BSc Biotechnology',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Use living organisms for industrial, medical and agricultural applications.',
    careers: ['Biotechnologist', 'Research Scientist', 'Pharmaceutical Researcher', 'Genetic Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'Life Sciences', minimum_mark: 65 },
      { subject: 'Physical Sciences', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2025' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2025' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2025' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BSc Genetics',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Study genes and heredity. Cutting-edge field with applications in medicine and agriculture.',
    careers: ['Geneticist', 'Genetic Counsellor', 'Research Scientist', 'Forensic Scientist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'Life Sciences', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'Stellenbosch University (SU)', min_aps: 30, deadline: '31 July 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2025' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2025' },
    ],
  },

  // ════════════════════════════════
  // IT (ADDITIONAL)
  // ════════════════════════════════
  {
    name: 'BSc Cybersecurity',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Protect systems and networks from cyber threats. One of fastest growing fields globally.',
    careers: ['Cybersecurity Analyst', 'Ethical Hacker', 'Security Engineer', 'Incident Responder'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2025' },
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2025' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 26, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BSc Artificial Intelligence',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 30, duration: '3 years',
    description: 'Build intelligent systems and machine learning models. The future of technology.',
    careers: ['AI Engineer', 'Machine Learning Engineer', 'Data Scientist', 'AI Researcher'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 75 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 32, deadline: '30 June 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 32, deadline: '31 July 2025' },
      { name: 'University of Johannesburg (UJ)', min_aps: 30, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BSc Computer Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 30, duration: '4 years',
    description: 'Design computer hardware and embedded systems.',
    careers: ['Computer Engineer', 'Embedded Systems Engineer', 'Hardware Designer', 'IoT Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'Stellenbosch University (SU)', min_aps: 34, deadline: '31 July 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 32, deadline: '30 June 2025' },
      { name: 'University of Cape Town (UCT)', min_aps: 34, deadline: '31 July 2025' },
    ],
  },

  // ════════════════════════════════
  // HUMANITIES (ADDITIONAL)
  // ════════════════════════════════
  {
    name: 'BA Sociology',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study society, social behaviour and human interaction.',
    careers: ['Social Researcher', 'Community Developer', 'NGO Manager', 'Policy Analyst'],
    subjects: [{ subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2025' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2025' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BA International Relations',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study global politics and diplomacy. Ideal for international careers.',
    careers: ['Diplomat', 'Foreign Affairs Officer', 'International NGO Worker', 'Policy Analyst'],
    subjects: [
      { subject: 'English', minimum_mark: 65 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 26, deadline: '31 July 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2025' },
    ],
  },
  {
    name: 'BA Development Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study poverty, inequality and development in African context.',
    careers: ['Development Practitioner', 'NGO Manager', 'Government Official', 'Researcher'],
    subjects: [{ subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2025' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2025' },
    ],
  },
  {
    name: 'BA Philosophy',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study ethics, logic and critical thinking. Develops analytical skills for any career.',
    careers: ['Philosopher', 'Ethics Consultant', 'Lawyer', 'Policy Analyst', 'Academic'],
    subjects: [{ subject: 'English', minimum_mark: 65 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 26, deadline: '31 July 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2025' },
    ],
  },
  {
    name: 'BA History',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study the past to understand the present. Develops critical research skills.',
    careers: ['Historian', 'Archivist', 'Museum Curator', 'Teacher', 'Researcher'],
    subjects: [{ subject: 'English', minimum_mark: 60 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 24, deadline: '31 July 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2025' },
    ],
  },

  // ════════════════════════════════
  // CREATIVE ARTS
  // ════════════════════════════════
  {
    name: 'Bachelor of Fine Arts (BFA)',
    faculty: 'Arts', level: 'degree', nqf_level: 7, min_aps: 20, duration: '4 years',
    description: 'Express yourself through visual arts. Opens doors to creative industries.',
    careers: ['Artist', 'Art Teacher', 'Gallery Curator', 'Art Director', 'Illustrator'],
    subjects: [{ subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 24, deadline: '30 September 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 24, deadline: '31 July 2025' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'Bachelor of Music (BMus)',
    faculty: 'Arts', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Study music performance, composition or education. Audition required.',
    careers: ['Musician', 'Music Teacher', 'Composer', 'Music Producer', 'Sound Engineer'],
    subjects: [{ subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 24, deadline: '31 July 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2025' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BA Drama and Theatre Studies',
    faculty: 'Arts', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study performance, directing and theatre production.',
    careers: ['Actor', 'Director', 'Drama Teacher', 'Theatre Producer', 'TV Presenter'],
    subjects: [{ subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 24, deadline: '30 September 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 22, deadline: '31 July 2025' },
      { name: 'Rhodes University', min_aps: 22, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'Diploma in Graphic Design',
    faculty: 'Arts', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Create visual content for brands, media and digital platforms.',
    careers: ['Graphic Designer', 'UI/UX Designer', 'Brand Designer', 'Art Director'],
    subjects: [{ subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2025' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'Diploma in Fashion Design',
    faculty: 'Arts', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Design clothing and accessories for SA and global fashion markets.',
    careers: ['Fashion Designer', 'Clothing Manufacturer', 'Stylist', 'Retail Buyer'],
    subjects: [{ subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'Diploma in Film and Television Production',
    faculty: 'Arts', level: 'diploma', nqf_level: 6, min_aps: 20, duration: '3 years',
    description: 'Produce films, documentaries and TV content. SA\'s media industry is growing.',
    careers: ['Film Producer', 'Director', 'Cinematographer', 'Video Editor', 'Content Creator'],
    subjects: [{ subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2025' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2025' },
    ],
  },

  // ════════════════════════════════
  // AGRICULTURE (ADDITIONAL)
  // ════════════════════════════════
  {
    name: 'BSc Animal Science',
    faculty: 'Agriculture', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Study animal production, nutrition and health for farming and research.',
    careers: ['Animal Scientist', 'Livestock Manager', 'Feedlot Manager', 'Animal Nutritionist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 24, deadline: '31 July 2025' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2025' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BSc Forestry',
    faculty: 'Agriculture', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Manage forests and timber resources sustainably.',
    careers: ['Forester', 'Conservation Manager', 'Timber Specialist', 'Environmental Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Stellenbosch University (SU)', min_aps: 24, deadline: '31 July 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2025' },
    ],
  },

  // ════════════════════════════════
  // THEOLOGY & RELIGION
  // ════════════════════════════════
  {
    name: 'Bachelor of Theology (BTh)',
    faculty: 'Theology', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study religion, theology and ministry.',
    careers: ['Minister', 'Pastor', 'Chaplain', 'Religious Studies Teacher', 'Community Leader'],
    subjects: [{ subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2025' },
      { name: 'Stellenbosch University (SU)', min_aps: 24, deadline: '31 July 2025' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2025' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2025' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2025' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2025' },
    ],
  },

  // ════════════════════════════════
  // PUBLIC MANAGEMENT & GOVERNANCE
  // ════════════════════════════════
  {
    name: 'Bachelor of Public Management and Governance',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Manage government services and public sector organisations.',
    careers: ['Public Manager', 'Municipal Manager', 'Government Official', 'Policy Analyst'],
    subjects: [{ subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2025' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2025' },
    ],
  },

  // ════════════════════════════════
  // POLICING & CORRECTIONS
  // ════════════════════════════════
  {
    name: 'BA Policing',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study law enforcement, policing and crime prevention.',
    careers: ['Police Officer', 'Detective', 'Crime Intelligence Analyst', 'Police Manager'],
    subjects: [{ subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2025' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2025' },
    ],
  },
  {
    name: 'BA Correctional Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 18, duration: '3 years',
    description: 'Study rehabilitation and management of offenders in correctional facilities.',
    careers: ['Correctional Officer', 'Rehabilitation Specialist', 'Case Manager', 'Parole Officer'],
    subjects: [{ subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2025' },
      { name: 'University of Fort Hare (UFH)', min_aps: 18, deadline: '30 September 2025' },
    ],
  },

  // ════════════════════════════════
  // LIBRARY & INFORMATION SCIENCE
  // ════════════════════════════════
  {
    name: 'BA Library and Information Science',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '4 years',
    description: 'Manage information and knowledge resources in libraries and organisations.',
    careers: ['Librarian', 'Information Specialist', 'Knowledge Manager', 'Archivist'],
    subjects: [{ subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2025' },
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2025' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2025' },
      { name: 'University of the Western Cape (UWC)', min_aps: 20, deadline: '30 September 2025' },
    ],
  },

  // ════════════════════════════════
  // DISASTER MANAGEMENT
  // ════════════════════════════════
  {
    name: 'Bachelor of Disaster Management',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Plan and respond to natural and man-made disasters.',
    careers: ['Disaster Manager', 'Emergency Planner', 'Risk Assessor', 'Municipal Disaster Officer'],
    subjects: [{ subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2025' },
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2025' },
    ],
  },

  // ════════════════════════════════
  // MILITARY SCIENCE
  // ════════════════════════════════
  {
    name: 'Bachelor of Military Science',
    faculty: 'Military Science', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: 'Study military strategy, leadership and defence. Only offered at Stellenbosch.',
    careers: ['Military Officer', 'Defence Analyst', 'Intelligence Officer', 'Military Strategist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'Stellenbosch University (SU)', min_aps: 26, deadline: '31 July 2025' },
    ],
  },

  // ════════════════════════════════
  // PROPERTY STUDIES
  // ════════════════════════════════
  {
    name: 'BSc Property Studies',
    faculty: 'Built Environment', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study property valuation, investment and development.',
    careers: ['Property Valuer', 'Estate Agent', 'Property Developer', 'Real Estate Investor'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2025' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2025' },
    ],
  },
]

async function seedCourses() {
  console.log('🌱 Starting UniPath course seed (Part 2)...')
  console.log('📊 Total additional courses to seed: ' + COURSES.length)
  let successCount = 0
  let errorCount = 0

  for (const course of COURSES) {
    try {
      const { data: courseData, error: courseError } = await supabase
        .from('courses')
        .insert({
          name: course.name,
          faculty: course.faculty,
          level: course.level,
          nqf_level: course.nqf_level,
          min_aps: course.min_aps,
          duration: course.duration,
          description: course.description,
          careers: course.careers,
          academic_year: 2025,
        })
        .select()
        .single()

      if (courseError) {
        if (courseError.code === '23505') {
          console.log('⏭️  Already exists: ' + course.name)
          successCount++
          continue
        }
        console.error('❌ Error inserting ' + course.name + ': ' + courseError.message)
        errorCount++
        continue
      }

      if (course.subjects && course.subjects.length > 0) {
        await supabase.from('course_subject_requirements').insert(
          course.subjects.map(s => ({
            course_id: courseData.id,
            subject: s.subject,
            minimum_mark: s.minimum_mark,
          }))
        )
      }

      if (course.universities && course.universities.length > 0) {
        await supabase.from('course_universities').insert(
          course.universities.map(u => ({
            course_id: courseData.id,
            university_name: u.name,
            min_aps: u.min_aps,
            application_deadline: u.deadline,
          }))
        )
      }

      console.log('✅ ' + course.name + ' (' + course.universities.length + ' universities)')
      successCount++
    } catch (err) {
      console.error('❌ Unexpected error: ' + err.message)
      errorCount++
    }
  }

  console.log('\n════════════════════════════════')
  console.log('🎉 Seed Part 2 complete!')
  console.log('✅ Success: ' + successCount + ' courses')
  console.log('❌ Errors: ' + errorCount + ' courses')
  console.log('════════════════════════════════')
}

seedCourses()