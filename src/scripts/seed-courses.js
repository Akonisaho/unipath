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