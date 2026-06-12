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
      { name: 'Stellenbosch University (SU)', min_aps: 30, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 28, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 28, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 30, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 32, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 30, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 28, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 26, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 34, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 34, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 34, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 34, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 32, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 32, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 32, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 26, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 28, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 26, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 26, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 28, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 26, deadline: '31 July 2026' },
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
      { name: 'Stellenbosch University (SU)', min_aps: 26, deadline: '31 July 2026' },
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