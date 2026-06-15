const { createClient } = require('@supabase/supabase-js')

const supabase = createClient(
  'https://opkmhbzaslcgdpdjsklk.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9wa21oYnphc2xjZ2RwZGpza2xrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2NTI4NTQsImV4cCI6MjA5NTIyODg1NH0.TCIUQ0bCltmtEvwEtsUNPcyQCcULZ50ew0lvOaa9zB8'
)

const COURSES = [

  // ════════════════════════════════
  // HEALTH SCIENCES
  // ════════════════════════════════
  {
    name: 'MBChB (Bachelor of Medicine and Surgery)',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 8, min_aps: 34, duration: '6 years',
    description: 'Study to become a medical doctor. One of the most demanding but rewarding degrees in SA.',
    careers: ['Medical Doctor', 'Surgeon', 'Specialist Physician', 'General Practitioner'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 60 },
      { subject: 'Life Sciences', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 36, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 36, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 34, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 34, deadline: '30 September 2026' },
      { name: 'Sefako Makgatho Health Sciences University (SMU)', min_aps: 32, deadline: '31 July 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 34, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 30, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Bachelor of Nursing Science',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Train to become a professional nurse. High demand across all SA provinces.',
    careers: ['Registered Nurse', 'Midwife', 'ICU Nurse', 'Nursing Manager', 'Community Health Nurse'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Sefako Makgatho Health Sciences University (SMU)', min_aps: 18, deadline: '31 July 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Bachelor of Pharmacy (BPharm)',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 8, min_aps: 28, duration: '4 years',
    description: 'Study to become a pharmacist. Excellent prospects in retail, hospital and pharmaceutical industry.',
    careers: ['Pharmacist', 'Clinical Pharmacist', 'Pharmaceutical Researcher', 'Hospital Pharmacist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'Physical Sciences', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Life Sciences', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of the Western Cape (UWC)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 30, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Sefako Makgatho Health Sciences University (SMU)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Bachelor of Dental Surgery (BChD)',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 8, min_aps: 32, duration: '5 years',
    description: 'Study to become a dentist. High demand and excellent earning potential in SA.',
    careers: ['Dentist', 'Oral Hygienist', 'Orthodontist', 'Maxillofacial Surgeon'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'Physical Sciences', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 60 },
      { subject: 'Life Sciences', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 34, deadline: '30 June 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'Sefako Makgatho Health Sciences University (SMU)', min_aps: 30, deadline: '31 July 2026' },
    ],
  },
  {
    name: 'Bachelor of Veterinary Science (BVSc)',
    faculty: 'Veterinary Science', level: 'degree', nqf_level: 8, min_aps: 34, duration: '6 years',
    description: 'Only offered at UP in SA. Care for animals in private practice, wildlife or research.',
    careers: ['Veterinarian', 'Animal Scientist', 'Wildlife Vet', 'Zoo Vet', 'Research Scientist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 65 },
      { subject: 'Life Sciences', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 34, deadline: '30 June 2026' },
    ],
  },
  {
    name: 'Bachelor of Physiotherapy',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 28, duration: '4 years',
    description: 'Help patients recover from injuries and improve movement and quality of life.',
    careers: ['Physiotherapist', 'Sports Therapist', 'Rehabilitation Specialist', 'Private Practitioner'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Life Sciences', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Bachelor of Occupational Therapy',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: 'Help people participate in daily activities through therapeutic interventions.',
    careers: ['Occupational Therapist', 'Rehabilitation Specialist', 'School-Based Therapist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Sefako Makgatho Health Sciences University (SMU)', min_aps: 25, deadline: '31 July 2026' },
    ],
  },
  {
    name: 'Bachelor of Optometry',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 28, duration: '4 years',
    description: 'Study eye care and vision health. Growing field with excellent career prospects.',
    careers: ['Optometrist', 'Eye Care Specialist', 'Clinical Optometrist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'Physical Sciences', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Bachelor of Radiography',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: 'Use imaging technology to diagnose and treat diseases.',
    careers: ['Radiographer', 'Diagnostic Radiographer', 'Radiotherapy Technologist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Physical Sciences', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Bachelor of Emergency Medical Care',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Become an advanced paramedic. Work in emergency services, hospitals and air rescue.',
    careers: ['Advanced Life Support Paramedic', 'Emergency Care Practitioner', 'Air Rescue Medic'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Dietetics',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: 'Study nutrition and food science to help people achieve optimal health.',
    careers: ['Dietitian', 'Nutritionist', 'Clinical Dietitian', 'Sports Nutritionist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Sefako Makgatho Health Sciences University (SMU)', min_aps: 25, deadline: '31 July 2026' },
    ],
  },

  // ════════════════════════════════
  // LAW
  // ════════════════════════════════
  {
    name: 'Bachelor of Laws (LLB)',
    faculty: 'Law', level: 'degree', nqf_level: 8, min_aps: 22, duration: '4 years',
    description: 'Study law and qualify as an attorney or advocate in South Africa.',
    careers: ['Attorney', 'Advocate', 'Magistrate', 'Judge', 'Legal Advisor', 'Corporate Lawyer'],
    subjects: [
      { subject: 'English', minimum_mark: 65 },
      { subject: 'Mathematics', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // COMMERCE & BUSINESS
  // ════════════════════════════════
  {
    name: 'BCom Accounting',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Gateway to becoming a CA(SA). One of the most sought after qualifications in SA.',
    careers: ['Chartered Accountant (CA)', 'Auditor', 'Financial Manager', 'Tax Consultant', 'CFO'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Accounting', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 36, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 34, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BCom Finance',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study financial markets, investments and corporate finance.',
    careers: ['Financial Analyst', 'Investment Banker', 'Portfolio Manager', 'Stockbroker', 'Risk Analyst'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BCom Economics',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study how economies work. Excellent for government, banking and research careers.',
    careers: ['Economist', 'Policy Analyst', 'Data Analyst', 'Researcher', 'Government Economist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BCom Business Management',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Learn to run and manage businesses. Versatile degree with wide career options.',
    careers: ['Business Manager', 'Entrepreneur', 'Operations Manager', 'HR Manager', 'General Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BCom Human Resource Management',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Manage people and workplace relations in organisations.',
    careers: ['HR Manager', 'Recruitment Specialist', 'Training & Development Manager', 'Labour Relations Officer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BCom Marketing Management',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study marketing strategies, consumer behaviour and brand management.',
    careers: ['Marketing Manager', 'Brand Manager', 'Digital Marketer', 'Advertising Executive'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BCom Supply Chain Management',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Manage the flow of goods and services from production to consumer.',
    careers: ['Supply Chain Manager', 'Logistics Manager', 'Procurement Officer', 'Operations Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BCom Tourism Management',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study tourism, hospitality and travel management in SA\'s booming tourism industry.',
    careers: ['Tourism Manager', 'Hotel Manager', 'Travel Agent', 'Event Manager', 'Tour Operator'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // ENGINEERING
  // ════════════════════════════════
  {
    name: 'BEng Civil Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 30, duration: '4 years',
    description: 'Design and build infrastructure — roads, bridges, dams and buildings.',
    careers: ['Civil Engineer', 'Structural Engineer', 'Project Manager', 'Site Engineer', 'Consulting Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 36, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 35, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 34, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEng Mechanical Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 30, duration: '4 years',
    description: 'Design and build machines, engines and mechanical systems.',
    careers: ['Mechanical Engineer', 'Automotive Engineer', 'Manufacturing Engineer', 'HVAC Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 36, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 35, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 34, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEng Electrical Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 30, duration: '4 years',
    description: 'Work with electricity, electronics and power systems. High demand in SA.',
    careers: ['Electrical Engineer', 'Electronics Engineer', 'Power Systems Engineer', 'Automation Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 36, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 35, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 34, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEng Chemical Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 32, duration: '4 years',
    description: 'Work in mining, petroleum, food and chemical industries.',
    careers: ['Chemical Engineer', 'Process Engineer', 'Petrochemical Engineer', 'Food Process Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 36, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 34, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 34, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 30, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEng Mining Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 30, duration: '4 years',
    description: 'SA is a mining powerhouse — excellent career prospects and some of the highest salaries.',
    careers: ['Mining Engineer', 'Rock Engineer', 'Mine Manager', 'Geotechnical Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'Physical Sciences', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of the Witwatersrand (Wits)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEng Industrial Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 30, duration: '4 years',
    description: 'Optimise complex systems, processes and organisations.',
    careers: ['Industrial Engineer', 'Operations Research Analyst', 'Systems Engineer', 'Quality Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 32, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEng Software Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 30, duration: '4 years',
    description: 'Build software systems and applications at an engineering level.',
    careers: ['Software Engineer', 'Systems Architect', 'DevOps Engineer', 'Technical Lead'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 32, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // INFORMATION TECHNOLOGY & COMPUTER SCIENCE
  // ════════════════════════════════
  {
    name: 'BSc Computer Science',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'One of the most in-demand degrees globally. Excellent career and salary prospects.',
    careers: ['Software Developer', 'Data Scientist', 'AI Engineer', 'Cybersecurity Analyst', 'Systems Developer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 36, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 34, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 32, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 28, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Information Technology',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Practical IT skills for the modern workplace. High demand across all industries.',
    careers: ['IT Support', 'Network Administrator', 'Systems Analyst', 'Web Developer', 'Database Administrator'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Data Science',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Analyse and interpret complex data to help organisations make better decisions.',
    careers: ['Data Scientist', 'Data Analyst', 'Machine Learning Engineer', 'Business Intelligence Analyst'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
    ],
  },

  // ════════════════════════════════
  // EDUCATION
  // ════════════════════════════════
  {
    name: 'BEd Foundation Phase Teaching',
    faculty: 'Education', level: 'degree', nqf_level: 7, min_aps: 20, duration: '4 years',
    description: 'Teach Grades R to 3. Critical role in SA education. Funza Lushaka bursary available.',
    careers: ['Foundation Phase Teacher', 'Early Childhood Educator', 'Grade R Teacher'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEd Senior & FET Phase Teaching',
    faculty: 'Education', level: 'degree', nqf_level: 7, min_aps: 20, duration: '4 years',
    description: 'Teach Grades 7-12. Funza Lushaka bursary available for qualifying students.',
    careers: ['High School Teacher', 'Subject Specialist', 'Department Head', 'Education Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
    ],
  },
  {
    name: 'BEd Intermediate Phase Teaching',
    faculty: 'Education', level: 'degree', nqf_level: 7, min_aps: 20, duration: '4 years',
    description: 'Teach Grades 4-6. Build foundation for senior phase learning.',
    careers: ['Intermediate Phase Teacher', 'Primary School Teacher'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // SCIENCE
  // ════════════════════════════════
  {
    name: 'BSc General Science',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study biology, chemistry, physics or mathematics at university level.',
    careers: ['Scientist', 'Researcher', 'Laboratory Analyst', 'Environmental Scientist', 'Science Teacher'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'Physical Sciences', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Agriculture',
    faculty: 'Agriculture', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Study food production, farming and agricultural science. SA\'s food security depends on this.',
    careers: ['Agronomist', 'Farm Manager', 'Agricultural Scientist', 'Food Technologist', 'Agri-business Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Environmental Science',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study the environment and how to protect it. Growing field with global demand.',
    careers: ['Environmental Scientist', 'Conservation Manager', 'Environmental Consultant', 'Ecologist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Life Sciences', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // ARTS, HUMANITIES & SOCIAL SCIENCES
  // ════════════════════════════════
  {
    name: 'BA General (Humanities)',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Flexible degree covering languages, history, politics and social sciences.',
    careers: ['Journalist', 'Social Worker', 'Public Relations Officer', 'Government Official', 'Writer'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Psychology',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study the human mind and behaviour. Honours required to practice as psychologist.',
    careers: ['Psychologist', 'Counsellor', 'HR Specialist', 'Social Worker', 'Research Psychologist'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Bachelor of Social Work (BSW)',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 18, duration: '4 years',
    description: 'Help vulnerable communities and families. Critical and in-demand profession in SA.',
    careers: ['Social Worker', 'Child Protection Officer', 'Community Developer', 'Social Development Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Journalism and Media Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study media, journalism and communication in the digital age.',
    careers: ['Journalist', 'News Anchor', 'Content Creator', 'PR Specialist', 'Media Producer'],
    subjects: [
      { subject: 'English', minimum_mark: 65 },
    ],
    universities: [
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BA Political Science',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study government, politics and international relations.',
    careers: ['Political Analyst', 'Government Official', 'Diplomat', 'Policy Researcher', 'NGO Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
    ],
  },

  // ════════════════════════════════
  // ARCHITECTURE & BUILT ENVIRONMENT
  // ════════════════════════════════
  {
    name: 'Bachelor of Architecture (BArch)',
    faculty: 'Built Environment', level: 'degree', nqf_level: 8, min_aps: 28, duration: '5 years',
    description: 'Design buildings and urban spaces. Creative and technical career with good prospects.',
    careers: ['Architect', 'Urban Designer', 'Project Manager', 'Interior Designer', 'Construction Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Quantity Surveying',
    faculty: 'Built Environment', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Manage construction costs and contracts. High demand in construction industry.',
    careers: ['Quantity Surveyor', 'Cost Engineer', 'Project Manager', 'Construction Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // POLICING & CRIMINOLOGY
  // ════════════════════════════════
  {
    name: 'BA Criminology & Criminal Justice',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study crime, criminal behaviour and the justice system.',
    careers: ['Police Officer', 'Detective', 'Crime Analyst', 'Probation Officer', 'Correctional Services'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // DIPLOMAS - UNIVERSITIES OF TECHNOLOGY
  // ════════════════════════════════
  {
    name: 'Diploma in Accounting Sciences',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Practical accounting qualification. Good stepping stone to BCom degree.',
    careers: ['Bookkeeper', 'Accounting Technician', 'Junior Accountant', 'Payroll Administrator'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
      { subject: 'Accounting', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Information Technology',
    faculty: 'Science', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Practical IT qualification. Excellent entry point into the tech industry.',
    careers: ['IT Technician', 'Help Desk Support', 'Junior Developer', 'Network Technician'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Engineering (Electrical)',
    faculty: 'Engineering', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Practical electrical engineering qualification. High demand in construction and industry.',
    careers: ['Electrical Technician', 'Electrician', 'Maintenance Technician', 'Solar Installer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Physical Sciences', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Engineering (Mechanical)',
    faculty: 'Engineering', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Practical mechanical engineering. High demand in manufacturing and mining sectors.',
    careers: ['Mechanical Technician', 'Fitter & Turner', 'Maintenance Engineer', 'Production Supervisor'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Physical Sciences', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Nursing',
    faculty: 'Health Sciences', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Become a nursing practitioner. Can upgrade to degree later.',
    careers: ['Enrolled Nurse', 'Community Health Worker', 'Clinic Nurse'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Hospitality Management',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 16, duration: '3 years',
    description: 'Work in SA\'s booming hospitality and tourism industry.',
    careers: ['Hotel Manager', 'Restaurant Manager', 'Event Coordinator', 'Food & Beverage Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 16, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // CERTIFICATES & HIGHER CERTIFICATES
  // ════════════════════════════════
  {
    name: 'Higher Certificate in Business Administration',
    faculty: 'Commerce', level: 'certificate', nqf_level: 5, min_aps: 14, duration: '1 year',
    description: 'Entry level business qualification. Good stepping stone to diploma or degree.',
    careers: ['Office Administrator', 'Admin Clerk', 'Receptionist', 'PA'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 14, deadline: '30 November 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 14, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 14, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 14, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 14, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Higher Certificate in Information Technology',
    faculty: 'Science', level: 'certificate', nqf_level: 5, min_aps: 14, duration: '1 year',
    description: 'Entry level IT qualification. Step towards IT diploma or degree.',
    careers: ['IT Support', 'Help Desk', 'Computer Technician'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 14, deadline: '30 November 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 14, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 14, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // HEALTH SCIENCES — ADDITIONS
  // ════════════════════════════════
  {
    name: 'BSc Speech-Language Therapy & Audiology',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 8, min_aps: 24, duration: '4 years',
    description: 'Diagnose and treat communication, swallowing and hearing disorders. High demand in schools, hospitals and private practice.',
    careers: ['Speech Therapist', 'Audiologist', 'Voice Therapist', 'Hearing Specialist', 'School Speech Therapist'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Medical Sciences',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study the biological and medical sciences underpinning human health and disease. Foundation for further specialisation.',
    careers: ['Medical Scientist', 'Laboratory Scientist', 'Researcher', 'Pharmaceutical Rep', 'Public Health Officer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Physical Sciences', minimum_mark: 55 },
      { subject: 'Life Sciences', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Biomedical Technology',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Learn to operate and maintain medical laboratory equipment and perform clinical tests used in disease diagnosis.',
    careers: ['Biomedical Technologist', 'Lab Technician', 'Medical Device Specialist', 'Clinical Researcher'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Physical Sciences', minimum_mark: 55 },
      { subject: 'Life Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Environmental Health',
    faculty: 'Health Sciences', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Inspect food premises, water quality and living environments to protect public health. Government and municipal roles available.',
    careers: ['Environmental Health Officer', 'Food Safety Inspector', 'Water Quality Inspector', 'Health & Safety Officer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 40 },
      { subject: 'Life Sciences', minimum_mark: 40 },
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // EDUCATION — ADDITIONS
  // ════════════════════════════════
  {
    name: 'BEd Early Childhood Development (ECD)',
    faculty: 'Education', level: 'degree', nqf_level: 7, min_aps: 16, duration: '4 years',
    description: 'Specialise in teaching children from birth to age 6. High demand for qualified ECD practitioners across South Africa.',
    careers: ['ECD Teacher', 'Crèche Owner', 'ECD Programme Coordinator', 'Early Learning Specialist'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 20, deadline: '30 June 2026' },
      { name: 'North-West University (NWU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 16, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BEd Special Needs Education',
    faculty: 'Education', level: 'degree', nqf_level: 7, min_aps: 18, duration: '4 years',
    description: 'Train to support learners with physical, cognitive and learning disabilities. Critical shortage in SA inclusive education.',
    careers: ['Special Needs Teacher', 'Learning Support Specialist', 'Inclusive Education Coordinator', 'Remedial Teacher'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Cape Town (UCT)', min_aps: 22, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 20, deadline: '30 June 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2026' },
    ],
  },

  // ════════════════════════════════
  // HUMANITIES — ADDITIONS
  // ════════════════════════════════
  {
    name: 'BA Communication Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 18, duration: '3 years',
    description: 'Study how people communicate through media, language and organisations. Leads to careers in PR, media and corporate communication.',
    careers: ['Communications Officer', 'PR Specialist', 'Content Creator', 'Corporate Communicator', 'Social Media Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 22, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BA International Relations',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study global politics, diplomacy and international law. Opens doors to government, NGOs and international organisations.',
    careers: ['Diplomat', 'Foreign Affairs Officer', 'NGO Programme Manager', 'International Trade Analyst', 'Policy Analyst'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BA Development Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 16, duration: '3 years',
    description: 'Understand poverty, inequality and development in Africa and the Global South. Relevant to NGOs, government and development agencies.',
    careers: ['Development Practitioner', 'NGO Coordinator', 'Community Developer', 'Policy Researcher', 'Government Official'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 16, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BA African Languages',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 16, duration: '3 years',
    description: 'Study Zulu, Xhosa, Sotho, Tswana and other SA languages at an academic level. Valued in education, government and media.',
    careers: ['Language Practitioner', 'Translator', 'Lexicographer', 'Teacher', 'Broadcaster', 'Government Language Officer'],
    subjects: [
      { subject: 'Home Language', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 20, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 16, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BA Sociology',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 16, duration: '3 years',
    description: 'Study society, inequality, race, class and gender in South Africa. Broad career options in research, social services and policy.',
    careers: ['Social Researcher', 'Community Development Worker', 'Policy Analyst', 'Human Resources Officer', 'NGO Worker'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 20, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 20, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 16, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BA History & Heritage Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 16, duration: '3 years',
    description: 'Study South African and world history, colonial heritage and memory. Careers in museums, archives, government and education.',
    careers: ['Archivist', 'Museum Curator', 'Heritage Officer', 'Researcher', 'Teacher', 'Government Communications'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 20, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 20, deadline: '30 June 2026' },
      { name: 'Rhodes University', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 16, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BA Community Development',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 16, duration: '3 years',
    description: 'Learn to plan and implement community upliftment programmes. Practical skills for government, municipalities and NGOs.',
    careers: ['Community Development Worker', 'Social Development Officer', 'Municipal Official', 'NGO Manager', 'Ward Councillor Support'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of the Western Cape (UWC)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 16, deadline: '30 November 2026' },
    ],
  },

  // ════════════════════════════════
  // COMMERCE — ADDITIONS
  // ════════════════════════════════
  {
    name: 'BCom Information Systems',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Bridge the gap between business and technology. Manage information systems, data and digital transformation in organisations.',
    careers: ['IT Manager', 'Business Analyst', 'Systems Analyst', 'Data Manager', 'ERP Consultant', 'Digital Transformation Lead'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BAdmin Public Administration',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 18, duration: '3 years',
    description: 'Study how government and public institutions are managed. Leads to careers in municipal and provincial government.',
    careers: ['Government Administrator', 'Municipal Manager', 'Policy Officer', 'Public Sector Manager', 'Ward Councillor'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BCom Entrepreneurship',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Learn to start and grow businesses. Combines business fundamentals with innovation and venture creation skills.',
    careers: ['Entrepreneur', 'Business Owner', 'Startup Founder', 'Business Development Manager', 'Innovation Consultant'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '30 June 2026' },
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'Diploma in Business Management',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 16, duration: '3 years',
    description: 'Practical management skills for supervisory and junior management roles in any business sector.',
    careers: ['Business Manager', 'Team Leader', 'Operations Coordinator', 'Office Manager', 'Retail Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
      { subject: 'Mathematics', minimum_mark: 30 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 16, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'Diploma in Human Resource Management',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 16, duration: '3 years',
    description: 'Learn to manage people in organisations — recruitment, training, payroll and labour relations. Every company needs HR.',
    careers: ['HR Officer', 'Recruitment Consultant', 'Labour Relations Officer', 'Training Coordinator', 'Payroll Administrator'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 16, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'Diploma in Marketing',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 16, duration: '3 years',
    description: 'Learn advertising, digital marketing, branding and market research. Huge demand in the digital economy.',
    careers: ['Marketing Coordinator', 'Digital Marketer', 'Brand Assistant', 'Social Media Manager', 'Sales Executive'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 16, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'Diploma in Financial Management',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 16, duration: '3 years',
    description: 'Learn budgeting, financial reporting and cost management for business. Pathway to a career in corporate or government finance.',
    careers: ['Financial Administrator', 'Bookkeeper', 'Budget Analyst', 'Accounts Clerk', 'Finance Officer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 40 },
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 16, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'Diploma in Public Management',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 15, duration: '3 years',
    description: 'Entry-level qualification for local and provincial government roles. Covers governance, municipal finance and service delivery.',
    careers: ['Municipal Officer', 'Government Clerk', 'Public Sector Administrator', 'Ward Administrator'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 15, deadline: '30 November 2026' },
    ],
  },

  // ════════════════════════════════
  // SCIENCE — ADDITIONS
  // ════════════════════════════════
  {
    name: 'BSc Physics',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study matter, energy and the universe. Opens doors to research, engineering, finance, medicine physics and technology sectors.',
    careers: ['Physicist', 'Research Scientist', 'Medical Physicist', 'Actuary', 'Quantitative Analyst', 'Lecturer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'Physical Sciences', minimum_mark: 65 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BSc Chemistry',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study the composition, properties and reactions of matter. Pathways to medicine, industry, research and teaching.',
    careers: ['Chemist', 'Chemical Analyst', 'Quality Control Officer', 'Pharmaceutical Researcher', 'Forensic Scientist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'Physical Sciences', minimum_mark: 65 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BSc Mathematics',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Pure and applied mathematics. Opens doors to finance, data science, engineering, academia and technology.',
    careers: ['Mathematician', 'Statistician', 'Data Scientist', 'Financial Analyst', 'Actuary', 'Software Developer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BSc Actuarial Science',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Use mathematics and statistics to assess financial risk for insurance, banking and investment. One of the highest-paid careers in SA.',
    careers: ['Actuary', 'Risk Analyst', 'Investment Analyst', 'Insurance Consultant', 'Pension Fund Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 80 },
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 32, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Statistics',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Collect, analyse and interpret data to support decision-making. Critical skill across all industries in the data age.',
    careers: ['Statistician', 'Data Analyst', 'Research Analyst', 'Market Researcher', 'Biostatistician'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BSc Biochemistry',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study the chemical processes in living organisms. Key for careers in medicine, nutrition, pharmaceuticals and research.',
    careers: ['Biochemist', 'Pharmaceutical Researcher', 'Laboratory Scientist', 'Nutritionist', 'Medical Researcher'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'Physical Sciences', minimum_mark: 60 },
      { subject: 'Life Sciences', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Microbiology',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study bacteria, viruses and fungi and their roles in disease, food, environment and industry.',
    careers: ['Microbiologist', 'Medical Scientist', 'Food Safety Scientist', 'Environmental Scientist', 'Pharmaceutical Researcher'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'Physical Sciences', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Geology & Earth Science',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study rocks, minerals, fossils and the structure of the earth. SA is a major mining country — geologists are in high demand.',
    careers: ['Geologist', 'Mining Geologist', 'Environmental Consultant', 'Hydrogeologist', 'Exploration Geologist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Physical Sciences', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Food Science & Technology',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study food composition, safety, processing and quality control. SA food industry is a major employer.',
    careers: ['Food Scientist', 'Food Safety Officer', 'Product Developer', 'Quality Assurance Manager', 'Nutritionist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Physical Sciences', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // ENGINEERING — ADDITIONS
  // ════════════════════════════════
  {
    name: 'BEng Mechatronics Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 28, duration: '4 years',
    description: 'Combines mechanical, electrical and computer engineering. Designs smart machines, robots and automation systems.',
    careers: ['Mechatronics Engineer', 'Robotics Engineer', 'Automation Engineer', 'Product Design Engineer', 'Manufacturing Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 65 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 32, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 32, deadline: '30 June 2026' },
      { name: 'North-West University (NWU)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEng Computer Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 28, duration: '4 years',
    description: 'Design and build computer hardware, embedded systems and networks. Bridge between electrical engineering and computer science.',
    careers: ['Computer Engineer', 'Hardware Engineer', 'Embedded Systems Engineer', 'Network Engineer', 'Systems Architect'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 65 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 32, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 32, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEng Agricultural Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 24, duration: '4 years',
    description: 'Apply engineering to farming — irrigation, machinery, food processing and land management. Critical for food security.',
    careers: ['Agricultural Engineer', 'Irrigation Engineer', 'Farm Equipment Designer', 'Water Resource Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'Physical Sciences', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '30 June 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Engineering (Civil)',
    faculty: 'Engineering', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Practical civil engineering skills — roads, buildings, water infrastructure. Entry point to a career in construction and government.',
    careers: ['Civil Engineering Technician', 'Construction Supervisor', 'Roads Technician', 'Site Inspector', 'Municipal Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Physical Sciences', minimum_mark: 45 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Engineering (Chemical)',
    faculty: 'Engineering', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Learn process plant operations, laboratory techniques and chemical production. Entry into petrochemical and manufacturing industries.',
    careers: ['Chemical Technician', 'Process Plant Operator', 'Laboratory Technician', 'Quality Control Technician'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Physical Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // IT — ADDITIONS
  // ════════════════════════════════
  {
    name: 'BSc Cybersecurity',
    faculty: 'Information Technology', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Protect networks, systems and data from cyber threats. One of the fastest-growing and highest-paid tech fields globally.',
    careers: ['Cybersecurity Analyst', 'Ethical Hacker', 'Security Architect', 'Incident Responder', 'Forensic Analyst'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Software Development',
    faculty: 'Information Technology', level: 'diploma', nqf_level: 6, min_aps: 16, duration: '3 years',
    description: 'Practical coding, app development and software engineering skills. Direct entry to the tech industry.',
    careers: ['Software Developer', 'Web Developer', 'App Developer', 'Junior Programmer', 'Systems Support Specialist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 40 },
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 16, deadline: '30 November 2026' },
    ],
  },

  // ════════════════════════════════
  // AGRICULTURE — ADDITIONS
  // ════════════════════════════════
  {
    name: 'BSc Animal Science',
    faculty: 'Agriculture', level: 'degree', nqf_level: 7, min_aps: 18, duration: '3 years',
    description: 'Study livestock production, animal nutrition and breeding. Key for the farming, food and veterinary industries.',
    careers: ['Animal Scientist', 'Livestock Farmer', 'Animal Nutritionist', 'Farm Manager', 'Agricultural Extension Officer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 40 },
      { subject: 'Life Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 22, deadline: '30 June 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Plant Production & Soil Science',
    faculty: 'Agriculture', level: 'degree', nqf_level: 7, min_aps: 18, duration: '3 years',
    description: 'Understand crop production, soil health and sustainable farming. Critical for food security in Southern Africa.',
    careers: ['Agronomist', 'Crop Scientist', 'Soil Scientist', 'Agricultural Extension Officer', 'Farm Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 40 },
      { subject: 'Life Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 22, deadline: '30 June 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Agriculture',
    faculty: 'Agriculture', level: 'diploma', nqf_level: 6, min_aps: 15, duration: '3 years',
    description: 'Practical farming and agricultural management skills. Entry-level qualification for agricultural extension, farming and rural development.',
    careers: ['Farm Manager', 'Agricultural Extension Officer', 'Rural Development Worker', 'Livestock Supervisor', 'Irrigation Technician'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 40 },
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Forestry',
    faculty: 'Agriculture', level: 'degree', nqf_level: 7, min_aps: 18, duration: '3 years',
    description: 'Manage forests for timber, conservation and carbon credits. Growing importance in climate change mitigation.',
    careers: ['Forester', 'Conservation Manager', 'Carbon Credits Officer', 'Environmental Manager', 'Wildlife Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 40 },
      { subject: 'Life Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Stellenbosch University', min_aps: 22, deadline: '30 June 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // BUILT ENVIRONMENT — ADDITIONS
  // ════════════════════════════════
  {
    name: 'BSc Town & Regional Planning',
    faculty: 'Built Environment', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Plan cities, towns and rural areas for sustainable growth. Municipalities and government desperately need planners.',
    careers: ['Town Planner', 'Urban Designer', 'Land Use Manager', 'Municipal Planner', 'Development Consultant'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Construction Management',
    faculty: 'Built Environment', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Manage building construction projects from design to completion. Strong job market in government and private construction.',
    careers: ['Construction Manager', 'Project Manager', 'Site Manager', 'Building Contractor', 'Facilities Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Physical Sciences', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 22, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Construction',
    faculty: 'Built Environment', level: 'diploma', nqf_level: 6, min_aps: 15, duration: '3 years',
    description: 'Practical construction skills for the building industry. Entry into site supervision, municipal infrastructure and housing.',
    careers: ['Site Supervisor', 'Construction Technician', 'Building Inspector', 'Infrastructure Coordinator'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // SPORT SCIENCES
  // ════════════════════════════════
  {
    name: 'BSc Sport Science',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study human performance, exercise physiology and sport coaching. Exciting career in elite sport, wellness and health.',
    careers: ['Sport Scientist', 'Biokineticist', 'Personal Trainer', 'Sport Coach', 'Wellness Coordinator', 'Fitness Consultant'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Cape Town (UCT)', min_aps: 24, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Biokinetics',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Use exercise as medicine to rehabilitate injury and manage chronic disease. Registered health profession in SA.',
    careers: ['Biokineticist', 'Cardiac Rehabilitation Specialist', 'Corporate Wellness Consultant', 'Sports Rehabilitator'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // ARTS, DESIGN & MUSIC
  // ════════════════════════════════
  {
    name: 'BA Fine Art',
    faculty: 'Arts & Design', level: 'degree', nqf_level: 7, min_aps: 16, duration: '3 years',
    description: 'Develop your creative practice in painting, sculpture, printmaking and new media. Careers in arts education, galleries and freelance.',
    careers: ['Artist', 'Art Teacher', 'Gallery Curator', 'Art Therapist', 'Illustrator', 'Visual Designer'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 22, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 20, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 20, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Graphic Design',
    faculty: 'Arts & Design', level: 'degree', nqf_level: 7, min_aps: 18, duration: '3 years',
    description: 'Create visual communication for brands, media and digital platforms. High demand in advertising, tech and media industries.',
    careers: ['Graphic Designer', 'UI/UX Designer', 'Brand Designer', 'Motion Graphics Artist', 'Art Director'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 24, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Music',
    faculty: 'Arts & Design', level: 'degree', nqf_level: 7, min_aps: 16, duration: '3 years',
    description: 'Study performance, composition and music theory at an advanced level. Leads to teaching, performance and music production careers.',
    careers: ['Musician', 'Music Teacher', 'Composer', 'Music Producer', 'Choir Director', 'Music Therapist'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 22, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 20, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 20, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 16, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Drama & Theatre Arts',
    faculty: 'Arts & Design', level: 'degree', nqf_level: 7, min_aps: 16, duration: '3 years',
    description: 'Study acting, directing, stagecraft and theatre production. Careers in television, film, theatre and drama education.',
    careers: ['Actor', 'Theatre Director', 'Drama Teacher', 'Film Producer', 'TV Presenter', 'Corporate Trainer'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 22, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 20, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 20, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Fashion Design',
    faculty: 'Arts & Design', level: 'diploma', nqf_level: 6, min_aps: 15, duration: '3 years',
    description: 'Design and produce clothing and fashion collections. Entry into the fashion industry, retail and textile manufacturing.',
    careers: ['Fashion Designer', 'Textile Designer', 'Pattern Maker', 'Retail Buyer', 'Costume Designer'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 16, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // LAW ADDITION
  // ════════════════════════════════
  {
    name: 'BA Law (Extended)',
    faculty: 'Law', level: 'degree', nqf_level: 7, min_aps: 18, duration: '4 years',
    description: 'A 4-year programme combining arts and law, leading into LLB. Suitable for students who want a broader foundation before specialising.',
    careers: ['Legal Advisor', 'Paralegal', 'Magistrate (after LLB)', 'Human Rights Officer', 'Corporate Legal Officer'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Cape Town (UCT)', min_aps: 24, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // THEOLOGY
  // ════════════════════════════════
  {
    name: 'BTh (Bachelor of Theology)',
    faculty: 'Theology', level: 'degree', nqf_level: 7, min_aps: 16, duration: '3 years',
    description: 'Study religion, the Bible and church ministry. Leads to pastoral work, chaplaincy, education and NGO careers.',
    careers: ['Minister / Pastor', 'Chaplain', 'Religious Education Teacher', 'NGO Worker', 'Community Development Officer'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 20, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 20, deadline: '30 June 2026' },
      { name: 'North-West University (NWU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Cape Town (UCT)', min_aps: 20, deadline: '31 July 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 16, deadline: '30 November 2026' },
    ],
  },

  // ════════════════════════════════
  // TOURISM
  // ════════════════════════════════
  {
    name: 'Diploma in Tourism Management',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 15, duration: '3 years',
    description: 'Learn travel, tourism operations, hospitality and tour guiding. SA tourism is a major employer across all provinces.',
    careers: ['Tour Guide', 'Travel Agent', 'Tourism Officer', 'Hotel Coordinator', 'Events Coordinator'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // POLICING / SECURITY
  // ════════════════════════════════
  {
    name: 'BA Police Science',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 17, duration: '3 years',
    description: 'Study policing, crime prevention, criminology and community safety. Pathway into SAPS, municipal policing and security industry.',
    careers: ['Police Officer', 'Detective', 'Crime Analyst', 'Security Manager', 'Community Safety Officer'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 17, deadline: '30 November 2026' },
      { name: 'North-West University (NWU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 17, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 17, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Policing',
    faculty: 'Humanities', level: 'diploma', nqf_level: 6, min_aps: 15, duration: '3 years',
    description: 'Entry-level qualification for a career in law enforcement. Covers criminal law, policing methods and community relations.',
    careers: ['Police Officer', 'Traffic Officer', 'Metro Police Officer', 'Security Officer', 'Community Safety Officer'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 16, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 15, deadline: '30 November 2026' },
    ],
  },

  // ════════════════════════════════
  // ADDITIONAL HIGH-APS
  // ════════════════════════════════
  {
    name: 'BCom Forensic Accounting',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Detect financial fraud, corruption and money laundering. High demand from auditing firms, banks and government agencies.',
    careers: ['Forensic Accountant', 'Fraud Investigator', 'Internal Auditor', 'Compliance Officer', 'Anti-Corruption Analyst'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BCom Investment Management',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Manage investments, analyse financial markets and build portfolios. Entry into banking, asset management and stock broking.',
    careers: ['Investment Analyst', 'Portfolio Manager', 'Stockbroker', 'Financial Advisor', 'Asset Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // HIGHER CERTIFICATES (APS 15)
  // ════════════════════════════════
  {
    name: 'Higher Certificate in Commerce',
    faculty: 'Commerce', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Foundation-level qualification for students who narrowly missed diploma entry requirements. Leads directly into a diploma.',
    careers: ['Entry-level Office Worker', 'Shop Floor Supervisor', 'Administrative Clerk', 'Sales Representative'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 15, deadline: '30 November 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Higher Certificate in Agriculture',
    faculty: 'Agriculture', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Entry qualification for the agricultural sector. Leads into diploma programmes in farming, conservation and rural development.',
    careers: ['Farm Worker Supervisor', 'Agricultural Assistant', 'Extension Officer Assistant'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Higher Certificate in Public Administration',
    faculty: 'Commerce', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Foundation for a career in local and national government. Leads into diploma and degree programmes in public administration.',
    careers: ['Government Clerk', 'Administrative Trainee', 'Municipal Learnership Candidate'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 15, deadline: '30 November 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Higher Certificate in Tourism',
    faculty: 'Commerce', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Entry-level qualification for the hospitality and tourism industry. Leads into Diploma in Tourism or Hospitality Management.',
    careers: ['Tourism Assistant', 'Hotel Receptionist', 'Tour Guide Trainee', 'Events Assistant'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // COMMERCE — ADDITIONAL
  // ════════════════════════════════
  {
    name: 'BCom Taxation',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Specialise in South African tax law and practice. Essential for accountants and financial professionals.',
    careers: ['Tax Consultant', 'Tax Attorney', 'SARS Official', 'Financial Planner', 'Auditor'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Accounting', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'University of Cape Town (UCT)', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BCom Risk Management',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Learn to identify, assess and manage risks in organisations. Highly sought after in banking and insurance.',
    careers: ['Risk Analyst', 'Risk Manager', 'Compliance Officer', 'Insurance Specialist', 'Credit Analyst'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'North-West University (NWU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BCom International Business',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Study global trade, cross-border commerce and international economic policy. Ideal for a career in exports or multinational companies.',
    careers: ['International Trade Specialist', 'Export Manager', 'Trade Analyst', 'Diplomat', 'Supply Chain Director'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BCom Property Studies',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Study property valuation, development and investment. Opens doors in real estate and construction industries.',
    careers: ['Property Valuer', 'Real Estate Agent', 'Property Developer', 'Asset Manager', 'Facilities Manager'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BCom Management Accounting',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Focus on cost accounting, budgeting and financial management for businesses. CIMA accredited at some institutions.',
    careers: ['Management Accountant', 'Cost Accountant', 'Financial Controller', 'Budget Analyst', 'Business Analyst'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'Accounting', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'North-West University (NWU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'Diploma in Supply Chain Management',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 20, duration: '3 years',
    description: 'Learn procurement, logistics and inventory management. High demand in manufacturing, retail and government.',
    careers: ['Procurement Officer', 'Logistics Coordinator', 'Inventory Controller', 'Warehouse Supervisor'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 40 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Events Management',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Plan and manage corporate events, concerts, conferences and festivals. Growing industry in South Africa.',
    careers: ['Events Coordinator', 'Conference Planner', 'Wedding Planner', 'Festival Manager', 'Corporate Events Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Office Management & Technology',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Develop administrative and office management skills. Qualify for PA, office manager and executive assistant roles.',
    careers: ['Office Manager', 'Personal Assistant', 'Executive Secretary', 'Administrative Coordinator'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Retail Business Management',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: "Prepare for a career in retail operations and management. SA's retail sector employs over 1.5 million people.",
    careers: ['Store Manager', 'Retail Buyer', 'Merchandiser', 'Visual Merchandiser', 'Category Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Higher Certificate in Financial Management',
    faculty: 'Commerce', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Foundation qualification in personal and business financial management. Leads into Diploma in Financial Management.',
    careers: ['Accounts Clerk', 'Financial Administrator', 'Bookkeeper Trainee', 'Budget Assistant'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 15, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'Diploma in Project Management',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 20, duration: '3 years',
    description: 'Learn to plan, execute and close projects on time and within budget. Useful across every industry sector.',
    careers: ['Project Coordinator', 'Project Manager', 'Programme Manager', 'Construction Project Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // ENGINEERING — ADDITIONAL
  // ════════════════════════════════
  {
    name: 'BEng Environmental Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 30, duration: '4 years',
    description: 'Apply engineering to solve environmental problems including water treatment, waste management and pollution control.',
    careers: ['Environmental Engineer', 'Water Treatment Engineer', 'Environmental Consultant', 'Waste Management Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 30, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEng Metallurgical Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 30, duration: '4 years',
    description: "Study the extraction, processing and recycling of metals. Critical for SA's mining and manufacturing industry.",
    careers: ['Metallurgical Engineer', 'Process Engineer', 'Mining Engineer', 'Materials Scientist', 'Smelting Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 32, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEng Aeronautical Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 32, duration: '4 years',
    description: 'Design, build and test aircraft and spacecraft. A rare and prestigious qualification in South Africa.',
    careers: ['Aeronautical Engineer', 'Aircraft Design Engineer', 'Defence Engineer', 'Aerospace Researcher'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 75 },
      { subject: 'Physical Sciences', minimum_mark: 75 },
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of the Witwatersrand (Wits)', min_aps: 34, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 32, deadline: '30 June 2026' },
    ],
  },
  {
    name: 'Diploma in Engineering (Metallurgical)',
    faculty: 'Engineering', level: 'diploma', nqf_level: 6, min_aps: 22, duration: '3 years',
    description: 'Practical training in metal processing, refining and quality control. Work in mines and smelters across SA.',
    careers: ['Metallurgical Technician', 'Process Technician', 'Quality Controller', 'Laboratory Technician'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Physical Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Engineering (Electronics)',
    faculty: 'Engineering', level: 'diploma', nqf_level: 6, min_aps: 22, duration: '3 years',
    description: 'Study electronic circuits, devices and systems. Qualifies you for technician roles in telecom, manufacturing and defence.',
    careers: ['Electronics Technician', 'Instrumentation Technician', 'Telecommunications Technician'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Physical Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Engineering (Mining)',
    faculty: 'Engineering', level: 'diploma', nqf_level: 6, min_aps: 22, duration: '3 years',
    description: 'Practical underground and surface mining training. Strong employment in SA gold, platinum and coal mines.',
    careers: ['Mine Overseer', 'Mine Surveyor', 'Blasting Technician', 'Mining Foreman'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Physical Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Engineering (Instrumentation)',
    faculty: 'Engineering', level: 'diploma', nqf_level: 6, min_aps: 22, duration: '3 years',
    description: 'Install, maintain and calibrate industrial instruments and control systems in petrochemical, mining and utility plants.',
    careers: ['Instrumentation Technician', 'Control Systems Technician', 'SCADA Operator', 'Automation Technician'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Physical Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Surveying',
    faculty: 'Engineering', level: 'diploma', nqf_level: 6, min_aps: 22, duration: '3 years',
    description: 'Measure and map land, construction sites and mine shafts. Essential for construction, mining and town planning.',
    careers: ['Survey Technician', 'Land Surveyor Assistant', 'GIS Technician', 'Mine Surveyor'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Physical Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // INFORMATION TECHNOLOGY — ADDITIONAL
  // ════════════════════════════════
  {
    name: 'BSc Artificial Intelligence',
    faculty: 'Information Technology', level: 'degree', nqf_level: 7, min_aps: 30, duration: '3 years',
    description: 'Study machine learning, neural networks and intelligent systems. The fastest-growing tech field globally.',
    careers: ['AI Engineer', 'Machine Learning Engineer', 'Data Scientist', 'NLP Researcher', 'Robotics Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Geographic Information Systems (GIS)',
    faculty: 'Information Technology', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Map, analyse and visualise spatial data. Used in urban planning, environmental management and disaster response.',
    careers: ['GIS Analyst', 'Spatial Data Scientist', 'Remote Sensing Specialist', 'Urban Planner', 'Environmental Analyst'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Geography', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Network Engineering',
    faculty: 'Information Technology', level: 'diploma', nqf_level: 6, min_aps: 20, duration: '3 years',
    description: 'Design and manage computer networks, routers and firewalls. CCNA-aligned curriculum at most institutions.',
    careers: ['Network Engineer', 'Network Administrator', 'Systems Administrator', 'IT Infrastructure Specialist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Cybersecurity',
    faculty: 'Information Technology', level: 'diploma', nqf_level: 6, min_aps: 22, duration: '3 years',
    description: "Protect systems, networks and data from cyber threats. SA's most critical IT shortage area.",
    careers: ['Cybersecurity Analyst', 'Ethical Hacker', 'Security Operations Centre Analyst', 'Digital Forensics Investigator'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Business Information Systems',
    faculty: 'Information Technology', level: 'diploma', nqf_level: 6, min_aps: 20, duration: '3 years',
    description: 'Bridge the gap between IT and business. Implement ERP systems, databases and business analytics solutions.',
    careers: ['Business Analyst', 'ERP Consultant', 'Systems Analyst', 'IT Project Coordinator', 'Data Administrator'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 45 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2026' },
    ],
  },

  // ════════════════════════════════
  // SCIENCE — ADDITIONAL
  // ════════════════════════════════
  {
    name: 'BSc Applied Mathematics',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Use advanced mathematics to solve real-world problems in engineering, finance and computing.',
    careers: ['Applied Mathematician', 'Quantitative Analyst', 'Operations Researcher', 'Risk Modeller', 'Software Engineer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 75 },
      { subject: 'Physical Sciences', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Ecology & Conservation Biology',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: "Study ecosystems, biodiversity and conservation strategies. SA is one of the world's most biodiverse countries.",
    careers: ['Ecologist', 'Conservation Scientist', 'Wildlife Manager', 'Environmental Impact Assessor', 'Game Reserve Manager'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 65 },
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Marine Biology',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Study ocean ecosystems and marine life. SA has two ocean coastlines with rich marine biodiversity.',
    careers: ['Marine Biologist', 'Oceanographer', 'Fisheries Scientist', 'Marine Conservation Officer', 'Aquaculture Scientist'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 65 },
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Forensic Science',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Apply scientific methods to criminal investigations. Careers in SAPS forensic labs and private investigation.',
    careers: ['Forensic Scientist', 'Crime Scene Analyst', 'Forensic Chemist', 'Forensic Toxicologist', 'Criminal Investigator'],
    subjects: [
      { subject: 'Physical Sciences', minimum_mark: 60 },
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'Mathematics', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Genetics',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Study genes, heredity and genetic variation. Career paths in biotech, medicine, agriculture and research.',
    careers: ['Geneticist', 'Genetic Counsellor', 'Molecular Biologist', 'Biotechnology Researcher', 'Bioinformatician'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 65 },
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'Physical Sciences', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Physiology',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Study how the human body functions at a cellular and organ level. Leads to medicine, research and healthcare.',
    careers: ['Physiologist', 'Medical Researcher', 'Sports Scientist', 'Clinical Researcher', 'Exercise Physiologist'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 65 },
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Physical Sciences', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Astronomy & Astrophysics',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 30, duration: '3 years',
    description: 'SA hosts the MeerKAT telescope and SKA project — world-leading astronomy opportunities for graduates.',
    careers: ['Astronomer', 'Astrophysicist', 'Data Scientist', 'Space Researcher', 'Observatory Scientist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 75 },
      { subject: 'Physical Sciences', minimum_mark: 75 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 30, deadline: '31 July 2026' },
      { name: 'Rhodes University', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Bioinformatics',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Combine biology and computing to analyse genomic and proteomic data. Rapidly growing field in biotech and medicine.',
    careers: ['Bioinformatician', 'Genomics Data Scientist', 'Computational Biologist', 'Drug Discovery Researcher'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'Physical Sciences', minimum_mark: 55 },
    ],
    universities: [
      { name: 'Stellenbosch University', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Zoology',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study animal behaviour, evolution and biodiversity. SA has world-class wildlife research opportunities.',
    careers: ['Zoologist', 'Wildlife Researcher', 'Nature Conservation Officer', 'Museum Curator', 'Game Warden'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Botany & Plant Biotechnology',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: "Study plants, fungi and ecosystems. SA's Cape Floral Kingdom is a biodiversity hotspot with global research interest.",
    careers: ['Botanist', 'Plant Biotechnologist', 'Agricultural Researcher', 'Herbalist', 'Conservation Officer'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'Mathematics', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Hydrology & Water Resources',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Study the water cycle, river systems and groundwater. Critical career in water-scarce South Africa.',
    careers: ['Hydrologist', 'Water Resources Engineer', 'Environmental Scientist', 'Dam Safety Officer', 'Groundwater Specialist'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 60 },
      { subject: 'Physical Sciences', minimum_mark: 60 },
      { subject: 'Geography', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // AGRICULTURE & ENVIRONMENT — ADDITIONAL
  // ════════════════════════════════
  {
    name: 'BSc Horticulture',
    faculty: 'Agriculture', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study fruit, vegetable and ornamental plant production. SA is a major fruit exporter with high horticultural demand.',
    careers: ['Horticulturist', 'Fruit Farmer', 'Nursery Manager', 'Landscape Consultant', 'Export Quality Controller'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Viticulture & Oenology',
    faculty: 'Agriculture', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: "Study grape growing and winemaking. SA's Western Cape is world-famous for its wine industry.",
    careers: ['Winemaker', 'Viticulturist', 'Cellar Master', 'Wine Export Specialist', 'Estate Manager'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Physical Sciences', minimum_mark: 55 },
    ],
    universities: [
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
    ],
  },
  {
    name: 'BSc Aquaculture & Fisheries',
    faculty: 'Agriculture', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Manage fish farming, marine resources and freshwater systems. A fast-growing sector globally and in SA.',
    careers: ['Aquaculture Manager', 'Fisheries Scientist', 'Marine Biologist', 'Fish Farm Manager', 'Marine Resource Officer'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'Mathematics', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Nature Conservation',
    faculty: 'Agriculture', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Protect and manage South Africa\'s remarkable wildlife, biodiversity and natural resources.',
    careers: ['Nature Conservation Officer', 'Game Warden', 'Park Manager', 'Wildlife Researcher', 'Ecotourism Manager'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'Geography', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Nature Conservation',
    faculty: 'Agriculture', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Practical training in wildlife management, veld management and conservation fieldwork.',
    careers: ['Field Ranger', 'Game Guard', 'Conservation Technician', 'Veld Manager', 'Ecotourism Guide'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // BUILT ENVIRONMENT — ADDITIONAL
  // ════════════════════════════════
  {
    name: 'BSc Real Estate',
    faculty: 'Built Environment', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Study property valuation, investment and real estate markets. Leads to SACPVP registration as a property valuer.',
    careers: ['Property Valuer', 'Real Estate Agent', 'Property Investment Analyst', 'Asset Manager', 'Property Developer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Interior Architecture',
    faculty: 'Built Environment', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: 'Design internal spaces of buildings for function and aesthetics. Blend architecture, design and construction knowledge.',
    careers: ['Interior Architect', 'Interior Designer', 'Space Planner', 'Set Designer', 'Exhibition Designer'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Quantity Surveying',
    faculty: 'Built Environment', level: 'diploma', nqf_level: 6, min_aps: 22, duration: '3 years',
    description: 'Estimate and control construction project costs. High demand in the SA construction and infrastructure sector.',
    careers: ['Quantity Surveying Technician', 'Cost Controller', 'Estimator', 'Construction Cost Planner'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'Physical Sciences', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Landscape Architecture',
    faculty: 'Built Environment', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: 'Design outdoor spaces, parks, urban gardens and green infrastructure. Combines ecology with spatial design.',
    careers: ['Landscape Architect', 'Urban Designer', 'Environmental Planner', 'Parks Manager', 'Garden Designer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
    ],
  },

  // ════════════════════════════════
  // HEALTH SCIENCES — ADDITIONAL
  // ════════════════════════════════
  {
    name: 'BSc Oral Hygiene',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Provide preventive oral healthcare, teeth cleaning and patient education. Work in dental practices and hospitals.',
    careers: ['Oral Hygienist', 'Dental Therapist', 'Community Oral Health Worker', 'School Oral Health Promoter'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Sefako Makgatho Health Sciences University (SMU)', min_aps: 22, deadline: '31 July 2026' },
    ],
  },
  {
    name: 'BSc Podiatry',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 24, duration: '4 years',
    description: 'Diagnose and treat foot and lower limb conditions. High demand in diabetes care and sports medicine.',
    careers: ['Podiatrist', 'Foot & Ankle Specialist', 'Sports Podiatrist', 'Diabetic Foot Care Specialist'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Bachelor of Clinical Associate',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Mid-level healthcare provider working under medical doctor supervision. Addresses SA\'s rural doctor shortage.',
    careers: ['Clinical Associate', 'District Hospital Clinician', 'Primary Healthcare Provider', 'Rural Health Practitioner'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'Mathematics', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Bachelor of Public Health (BPH)',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study disease prevention and population health. Leads to roles in government, NGOs and international health organisations.',
    careers: ['Public Health Officer', 'Epidemiologist', 'Health Promotion Officer', 'Community Health Manager', 'Health Policy Analyst'],
    subjects: [
      { subject: 'Life Sciences', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 50 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'Diploma in Dental Assisting',
    faculty: 'Health Sciences', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '2 years',
    description: 'Assist dentists in chairside procedures, sterilisation and patient care. Entry point into oral health care.',
    careers: ['Dental Assistant', 'Dental Receptionist', 'Dental Technician Trainee', 'Oral Health Educator'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 45 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: "Diploma in Pharmacist's Assistant",
    faculty: 'Health Sciences', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '1 year',
    description: 'Assist registered pharmacists dispensing medication and providing patient counselling in pharmacies.',
    careers: ["Pharmacist's Assistant", 'Dispensary Technician', 'Retail Pharmacy Assistant', 'Hospital Dispensary Technician'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
      { subject: 'Life Sciences', minimum_mark: 45 },
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // HUMANITIES — ADDITIONAL
  // ════════════════════════════════
  {
    name: 'BA Anthropology',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study human societies, cultures and evolution. Relevant for development work, NGOs and government policy.',
    careers: ['Anthropologist', 'Development Consultant', 'Museum Curator', 'Cultural Heritage Officer', 'Researcher'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
      { subject: 'History', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Geography',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study physical and human geography — climate, land use, urbanisation and spatial analysis.',
    careers: ['Geographer', 'Urban Planner', 'Environmental Consultant', 'GIS Specialist', 'Disaster Management Officer'],
    subjects: [
      { subject: 'Geography', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Philosophy',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Develop critical thinking, logic and ethical reasoning. Excellent preparation for law, politics and academia.',
    careers: ['Philosopher', 'Ethics Consultant', 'Legal Researcher', 'Policy Analyst', 'Academic Researcher', 'Lecturer'],
    subjects: [
      { subject: 'English', minimum_mark: 65 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BA Film & Television Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study film theory, production and media analysis. SA has a growing screen industry supported by international productions.',
    careers: ['Film Director', 'Screenwriter', 'Film Producer', 'Film Editor', 'Broadcast Journalist', 'Content Creator'],
    subjects: [
      { subject: 'English', minimum_mark: 65 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '31 July 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Gender Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study gender, sexuality and identity in society. Leads to roles in NGOs, policy and social development.',
    careers: ['Gender Specialist', 'NGO Programme Officer', 'Policy Analyst', 'Social Researcher', 'Human Rights Advocate'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Youth Development',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Work with young people in community, educational and government settings. High demand in South Africa.',
    careers: ['Youth Worker', 'Community Developer', 'Youth Programme Coordinator', 'Social Development Officer', 'NGO Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA African Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Explore African history, politics, culture and development. Ideal for careers in diplomacy, development and media.',
    careers: ['African Affairs Analyst', 'Diplomat', 'Development Consultant', 'Journalist', 'Policy Researcher'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
      { subject: 'History', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '31 July 2026' },
      { name: 'Rhodes University', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BA Creative Writing',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Develop your craft in fiction, poetry, scriptwriting and non-fiction. SA has a vibrant literary tradition.',
    careers: ['Author', 'Screenwriter', 'Copywriter', 'Journalist', 'Editor', 'Content Strategist'],
    subjects: [
      { subject: 'English', minimum_mark: 70 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '31 July 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Applied Linguistics',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study language use in real-world contexts — translation, language teaching and communication. SA has 11 official languages.',
    careers: ['Translator', 'Interpreter', 'Language Teacher', 'Lexicographer', 'Speech Analyst', 'Language Policy Advisor'],
    subjects: [
      { subject: 'English', minimum_mark: 65 },
    ],
    universities: [
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Cultural Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Analyse how culture shapes identity, society and power. Careers in media, heritage, arts management and policy.',
    careers: ['Cultural Analyst', 'Arts Administrator', 'Heritage Curator', 'Media Researcher', 'Cultural Policy Officer'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Social Auxiliary Work',
    faculty: 'Humanities', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '2 years',
    description: 'Support social workers in delivering social services to vulnerable individuals and families.',
    careers: ['Social Auxiliary Worker', 'Community Care Worker', 'Child Welfare Assistant', 'Rehabilitation Support Worker'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Child & Youth Care',
    faculty: 'Humanities', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Work with children and youth in residential, community and educational care settings.',
    careers: ['Child & Youth Care Worker', 'Residential Social Worker', 'Foster Care Coordinator', 'Youth Development Officer'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'Diploma in Library & Information Science',
    faculty: 'Humanities', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Manage libraries, archives and information systems for schools, municipalities and universities.',
    careers: ['Librarian', 'Archivist', 'Records Manager', 'Information Officer', 'Knowledge Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // ARTS — ADDITIONAL
  // ════════════════════════════════
  {
    name: 'BA Industrial Design',
    faculty: 'Arts & Design', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Design products, furniture and consumer goods. Blend creative thinking with engineering principles.',
    careers: ['Industrial Designer', 'Product Designer', 'Furniture Designer', 'UX Designer', 'Packaging Designer'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '31 July 2026' },
    ],
  },
  {
    name: 'BA Photography',
    faculty: 'Arts & Design', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Master photographic techniques across editorial, commercial and fine art photography.',
    careers: ['Photographer', 'Photojournalist', 'Commercial Photographer', 'Photo Editor', 'Studio Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Music Technology',
    faculty: 'Arts & Design', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Combine music with digital technology for production, sound design and the music industry.',
    careers: ['Music Producer', 'Sound Engineer', 'Audio Post-Production Specialist', 'Broadcast Sound Technician', 'Composer'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Music', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Visual Arts',
    faculty: 'Arts & Design', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study painting, sculpture, printmaking and mixed media. SA has a vibrant contemporary art scene.',
    careers: ['Visual Artist', 'Gallery Curator', 'Art Teacher', 'Art Director', 'Illustrator', 'Set Designer'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Visual Arts', minimum_mark: 65 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 24, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 24, deadline: '31 July 2026' },
      { name: 'Rhodes University', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Film Production',
    faculty: 'Arts & Design', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Learn all aspects of film-making from scriptwriting to cinematography and post-production.',
    careers: ['Film Director', 'Film Producer', 'Cinematographer', 'Film Editor', 'Documentary Maker', 'Content Creator'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Photography',
    faculty: 'Arts & Design', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Practical photography training covering portrait, commercial, wedding and photojournalism.',
    careers: ['Photographer', 'Photo Editor', 'Digital Imaging Specialist', 'Social Media Content Creator'],
    subjects: [
      { subject: 'English', minimum_mark: 45 },
    ],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // SPORT — ADDITIONAL
  // ════════════════════════════════
  {
    name: 'BCom Sport Management',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Manage sport organisations, events and athlete brands. SA has a large formal sport industry.',
    careers: ['Sport Manager', 'Athlete Manager', 'Sport Event Coordinator', 'Club Administrator', 'Sport Marketing Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 50 },
    ],
    universities: [
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Sport & Recreation Management',
    faculty: 'Sport', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Manage sport facilities, recreation programmes and community sport clubs. Practical career across SA.',
    careers: ['Recreation Officer', 'Sport Facility Manager', 'Community Sport Coordinator', 'Gym Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // THEOLOGY — ADDITIONAL
  // ════════════════════════════════
  {
    name: 'BA Theology & Religious Studies',
    faculty: 'Theology', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study world religions, ethics and religious texts. Leads to ministry, chaplaincy, NGO and research careers.',
    careers: ['Pastor', 'Chaplain', 'Religious Studies Teacher', 'NGO Worker', 'Community Leader', 'Ethics Consultant'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'Stellenbosch University', min_aps: 24, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BDiv (Bachelor of Divinity)',
    faculty: 'Theology', level: 'degree', nqf_level: 8, min_aps: 22, duration: '4 years',
    description: 'Professional theological training for ministry and church leadership. Requires prior bachelor\'s degree at some universities.',
    careers: ['Ordained Minister', 'Church Pastor', 'Hospital Chaplain', 'Prison Chaplain', 'Military Chaplain', 'Missionary'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'Stellenbosch University', min_aps: 24, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // PUBLIC HEALTH & SOCIAL DEVELOPMENT
  // ════════════════════════════════
  {
    name: 'BA Public Relations',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Manage reputation and communication between organisations and their publics. Growing field in SA corporate and government.',
    careers: ['Public Relations Officer', 'Communications Manager', 'Media Liaison', 'Brand Manager', 'Corporate Communications Director'],
    subjects: [
      { subject: 'English', minimum_mark: 65 },
    ],
    universities: [
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Epidemiology & Biostatistics',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Track disease patterns and analyse health data. Vital for government health departments and research organisations.',
    careers: ['Epidemiologist', 'Biostatistician', 'Health Data Analyst', 'Public Health Researcher', 'WHO/CDC Researcher'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'Life Sciences', minimum_mark: 60 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Bachelor of Public Administration (BPA)',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Study how government works — policy, public finance, service delivery and municipal management.',
    careers: ['Municipal Manager', 'Government Official', 'Policy Analyst', 'Public Finance Officer', 'District Manager'],
    subjects: [
      { subject: 'English', minimum_mark: 55 },
      { subject: 'Mathematics', minimum_mark: 45 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Higher Certificate in Engineering Sciences',
    faculty: 'Engineering', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Foundation for students who want to enter engineering diplomas. Covers maths, physics and engineering basics.',
    careers: ['Engineering Learnership Candidate', 'Technical Trainee', 'Artisan Learner'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 40 },
      { subject: 'Physical Sciences', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Higher Certificate in Information and Communication Technology',
    faculty: 'Information Technology', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Foundation for IT studies. Covers networking basics, computer literacy and ICT fundamentals.',
    careers: ['IT Support Trainee', 'Helpdesk Agent', 'Computer Technician Learner', 'ICT Learnership Candidate'],
    subjects: [
      { subject: 'English', minimum_mark: 40 },
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 15, deadline: '30 November 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Early Childhood Development',
    faculty: 'Education', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Teach and care for children aged 0-6 years. High demand across crèches, preschools and ECD centres in SA.',
    careers: ['ECD Practitioner', 'Preschool Teacher', 'Crèche Manager', 'Child Development Specialist'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Computational Science',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Use computers and numerical methods to solve complex scientific problems in physics, chemistry and biology.',
    careers: ['Computational Scientist', 'Simulation Engineer', 'Quantitative Analyst', 'Scientific Software Developer', 'Research Analyst'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'Physical Sciences', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 32, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Safety Management',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Manage health, safety and environmental compliance in the workplace. Required in all industries by SA law.',
    careers: ['Health & Safety Officer', 'Safety Manager', 'Risk Assessor', 'Occupational Hygienist', 'Mine Safety Officer'],
    subjects: [
      { subject: 'English', minimum_mark: 50 },
      { subject: 'Mathematics', minimum_mark: 40 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BSc Operations Research',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Apply mathematical and analytical methods to improve decision-making in businesses, logistics and government.',
    careers: ['Operations Research Analyst', 'Logistics Analyst', 'Supply Chain Optimiser', 'Data Analyst', 'Management Consultant'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 70 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Higher Certificate in Natural & Applied Sciences',
    faculty: 'Science', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Foundation qualification for students who want to pursue Science degrees but need to strengthen their maths and science skills.',
    careers: ['Science Learnership Candidate', 'Laboratory Assistant Trainee', 'Science Teacher Assistant'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 40 },
      { subject: 'Life Sciences', minimum_mark: 40 },
    ],
    universities: [
      { name: 'University of the Western Cape (UWC)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Legal Practice',
    faculty: 'Law', level: 'diploma', nqf_level: 6, min_aps: 20, duration: '2 years',
    description: 'Practical legal training for paralegals and legal support staff. A route into the legal profession without an LLB.',
    careers: ['Paralegal', 'Legal Secretary', 'Conveyancing Secretary', 'Legal Researcher', 'Debt Collector'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BA Social Sciences',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Broad interdisciplinary degree covering sociology, psychology, political science and economics. Flexible and versatile.',
    careers: ['Social Researcher', 'Policy Analyst', 'NGO Programme Manager', 'Community Worker', 'Human Resources Officer'],
    subjects: [
      { subject: 'English', minimum_mark: 60 },
    ],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Environmental Management',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Manage natural resources, environmental impacts and sustainability. Mandatory environmental compliance in SA drives demand.',
    careers: ['Environmental Manager', 'Environmental Impact Assessment Specialist', 'Sustainability Consultant', 'Waste Manager'],
    subjects: [
      { subject: 'Geography', minimum_mark: 55 },
      { subject: 'Life Sciences', minimum_mark: 55 },
      { subject: 'English', minimum_mark: 50 },
    ],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Game Development',
    faculty: 'Information Technology', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Design, program and produce video games. SA\'s game development industry is growing rapidly.',
    careers: ['Game Developer', 'Game Designer', 'Game Programmer', '3D Artist', 'Level Designer', 'UX Designer'],
    subjects: [
      { subject: 'Mathematics', minimum_mark: 65 },
      { subject: 'English', minimum_mark: 55 },
    ],
    universities: [
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // EDUCATION — SUBJECT SPECIALISATIONS
  // ════════════════════════════════
  {
    name: 'BEd Mathematics Education',
    faculty: 'Education', level: 'degree', nqf_level: 7, min_aps: 24, duration: '4 years',
    description: 'Train to teach Mathematics in secondary schools. Critical shortage subject in SA — bursaries widely available.',
    careers: ['High School Maths Teacher', 'Curriculum Developer', 'Educational Tutor', 'Assessment Specialist'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 65 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEd Physical Sciences Education',
    faculty: 'Education', level: 'degree', nqf_level: 7, min_aps: 24, duration: '4 years',
    description: 'Train to teach Physical Sciences (Physics & Chemistry) in secondary schools. Bursaries available from DHET.',
    careers: ['Physical Sciences Teacher', 'Science Curriculum Developer', 'Laboratory Technician Trainer'],
    subjects: [{ subject: 'Physical Sciences', minimum_mark: 65 }, { subject: 'Mathematics', minimum_mark: 60 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEd Life Sciences Education',
    faculty: 'Education', level: 'degree', nqf_level: 7, min_aps: 24, duration: '4 years',
    description: 'Train to teach Life Sciences (Biology) in senior and FET phase. High demand in rural and township schools.',
    careers: ['Life Sciences Teacher', 'Biology Curriculum Developer', 'Science Education Specialist'],
    subjects: [{ subject: 'Life Sciences', minimum_mark: 60 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEd English Language Teaching',
    faculty: 'Education', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Specialise in teaching English as first or additional language. One of the most in-demand teaching specialisations in SA.',
    careers: ['English Teacher', 'Language Specialist', 'ESL Teacher', 'Literacy Coordinator'],
    subjects: [{ subject: 'English', minimum_mark: 70 }],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 24, deadline: '30 June 2026' },
      { name: 'Rhodes University', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BEd History & Social Sciences Education',
    faculty: 'Education', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Train to teach History and Social Sciences at secondary level. Strong foundation in Humanities required.',
    careers: ['History Teacher', 'Social Sciences Teacher', 'Curriculum Advisor', 'Museum Educator'],
    subjects: [{ subject: 'History', minimum_mark: 60 }, { subject: 'English', minimum_mark: 60 }],
    universities: [
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEd Technology Education',
    faculty: 'Education', level: 'degree', nqf_level: 7, min_aps: 22, duration: '4 years',
    description: 'Train to teach Technology, Design and Engineering Graphics in schools. Supports STEM education in SA.',
    careers: ['Technology Teacher', 'Technical Drawing Teacher', 'CAD Trainer', 'STEM Education Specialist'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 55 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
    ],
  },

  // ════════════════════════════════
  // LANGUAGE & AFRICAN STUDIES DEGREES
  // ════════════════════════════════
  {
    name: 'BA Afrikaans & Nederlands',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study Afrikaans language and literature, with links to Dutch. Opens doors in media, education and publishing.',
    careers: ['Afrikaans Teacher', 'Translator', 'Editor', 'Journalist', 'Publisher', 'Lexicographer'],
    subjects: [{ subject: 'Afrikaans', minimum_mark: 65 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'Stellenbosch University', min_aps: 24, deadline: '31 July 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BA isiZulu Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study isiZulu language, literature and culture. SA has 12 million isiZulu speakers — careers in media, government and education.',
    careers: ['isiZulu Teacher', 'Translator', 'Broadcaster', 'Community Liaison Officer', 'Cultural Officer'],
    subjects: [{ subject: 'isiZulu', minimum_mark: 60 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA isiXhosa Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study isiXhosa language and literature. Valuable for government, NGOs and media in the Eastern Cape and Western Cape.',
    careers: ['isiXhosa Teacher', 'Interpreter', 'Broadcaster', 'Government Language Practitioner', 'Community Liaison'],
    subjects: [{ subject: 'isiXhosa', minimum_mark: 60 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'BA Sesotho Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study Sesotho (Southern Sotho) language and literature. Official language of Lesotho and widely spoken in the Free State.',
    careers: ['Sesotho Teacher', 'Interpreter', 'Community Development Officer', 'Government Language Practitioner'],
    subjects: [{ subject: 'Sesotho', minimum_mark: 60 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of the Free State (UFS)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Setswana Studies',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Study Setswana language and literature. Widely spoken in North West Province and Botswana.',
    careers: ['Setswana Teacher', 'Translator', 'Broadcaster', 'Language Practitioner', 'Cultural Heritage Officer'],
    subjects: [{ subject: 'Setswana', minimum_mark: 60 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'North-West University (NWU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // COMMERCE — MORE DEGREES & DIPLOMAS
  // ════════════════════════════════
  {
    name: 'BCom Actuarial Science',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 32, duration: '3 years',
    description: 'Apply statistics and financial mathematics to insurance and risk. One of the highest-earning professions in SA.',
    careers: ['Actuary', 'Risk Analyst', 'Insurance Specialist', 'Pension Fund Manager', 'Financial Modeller'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 80 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 36, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 34, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 32, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 34, deadline: '31 July 2026' },
    ],
  },
  {
    name: 'BCom Financial Planning',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study personal financial planning, investment advice and retirement planning. Leads to CFP certification.',
    careers: ['Financial Planner', 'Wealth Manager', 'Investment Advisor', 'Retirement Planner', 'Estate Planner'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 55 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of the Free State (UFS)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 24, deadline: '30 November 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BCom Logistics Management',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Plan and manage the movement of goods from supplier to customer. Critical role in SA manufacturing and trade.',
    careers: ['Logistics Manager', 'Supply Chain Analyst', 'Distribution Manager', 'Import/Export Manager', 'Fleet Manager'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 55 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'Diploma in Graphic Design',
    faculty: 'Arts & Design', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Create visual content for brands, advertising and digital media. SA design industry is growing rapidly.',
    careers: ['Graphic Designer', 'Brand Designer', 'Advertising Designer', 'Web Designer', 'Social Media Designer'],
    subjects: [{ subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Interior Design',
    faculty: 'Arts & Design', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Design functional and beautiful interior spaces for homes, offices and commercial properties.',
    careers: ['Interior Designer', 'Décor Consultant', 'Space Planner', 'Furniture Buyer', 'Exhibition Designer'],
    subjects: [{ subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Sound Engineering',
    faculty: 'Arts & Design', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Record, mix and master audio for music, film, radio and television. SA has a thriving music and broadcast industry.',
    careers: ['Sound Engineer', 'Audio Engineer', 'Music Producer', 'Broadcast Technician', 'Post-Production Sound Editor'],
    subjects: [{ subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Journalism',
    faculty: 'Humanities', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Train in print, broadcast and digital journalism. SA media sector offers good employment opportunities.',
    careers: ['Journalist', 'News Reporter', 'Copy Editor', 'Online Content Producer', 'Radio Presenter'],
    subjects: [{ subject: 'English', minimum_mark: 60 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // HEALTH — EXTENDED & SPECIALIST
  // ════════════════════════════════
  {
    name: 'BSc Medical Laboratory Science',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: 'Perform diagnostic tests that help doctors detect and diagnose diseases. Works in hospitals and private labs.',
    careers: ['Medical Laboratory Scientist', 'Clinical Pathologist Assistant', 'Blood Bank Technologist', 'Lab Manager'],
    subjects: [{ subject: 'Life Sciences', minimum_mark: 60 }, { subject: 'Physical Sciences', minimum_mark: 55 }, { subject: 'Mathematics', minimum_mark: 55 }],
    universities: [
      { name: 'University of the Free State (UFS)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Human Movement Science',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study the science of physical movement, exercise physiology and motor control. Gateway to teaching, coaching and health professions.',
    careers: ['Biokineticist', 'Sports Coach', 'Exercise Physiologist', 'PE Teacher', 'Ergonomist'],
    subjects: [{ subject: 'Life Sciences', minimum_mark: 55 }, { subject: 'Mathematics', minimum_mark: 50 }, { subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Audiology',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 26, duration: '4 years',
    description: 'Diagnose and treat hearing loss and balance disorders. Growing field as SA population ages.',
    careers: ['Audiologist', 'Hearing Aid Specialist', 'Balance Disorder Clinician', 'School Audiologist'],
    subjects: [{ subject: 'Life Sciences', minimum_mark: 60 }, { subject: 'Mathematics', minimum_mark: 55 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Consumer Science',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Study food, nutrition, textiles and household management from a consumer perspective. Broad career applications.',
    careers: ['Consumer Scientist', 'Food Product Developer', 'Textile Quality Inspector', 'Home Economics Specialist'],
    subjects: [{ subject: 'Life Sciences', minimum_mark: 55 }, { subject: 'Mathematics', minimum_mark: 50 }],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Bachelor of Nursing (Extended)',
    faculty: 'Health Sciences', level: 'degree', nqf_level: 7, min_aps: 18, duration: '5 years',
    description: 'Extended nursing programme for students who need additional academic support. Same outcome as standard BNSc.',
    careers: ['Registered Nurse', 'Midwife', 'Community Health Nurse', 'ICU Nurse'],
    subjects: [{ subject: 'English', minimum_mark: 50 }, { subject: 'Life Sciences', minimum_mark: 50 }],
    universities: [
      { name: 'University of Fort Hare (UFH)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // SCIENCE — EXTENDED & SPECIALIST
  // ════════════════════════════════
  {
    name: 'BSc Earth Sciences',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 26, duration: '3 years',
    description: 'Study rocks, minerals, earthquakes and the structure of the Earth. Essential for mining, oil exploration and environmental work.',
    careers: ['Geoscientist', 'Petroleum Geologist', 'Seismologist', 'Mining Geologist', 'Environmental Geologist'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 60 }, { subject: 'Physical Sciences', minimum_mark: 65 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Geophysics',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Study the physical properties of the Earth using physics. Key role in oil and gas exploration and seismic hazard assessment.',
    careers: ['Geophysicist', 'Seismic Data Interpreter', 'Exploration Geophysicist', 'Mining Geophysicist'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 70 }, { subject: 'Physical Sciences', minimum_mark: 70 }],
    universities: [
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
    ],
  },
  {
    name: 'BSc Neuroscience',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Study the brain, nervous system and behaviour. Interdisciplinary field at the forefront of medical research.',
    careers: ['Neuroscientist', 'Neurologist', 'Neuropsychologist', 'Brain Research Scientist', 'Clinical Neurophysiologist'],
    subjects: [{ subject: 'Life Sciences', minimum_mark: 65 }, { subject: 'Mathematics', minimum_mark: 60 }, { subject: 'Physical Sciences', minimum_mark: 60 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 32, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 30, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Medical Physics',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 28, duration: '3 years',
    description: 'Apply physics in medical imaging, radiation therapy and nuclear medicine. Highly specialised and sought-after field.',
    careers: ['Medical Physicist', 'Radiation Oncology Physicist', 'Nuclear Medicine Physicist', 'MRI Physicist'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 70 }, { subject: 'Physical Sciences', minimum_mark: 70 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 32, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // ENGINEERING — MORE PROGRAMMES
  // ════════════════════════════════
  {
    name: 'BEng Structural Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 30, duration: '4 years',
    description: 'Design buildings, bridges and infrastructure that are safe and efficient. High demand in SA infrastructure development.',
    careers: ['Structural Engineer', 'Bridge Engineer', 'Construction Engineer', 'Infrastructure Consultant'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 70 }, { subject: 'Physical Sciences', minimum_mark: 70 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 34, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 32, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 30, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BEng Electronic Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 30, duration: '4 years',
    description: 'Design and develop electronic systems, circuits and devices for telecom, defence and consumer electronics.',
    careers: ['Electronic Engineer', 'Circuit Design Engineer', 'Telecom Engineer', 'Systems Engineer', 'Embedded Systems Developer'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 70 }, { subject: 'Physical Sciences', minimum_mark: 70 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 34, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 32, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 30, deadline: '30 June 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 28, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Higher Certificate in Building & Construction',
    faculty: 'Built Environment', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Entry-level qualification for the construction industry. Leads into Diploma in Construction.',
    careers: ['Construction Site Assistant', 'Building Materials Sales', 'Construction Learnership Candidate'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 40 }, { subject: 'English', minimum_mark: 40 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // EXTENDED DEGREES (FOUNDATION)
  // ════════════════════════════════
  {
    name: 'BSc (Extended) Engineering',
    faculty: 'Engineering', level: 'degree', nqf_level: 8, min_aps: 22, duration: '5 years',
    description: 'Five-year extended engineering programme with a foundation year for students who narrowly missed standard entry requirements.',
    careers: ['Civil Engineer', 'Mechanical Engineer', 'Electrical Engineer', 'Chemical Engineer'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 50 }, { subject: 'Physical Sciences', minimum_mark: 50 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 24, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Stellenbosch University', min_aps: 22, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 22, deadline: '30 June 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BCom (Extended)',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 18, duration: '4 years',
    description: 'Extended four-year BCom with a first-year foundation. For students who need additional maths and English support before mainstream study.',
    careers: ['Accountant', 'Financial Manager', 'Business Analyst', 'Entrepreneur'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 40 }, { subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'University of the Western Cape (UWC)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA (Extended) Humanities',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 18, duration: '4 years',
    description: 'Extended humanities degree with foundation year for students who need extra language and academic literacy support.',
    careers: ['Social Researcher', 'Community Worker', 'Teacher', 'NGO Officer', 'Government Officer'],
    subjects: [{ subject: 'English', minimum_mark: 40 }],
    universities: [
      { name: 'University of the Western Cape (UWC)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc (Extended) Science',
    faculty: 'Science', level: 'degree', nqf_level: 7, min_aps: 20, duration: '4 years',
    description: 'Extended science degree with foundation year covering maths, physics, chemistry and biology before mainstream science study.',
    careers: ['Scientist', 'Researcher', 'Chemist', 'Biologist', 'Data Analyst'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 40 }, { subject: 'Physical Sciences', minimum_mark: 40 }],
    universities: [
      { name: 'University of the Western Cape (UWC)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Limpopo (UL)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Venda (UNIVEN)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of Mpumalanga (UMP)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Walter Sisulu University (WSU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // AGRICULTURE & FOOD — MORE
  // ════════════════════════════════
  {
    name: 'BSc Food Technology',
    faculty: 'Agriculture', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Develop, test and improve food products and preservation methods. SA food industry employs thousands of graduates.',
    careers: ['Food Technologist', 'Product Developer', 'Quality Control Manager', 'Food Safety Auditor', 'Process Engineer'],
    subjects: [{ subject: 'Physical Sciences', minimum_mark: 60 }, { subject: 'Life Sciences', minimum_mark: 60 }, { subject: 'Mathematics', minimum_mark: 55 }],
    universities: [
      { name: 'Stellenbosch University', min_aps: 28, deadline: '31 July 2026' },
      { name: 'University of Pretoria (UP)', min_aps: 26, deadline: '30 June 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Food Preparation & Culinary Arts',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Professional culinary training covering cooking techniques, kitchen management and food service. SA tourism and hospitality drives demand.',
    careers: ['Chef', 'Sous Chef', 'Pastry Chef', 'Restaurant Manager', 'Catering Manager', 'Food Stylist'],
    subjects: [{ subject: 'English', minimum_mark: 45 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // INFORMATION TECHNOLOGY — MORE
  // ════════════════════════════════
  {
    name: 'BSc Multimedia Computing',
    faculty: 'Information Technology', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Combine computing with audio, video and interactive media. Ideal for digital content creation and interactive design.',
    careers: ['Multimedia Developer', 'Web Application Developer', 'UX Developer', 'Digital Content Producer', 'App Developer'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 55 }, { subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'University of Johannesburg (UJ)', min_aps: 26, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Web Development',
    faculty: 'Information Technology', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Build websites and web applications using modern frameworks. One of the most in-demand skills in SA job market.',
    careers: ['Web Developer', 'Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'WordPress Developer'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 45 }, { subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Mobile App Development',
    faculty: 'Information Technology', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Build Android and iOS mobile applications. Mobile development is the fastest-growing IT specialisation in Africa.',
    careers: ['Mobile App Developer', 'Android Developer', 'iOS Developer', 'React Native Developer', 'Flutter Developer'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 50 }, { subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BSc Information Systems',
    faculty: 'Information Technology', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Bridge business needs with IT solutions. Study systems analysis, database management and enterprise software.',
    careers: ['Systems Analyst', 'Business Analyst', 'Database Administrator', 'IT Manager', 'ERP Specialist'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 55 }, { subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 30, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 28, deadline: '30 September 2026' },
      { name: 'Rhodes University', min_aps: 26, deadline: '30 September 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // LAW — MORE PROGRAMMES
  // ════════════════════════════════
  {
    name: 'BProc (Bachelor of Procuration)',
    faculty: 'Law', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Original law degree still offered at some universities. Qualifies students to serve articles and become attorneys.',
    careers: ['Attorney', 'Legal Advisor', 'Conveyancer', 'Notary', 'Corporate Lawyer'],
    subjects: [{ subject: 'English', minimum_mark: 65 }],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'University of Fort Hare (UFH)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Zululand (UNIZULU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'BA Law',
    faculty: 'Law', level: 'degree', nqf_level: 7, min_aps: 24, duration: '3 years',
    description: 'Preliminary law degree combining humanities with legal foundations. Must be followed by LLB to practise law.',
    careers: ['Legal Researcher', 'Paralegal', 'Government Official', 'Compliance Officer', 'Law LLB candidate'],
    subjects: [{ subject: 'English', minimum_mark: 65 }, { subject: 'Mathematics', minimum_mark: 50 }],
    universities: [
      { name: 'University of Pretoria (UP)', min_aps: 28, deadline: '30 June 2026' },
      { name: 'Stellenbosch University', min_aps: 26, deadline: '31 July 2026' },
      { name: 'University of KwaZulu-Natal (UKZN)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'University of the Free State (UFS)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // SOCIAL WORK & DEVELOPMENT
  // ════════════════════════════════
  {
    name: 'BA Human Services',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Work with vulnerable communities in social welfare, health promotion and community development contexts.',
    careers: ['Human Services Coordinator', 'Social Development Officer', 'NGO Programme Manager', 'Community Health Worker'],
    subjects: [{ subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Johannesburg (UJ)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of the Western Cape (UWC)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 20, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'Diploma in Community Development',
    faculty: 'Humanities', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Plan and implement development programmes in communities. Work with NGOs, government departments and municipalities.',
    careers: ['Community Development Officer', 'Ward Councillor Support', 'NPO Programme Coordinator', 'Local Economic Development Officer'],
    subjects: [{ subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 18, deadline: '30 November 2026' },
      { name: 'Sol Plaatje University (SPU)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // TOURISM & HOSPITALITY — MORE
  // ════════════════════════════════
  {
    name: 'BCom Hospitality Management',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Manage hotels, lodges, restaurants and resorts. SA tourism employs over 1.5 million people.',
    careers: ['Hotel Manager', 'Lodge Manager', 'Restaurant Manager', 'F&B Director', 'Hospitality Consultant'],
    subjects: [{ subject: 'English', minimum_mark: 55 }, { subject: 'Mathematics', minimum_mark: 45 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'North-West University (NWU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Travel & Tourism Management',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Manage travel agencies, tour operations and airline ticketing. SA is Africa\'s top tourist destination.',
    careers: ['Tour Operator', 'Travel Consultant', 'Airline Sales Agent', 'Tour Guide', 'Safari Manager'],
    subjects: [{ subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // BUILT ENVIRONMENT — MORE
  // ════════════════════════════════
  {
    name: 'Diploma in Civil Engineering Technology',
    faculty: 'Engineering', level: 'diploma', nqf_level: 6, min_aps: 22, duration: '3 years',
    description: 'Practical civil engineering — roads, stormwater, structures and site management. Leads to civil engineering technician.',
    careers: ['Civil Engineering Technician', 'Road Inspector', 'Construction Supervisor', 'Stormwater Technician'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 55 }, { subject: 'Physical Sciences', minimum_mark: 50 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Architecture Technology',
    faculty: 'Built Environment', level: 'diploma', nqf_level: 6, min_aps: 22, duration: '3 years',
    description: 'Assist architects in designing and documenting buildings using CAD and BIM software.',
    careers: ['Architectural Technician', 'Draughtsperson', 'BIM Coordinator', 'Building Inspector'],
    subjects: [{ subject: 'Mathematics', minimum_mark: 55 }, { subject: 'English', minimum_mark: 50 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // SECURITY & EMERGENCY — MORE
  // ════════════════════════════════
  {
    name: 'BCom Security Management',
    faculty: 'Commerce', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Manage physical and corporate security operations, risk and intelligence. SA has a large private security industry.',
    careers: ['Security Manager', 'Corporate Risk Manager', 'Intelligence Analyst', 'Security Consultant', 'Loss Prevention Manager'],
    subjects: [{ subject: 'English', minimum_mark: 55 }, { subject: 'Mathematics', minimum_mark: 45 }],
    universities: [
      { name: 'University of South Africa (UNISA)', min_aps: 22, deadline: '30 November 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Fire Technology',
    faculty: 'Engineering', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Train as a firefighter and fire protection specialist. All SA municipalities require qualified fire service personnel.',
    careers: ['Firefighter', 'Fire Safety Officer', 'Fire Protection Technician', 'Emergency Services Manager'],
    subjects: [{ subject: 'English', minimum_mark: 50 }, { subject: 'Mathematics', minimum_mark: 40 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // HIGHER CERTIFICATES — ADDITIONAL
  // ════════════════════════════════
  {
    name: 'Higher Certificate in Hospitality Operations',
    faculty: 'Commerce', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Entry-level qualification for hospitality sector. Leads into Diploma in Hospitality Management.',
    careers: ['Hotel Receptionist', 'Food & Beverage Attendant', 'Housekeeping Supervisor Trainee'],
    subjects: [{ subject: 'English', minimum_mark: 40 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Higher Certificate in Marketing',
    faculty: 'Commerce', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Foundation marketing qualification. Leads into Diploma in Marketing or BCom Marketing Management.',
    careers: ['Marketing Assistant', 'Sales Trainee', 'Social Media Assistant', 'Brand Ambassador'],
    subjects: [{ subject: 'English', minimum_mark: 45 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Central University of Technology (CUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Mangosuthu University of Technology (MUT)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Higher Certificate in Human Resources Management',
    faculty: 'Commerce', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Foundation in HR practices. Leads into Diploma in Human Resource Management or BCom HRM.',
    careers: ['HR Administrator', 'Payroll Clerk', 'Recruitment Assistant', 'Training Coordinator Trainee'],
    subjects: [{ subject: 'English', minimum_mark: 45 }],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 15, deadline: '30 November 2026' },
    ],
  },
  {
    name: 'Higher Certificate in Policing',
    faculty: 'Commerce', level: 'certificate', nqf_level: 5, min_aps: 15, duration: '1 year',
    description: 'Foundation qualification for SAPS recruits and aspiring police officers. Covers criminal law, community policing and investigation basics.',
    careers: ['Police Officer (SAPS)', 'Traffic Officer', 'Security Officer', 'Community Safety Officer'],
    subjects: [{ subject: 'English', minimum_mark: 45 }],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'University of South Africa (UNISA)', min_aps: 15, deadline: '30 November 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 15, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 15, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // PERFORMING ARTS — MORE
  // ════════════════════════════════
  {
    name: 'BA Dance',
    faculty: 'Arts & Design', level: 'degree', nqf_level: 7, min_aps: 20, duration: '3 years',
    description: 'Train as a professional dancer and choreographer. Study ballet, contemporary, African and ballroom dance forms.',
    careers: ['Dancer', 'Choreographer', 'Dance Teacher', 'Movement Coach', 'Arts Administrator'],
    subjects: [{ subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'University of Cape Town (UCT)', min_aps: 24, deadline: '31 July 2026' },
      { name: 'Stellenbosch University', min_aps: 22, deadline: '31 July 2026' },
      { name: 'University of the Witwatersrand (Wits)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Theatre Production',
    faculty: 'Arts & Design', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Work behind the scenes of theatre, television and live events as a director, stage manager or technical specialist.',
    careers: ['Stage Manager', 'Theatre Director', 'Lighting Technician', 'Set Designer', 'Props Manager'],
    subjects: [{ subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'Tshwane University of Technology (TUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },

  // ════════════════════════════════
  // MEDIA & COMMUNICATIONS
  // ════════════════════════════════
  {
    name: 'BSc Broadcasting & Digital Media',
    faculty: 'Humanities', level: 'degree', nqf_level: 7, min_aps: 22, duration: '3 years',
    description: 'Produce content for radio, television and digital platforms. SA has a large broadcasting industry led by SABC, eTV and M-Net.',
    careers: ['Broadcaster', 'Radio Presenter', 'TV Producer', 'Podcast Creator', 'Digital Content Manager'],
    subjects: [{ subject: 'English', minimum_mark: 60 }],
    universities: [
      { name: 'University of Johannesburg (UJ)', min_aps: 24, deadline: '30 September 2026' },
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Nelson Mandela University (NMU)', min_aps: 22, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 20, deadline: '30 September 2026' },
    ],
  },
  {
    name: 'Diploma in Advertising',
    faculty: 'Commerce', level: 'diploma', nqf_level: 6, min_aps: 18, duration: '3 years',
    description: 'Plan and create advertising campaigns across digital, TV, radio and outdoor media.',
    careers: ['Advertising Executive', 'Media Planner', 'Creative Copywriter', 'Social Media Advertiser', 'Campaign Manager'],
    subjects: [{ subject: 'English', minimum_mark: 55 }],
    universities: [
      { name: 'Cape Peninsula University of Technology (CPUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Tshwane University of Technology (TUT)', min_aps: 20, deadline: '30 September 2026' },
      { name: 'Durban University of Technology (DUT)', min_aps: 18, deadline: '30 September 2026' },
      { name: 'Vaal University of Technology (VUT)', min_aps: 18, deadline: '30 September 2026' },
    ],
  },
]

async function seedCourses() {
  console.log('🌱 Starting UniPath course seed...')
  console.log('📊 Total courses to seed: ' + COURSES.length)
  let successCount = 0
  let errorCount = 0

  for (const course of COURSES) {
    try {
      // Insert course
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

      // Insert subject requirements
      if (course.subjects && course.subjects.length > 0) {
        const { error: subjectError } = await supabase
          .from('course_subject_requirements')
          .insert(course.subjects.map(s => ({
            course_id: courseData.id,
            subject: s.subject,
            minimum_mark: s.minimum_mark,
          })))
        if (subjectError) console.error('  ⚠️ Subject error: ' + subjectError.message)
      }

      // Insert universities
      if (course.universities && course.universities.length > 0) {
        const { error: uniError } = await supabase
          .from('course_universities')
          .insert(course.universities.map(u => ({
            course_id: courseData.id,
            university_name: u.name,
            min_aps: u.min_aps,
            application_deadline: u.deadline,
          })))
        if (uniError) console.error('  ⚠️ University error: ' + uniError.message)
      }

      console.log('✅ ' + course.name + ' (' + course.universities.length + ' universities)')
      successCount++
    } catch (err) {
      console.error('❌ Unexpected error for ' + course.name + ': ' + err.message)
      errorCount++
    }
  }

  console.log('\n════════════════════════════════')
  console.log('🎉 Seed complete!')
  console.log('✅ Success: ' + successCount + ' courses')
  console.log('❌ Errors: ' + errorCount + ' courses')
  console.log('════════════════════════════════')
  console.log('\n✨ Check your admin dashboard at http://localhost:3000/admin/courses')
}

seedCourses()