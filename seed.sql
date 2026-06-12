-- UniPath Course Seed SQL
-- Paste this entire block into Supabase SQL Editor and click Run
-- Safe to re-run: skips courses that already exist

DO $$
DECLARE
  cid UUID;
BEGIN

  -- MBChB (Bachelor of Medicine and Surgery)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'MBChB (Bachelor of Medicine and Surgery)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('MBChB (Bachelor of Medicine and Surgery)', 'Health Sciences', 'degree', 8, 34, '6 years', 'Study to become a medical doctor. One of the most demanding but rewarding degrees in SA.', ARRAY['Medical Doctor', 'Surgeon', 'Specialist Physician', 'General Practitioner'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 70),
      (cid, 'Physical Sciences', 70),
      (cid, 'English', 60),
      (cid, 'Life Sciences', 60);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 36, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 36, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 34, '30 June 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 34, '30 September 2026'),
      (cid, 'Sefako Makgatho Health Sciences University (SMU)', 32, '31 July 2026'),
      (cid, 'Walter Sisulu University (WSU)', 30, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 34, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 30, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): MBChB (Bachelor of Medicine and Surgery)';
  END IF;

  -- Bachelor of Nursing Science
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Bachelor of Nursing Science') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Bachelor of Nursing Science', 'Health Sciences', 'degree', 7, 22, '4 years', 'Train to become a professional nurse. High demand across all SA provinces.', ARRAY['Registered Nurse', 'Midwife', 'ICU Nurse', 'Nursing Manager', 'Community Health Nurse'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'Life Sciences', 50),
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 26, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 26, '30 September 2026'),
      (cid, 'North-West University (NWU)', 26, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 26, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 24, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 24, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 24, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 22, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 22, '30 September 2026'),
      (cid, 'Sefako Makgatho Health Sciences University (SMU)', 18, '31 July 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 20, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 22, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Bachelor of Nursing Science';
  END IF;

  -- Bachelor of Pharmacy (BPharm)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Bachelor of Pharmacy (BPharm)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Bachelor of Pharmacy (BPharm)', 'Health Sciences', 'degree', 8, 28, '4 years', 'Study to become a pharmacist. Excellent prospects in retail, hospital and pharmaceutical industry.', ARRAY['Pharmacist', 'Clinical Pharmacist', 'Pharmaceutical Researcher', 'Hospital Pharmacist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 65),
      (cid, 'Physical Sciences', 65),
      (cid, 'English', 55),
      (cid, 'Life Sciences', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of the Western Cape (UWC)', 30, '30 September 2026'),
      (cid, 'Rhodes University', 30, '30 September 2026'),
      (cid, 'North-West University (NWU)', 30, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 28, '30 September 2026'),
      (cid, 'Sefako Makgatho Health Sciences University (SMU)', 28, '31 July 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 28, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Bachelor of Pharmacy (BPharm)';
  END IF;

  -- Bachelor of Dental Surgery (BChD)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Bachelor of Dental Surgery (BChD)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Bachelor of Dental Surgery (BChD)', 'Health Sciences', 'degree', 8, 32, '5 years', 'Study to become a dentist. High demand and excellent earning potential in SA.', ARRAY['Dentist', 'Oral Hygienist', 'Orthodontist', 'Maxillofacial Surgeon'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 65),
      (cid, 'Physical Sciences', 65),
      (cid, 'English', 60),
      (cid, 'Life Sciences', 60);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 34, '30 June 2026'),
      (cid, 'University of the Western Cape (UWC)', 32, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 32, '30 September 2026'),
      (cid, 'Sefako Makgatho Health Sciences University (SMU)', 30, '31 July 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Bachelor of Dental Surgery (BChD)';
  END IF;

  -- Bachelor of Veterinary Science (BVSc)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Bachelor of Veterinary Science (BVSc)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Bachelor of Veterinary Science (BVSc)', 'Veterinary Science', 'degree', 8, 34, '6 years', 'Only offered at UP in SA. Care for animals in private practice, wildlife or research.', ARRAY['Veterinarian', 'Animal Scientist', 'Wildlife Vet', 'Zoo Vet', 'Research Scientist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 70),
      (cid, 'Physical Sciences', 65),
      (cid, 'Life Sciences', 65),
      (cid, 'English', 60);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 34, '30 June 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Bachelor of Veterinary Science (BVSc)';
  END IF;

  -- Bachelor of Physiotherapy
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Bachelor of Physiotherapy') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Bachelor of Physiotherapy', 'Health Sciences', 'degree', 7, 28, '4 years', 'Help patients recover from injuries and improve movement and quality of life.', ARRAY['Physiotherapist', 'Sports Therapist', 'Rehabilitation Specialist', 'Private Practitioner'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 55),
      (cid, 'Life Sciences', 55),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 30, '30 June 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 30, '30 September 2026'),
      (cid, 'Stellenbosch University (SU)', 30, '31 July 2026'),
      (cid, 'University of the Free State (UFS)', 28, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 28, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Bachelor of Physiotherapy';
  END IF;

  -- Bachelor of Occupational Therapy
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Bachelor of Occupational Therapy') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Bachelor of Occupational Therapy', 'Health Sciences', 'degree', 7, 26, '4 years', 'Help people participate in daily activities through therapeutic interventions.', ARRAY['Occupational Therapist', 'Rehabilitation Specialist', 'School-Based Therapist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'Life Sciences', 50),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 28, '30 September 2026'),
      (cid, 'Stellenbosch University (SU)', 28, '31 July 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 26, '30 September 2026'),
      (cid, 'Sefako Makgatho Health Sciences University (SMU)', 25, '31 July 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Bachelor of Occupational Therapy';
  END IF;

  -- Bachelor of Optometry
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Bachelor of Optometry') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Bachelor of Optometry', 'Health Sciences', 'degree', 7, 28, '4 years', 'Study eye care and vision health. Growing field with excellent career prospects.', ARRAY['Optometrist', 'Eye Care Specialist', 'Clinical Optometrist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 60),
      (cid, 'Physical Sciences', 60),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Johannesburg (UJ)', 28, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 28, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Bachelor of Optometry';
  END IF;

  -- Bachelor of Radiography
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Bachelor of Radiography') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Bachelor of Radiography', 'Health Sciences', 'degree', 7, 26, '4 years', 'Use imaging technology to diagnose and treat diseases.', ARRAY['Radiographer', 'Diagnostic Radiographer', 'Radiotherapy Technologist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 55),
      (cid, 'Physical Sciences', 55),
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 28, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 24, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 24, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 24, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Bachelor of Radiography';
  END IF;

  -- Bachelor of Emergency Medical Care
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Bachelor of Emergency Medical Care') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Bachelor of Emergency Medical Care', 'Health Sciences', 'degree', 7, 22, '4 years', 'Become an advanced paramedic. Work in emergency services, hospitals and air rescue.', ARRAY['Advanced Life Support Paramedic', 'Emergency Care Practitioner', 'Air Rescue Medic'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'Life Sciences', 50),
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Cape Peninsula University of Technology (CPUT)', 24, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 22, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 22, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 24, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Bachelor of Emergency Medical Care';
  END IF;

  -- BSc Dietetics
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Dietetics') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Dietetics', 'Health Sciences', 'degree', 7, 26, '4 years', 'Study nutrition and food science to help people achieve optimal health.', ARRAY['Dietitian', 'Nutritionist', 'Clinical Dietitian', 'Sports Nutritionist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 55),
      (cid, 'Life Sciences', 60),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 28, '31 July 2026'),
      (cid, 'University of the Free State (UFS)', 26, '30 September 2026'),
      (cid, 'Sefako Makgatho Health Sciences University (SMU)', 25, '31 July 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Dietetics';
  END IF;

  -- Bachelor of Laws (LLB)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Bachelor of Laws (LLB)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Bachelor of Laws (LLB)', 'Law', 'degree', 8, 22, '4 years', 'Study law and qualify as an attorney or advocate in South Africa.', ARRAY['Attorney', 'Advocate', 'Magistrate', 'Judge', 'Legal Advisor', 'Corporate Lawyer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 65),
      (cid, 'Mathematics', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 34, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 32, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 30, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 30, '31 July 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 28, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 28, '30 September 2026'),
      (cid, 'North-West University (NWU)', 26, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 26, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 24, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 24, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 24, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 22, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 26, '30 September 2026'),
      (cid, 'Rhodes University', 28, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 26, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 24, '30 November 2026'),
      (cid, 'Walter Sisulu University (WSU)', 22, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Bachelor of Laws (LLB)';
  END IF;

  -- BCom Accounting
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BCom Accounting') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BCom Accounting', 'Commerce', 'degree', 7, 24, '3 years', 'Gateway to becoming a CA(SA). One of the most sought after qualifications in SA.', ARRAY['Chartered Accountant (CA)', 'Auditor', 'Financial Manager', 'Tax Consultant', 'CFO'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 60),
      (cid, 'English', 55),
      (cid, 'Accounting', 60);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 36, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 34, '30 September 2026'),
      (cid, 'Stellenbosch University (SU)', 32, '31 July 2026'),
      (cid, 'University of Pretoria (UP)', 30, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 28, '30 September 2026'),
      (cid, 'North-West University (NWU)', 26, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 26, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 26, '30 September 2026'),
      (cid, 'Rhodes University', 26, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 24, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 24, '30 November 2026'),
      (cid, 'Nelson Mandela University (NMU)', 26, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 22, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 22, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 22, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BCom Accounting';
  END IF;

  -- BCom Finance
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BCom Finance') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BCom Finance', 'Commerce', 'degree', 7, 24, '3 years', 'Study financial markets, investments and corporate finance.', ARRAY['Financial Analyst', 'Investment Banker', 'Portfolio Manager', 'Stockbroker', 'Risk Analyst'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 60),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 34, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 32, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 30, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 30, '31 July 2026'),
      (cid, 'University of Johannesburg (UJ)', 26, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 26, '30 September 2026'),
      (cid, 'North-West University (NWU)', 24, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 24, '30 November 2026'),
      (cid, 'Nelson Mandela University (NMU)', 24, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BCom Finance';
  END IF;

  -- BCom Economics
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BCom Economics') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BCom Economics', 'Commerce', 'degree', 7, 24, '3 years', 'Study how economies work. Excellent for government, banking and research careers.', ARRAY['Economist', 'Policy Analyst', 'Data Analyst', 'Researcher', 'Government Economist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 60),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 34, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 30, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 28, '31 July 2026'),
      (cid, 'University of Johannesburg (UJ)', 26, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 26, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 24, '30 November 2026'),
      (cid, 'Rhodes University', 26, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BCom Economics';
  END IF;

  -- BCom Business Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BCom Business Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BCom Business Management', 'Commerce', 'degree', 7, 22, '3 years', 'Learn to run and manage businesses. Versatile degree with wide career options.', ARRAY['Business Manager', 'Entrepreneur', 'Operations Manager', 'HR Manager', 'General Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 26, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 24, '30 September 2026'),
      (cid, 'North-West University (NWU)', 24, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 24, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 22, '30 November 2026'),
      (cid, 'University of Zululand (UNIZULU)', 22, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 22, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 22, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 20, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 20, '30 September 2026'),
      (cid, 'Sol Plaatje University (SPU)', 20, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 20, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BCom Business Management';
  END IF;

  -- BCom Human Resource Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BCom Human Resource Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BCom Human Resource Management', 'Commerce', 'degree', 7, 22, '3 years', 'Manage people and workplace relations in organisations.', ARRAY['HR Manager', 'Recruitment Specialist', 'Training & Development Manager', 'Labour Relations Officer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 24, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 22, '30 November 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BCom Human Resource Management';
  END IF;

  -- BCom Marketing Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BCom Marketing Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BCom Marketing Management', 'Commerce', 'degree', 7, 22, '3 years', 'Study marketing strategies, consumer behaviour and brand management.', ARRAY['Marketing Manager', 'Brand Manager', 'Digital Marketer', 'Advertising Executive'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'English', 60);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 24, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 22, '30 November 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 20, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BCom Marketing Management';
  END IF;

  -- BCom Supply Chain Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BCom Supply Chain Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BCom Supply Chain Management', 'Commerce', 'degree', 7, 22, '3 years', 'Manage the flow of goods and services from production to consumer.', ARRAY['Supply Chain Manager', 'Logistics Manager', 'Procurement Officer', 'Operations Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 55),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 24, '30 September 2026'),
      (cid, 'Stellenbosch University (SU)', 26, '31 July 2026'),
      (cid, 'University of South Africa (UNISA)', 22, '30 November 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BCom Supply Chain Management';
  END IF;

  -- BCom Tourism Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BCom Tourism Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BCom Tourism Management', 'Commerce', 'degree', 7, 20, '3 years', 'Study tourism, hospitality and travel management in SA''s booming tourism industry.', ARRAY['Tourism Manager', 'Hotel Manager', 'Travel Agent', 'Event Manager', 'Tour Operator'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 55),
      (cid, 'Mathematics', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'North-West University (NWU)', 20, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 20, '30 November 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 18, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 18, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BCom Tourism Management';
  END IF;

  -- BEng Civil Engineering
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEng Civil Engineering') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEng Civil Engineering', 'Engineering', 'degree', 8, 30, '4 years', 'Design and build infrastructure — roads, bridges, dams and buildings.', ARRAY['Civil Engineer', 'Structural Engineer', 'Project Manager', 'Site Engineer', 'Consulting Engineer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 70),
      (cid, 'Physical Sciences', 70),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 36, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 35, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 34, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 34, '31 July 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 32, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 32, '30 September 2026'),
      (cid, 'North-West University (NWU)', 30, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 30, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 28, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 26, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 26, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 24, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 24, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 24, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEng Civil Engineering';
  END IF;

  -- BEng Mechanical Engineering
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEng Mechanical Engineering') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEng Mechanical Engineering', 'Engineering', 'degree', 8, 30, '4 years', 'Design and build machines, engines and mechanical systems.', ARRAY['Mechanical Engineer', 'Automotive Engineer', 'Manufacturing Engineer', 'HVAC Engineer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 70),
      (cid, 'Physical Sciences', 70),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 36, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 35, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 34, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 34, '31 July 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 32, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 32, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 30, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 28, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 26, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 24, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 24, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 24, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEng Mechanical Engineering';
  END IF;

  -- BEng Electrical Engineering
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEng Electrical Engineering') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEng Electrical Engineering', 'Engineering', 'degree', 8, 30, '4 years', 'Work with electricity, electronics and power systems. High demand in SA.', ARRAY['Electrical Engineer', 'Electronics Engineer', 'Power Systems Engineer', 'Automation Engineer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 70),
      (cid, 'Physical Sciences', 70),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 36, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 35, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 34, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 34, '31 July 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 32, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 32, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 30, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 28, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 26, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 26, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 24, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 24, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEng Electrical Engineering';
  END IF;

  -- BEng Chemical Engineering
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEng Chemical Engineering') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEng Chemical Engineering', 'Engineering', 'degree', 8, 32, '4 years', 'Work in mining, petroleum, food and chemical industries.', ARRAY['Chemical Engineer', 'Process Engineer', 'Petrochemical Engineer', 'Food Process Engineer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 70),
      (cid, 'Physical Sciences', 70),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 36, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 34, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 34, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 34, '31 July 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 32, '30 September 2026'),
      (cid, 'North-West University (NWU)', 30, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEng Chemical Engineering';
  END IF;

  -- BEng Mining Engineering
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEng Mining Engineering') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEng Mining Engineering', 'Engineering', 'degree', 8, 30, '4 years', 'SA is a mining powerhouse — excellent career prospects and some of the highest salaries.', ARRAY['Mining Engineer', 'Rock Engineer', 'Mine Manager', 'Geotechnical Engineer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 65),
      (cid, 'Physical Sciences', 65),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of the Witwatersrand (Wits)', 32, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 30, '30 June 2026'),
      (cid, 'University of the Free State (UFS)', 28, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEng Mining Engineering';
  END IF;

  -- BEng Industrial Engineering
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEng Industrial Engineering') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEng Industrial Engineering', 'Engineering', 'degree', 8, 30, '4 years', 'Optimise complex systems, processes and organisations.', ARRAY['Industrial Engineer', 'Operations Research Analyst', 'Systems Engineer', 'Quality Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 70),
      (cid, 'Physical Sciences', 65),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 32, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 32, '31 July 2026'),
      (cid, 'University of Johannesburg (UJ)', 30, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 28, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEng Industrial Engineering';
  END IF;

  -- BEng Software Engineering
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEng Software Engineering') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEng Software Engineering', 'Engineering', 'degree', 8, 30, '4 years', 'Build software systems and applications at an engineering level.', ARRAY['Software Engineer', 'Systems Architect', 'DevOps Engineer', 'Technical Lead'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 70),
      (cid, 'Physical Sciences', 60),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 32, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 30, '30 September 2026'),
      (cid, 'North-West University (NWU)', 28, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEng Software Engineering';
  END IF;

  -- BSc Computer Science
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Computer Science') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Computer Science', 'Science', 'degree', 7, 26, '3 years', 'One of the most in-demand degrees globally. Excellent career and salary prospects.', ARRAY['Software Developer', 'Data Scientist', 'AI Engineer', 'Cybersecurity Analyst', 'Systems Developer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 65),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 36, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 34, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 32, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 32, '31 July 2026'),
      (cid, 'University of Johannesburg (UJ)', 28, '30 September 2026'),
      (cid, 'Rhodes University', 28, '30 September 2026'),
      (cid, 'North-West University (NWU)', 26, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 26, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 24, '30 November 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 28, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 26, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 26, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Computer Science';
  END IF;

  -- BSc Information Technology
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Information Technology') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Information Technology', 'Science', 'degree', 7, 22, '3 years', 'Practical IT skills for the modern workplace. High demand across all industries.', ARRAY['IT Support', 'Network Administrator', 'Systems Analyst', 'Web Developer', 'Database Administrator'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 55),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 26, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 24, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 24, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 22, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 22, '30 November 2026'),
      (cid, 'Vaal University of Technology (VUT)', 22, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 22, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 20, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Information Technology';
  END IF;

  -- BSc Data Science
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Data Science') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Data Science', 'Science', 'degree', 7, 28, '3 years', 'Analyse and interpret complex data to help organisations make better decisions.', ARRAY['Data Scientist', 'Data Analyst', 'Machine Learning Engineer', 'Business Intelligence Analyst'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 70),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 34, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 32, '30 September 2026'),
      (cid, 'Stellenbosch University (SU)', 32, '31 July 2026'),
      (cid, 'University of Pretoria (UP)', 30, '30 June 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Data Science';
  END IF;

  -- BEd Foundation Phase Teaching
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEd Foundation Phase Teaching') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEd Foundation Phase Teaching', 'Education', 'degree', 7, 20, '4 years', 'Teach Grades R to 3. Critical role in SA education. Funza Lushaka bursary available.', ARRAY['Foundation Phase Teacher', 'Early Childhood Educator', 'Grade R Teacher'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 55),
      (cid, 'Mathematics', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 24, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 20, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 20, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 20, '30 November 2026'),
      (cid, 'University of Limpopo (UL)', 20, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 20, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 20, '30 September 2026'),
      (cid, 'Sol Plaatje University (SPU)', 20, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 20, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEd Foundation Phase Teaching';
  END IF;

  -- BEd Senior & FET Phase Teaching
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEd Senior & FET Phase Teaching') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEd Senior & FET Phase Teaching', 'Education', 'degree', 7, 20, '4 years', 'Teach Grades 7-12. Funza Lushaka bursary available for qualifying students.', ARRAY['High School Teacher', 'Subject Specialist', 'Department Head', 'Education Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 55),
      (cid, 'Mathematics', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 24, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 20, '30 November 2026'),
      (cid, 'University of Limpopo (UL)', 20, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 20, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 20, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 20, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 20, '30 September 2026'),
      (cid, 'Sol Plaatje University (SPU)', 20, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 20, '30 September 2026'),
      (cid, 'Stellenbosch University (SU)', 26, '31 July 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEd Senior & FET Phase Teaching';
  END IF;

  -- BEd Intermediate Phase Teaching
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEd Intermediate Phase Teaching') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEd Intermediate Phase Teaching', 'Education', 'degree', 7, 20, '4 years', 'Teach Grades 4-6. Build foundation for senior phase learning.', ARRAY['Intermediate Phase Teacher', 'Primary School Teacher'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 55),
      (cid, 'Mathematics', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 20, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 20, '30 November 2026'),
      (cid, 'Walter Sisulu University (WSU)', 20, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEd Intermediate Phase Teaching';
  END IF;

  -- BSc General Science
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc General Science') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc General Science', 'Science', 'degree', 7, 24, '3 years', 'Study biology, chemistry, physics or mathematics at university level.', ARRAY['Scientist', 'Researcher', 'Laboratory Analyst', 'Environmental Scientist', 'Science Teacher'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 60),
      (cid, 'Physical Sciences', 55),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 32, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 30, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 28, '31 July 2026'),
      (cid, 'Rhodes University', 26, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 26, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 24, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 24, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 22, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 22, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 22, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 22, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc General Science';
  END IF;

  -- BSc Agriculture
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Agriculture') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Agriculture', 'Agriculture', 'degree', 7, 22, '4 years', 'Study food production, farming and agricultural science. SA''s food security depends on this.', ARRAY['Agronomist', 'Farm Manager', 'Agricultural Scientist', 'Food Technologist', 'Agri-business Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'Life Sciences', 50),
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 26, '31 July 2026'),
      (cid, 'University of the Free State (UFS)', 24, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 24, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 22, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 22, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 22, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Agriculture';
  END IF;

  -- BSc Environmental Science
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Environmental Science') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Environmental Science', 'Science', 'degree', 7, 24, '3 years', 'Study the environment and how to protect it. Growing field with global demand.', ARRAY['Environmental Scientist', 'Conservation Manager', 'Environmental Consultant', 'Ecologist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 55),
      (cid, 'Life Sciences', 55),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 30, '31 July 2026'),
      (cid, 'Rhodes University', 26, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'University of the Western Cape (UWC)', 24, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Environmental Science';
  END IF;

  -- BA General (Humanities)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA General (Humanities)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA General (Humanities)', 'Humanities', 'degree', 7, 20, '3 years', 'Flexible degree covering languages, history, politics and social sciences.', ARRAY['Journalist', 'Social Worker', 'Public Relations Officer', 'Government Official', 'Writer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 30, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 28, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 26, '31 July 2026'),
      (cid, 'Rhodes University', 24, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 20, '30 November 2026'),
      (cid, 'University of Limpopo (UL)', 20, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 20, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 20, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 20, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 20, '30 September 2026'),
      (cid, 'Sol Plaatje University (SPU)', 20, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 20, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA General (Humanities)';
  END IF;

  -- BA Psychology
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Psychology') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Psychology', 'Humanities', 'degree', 7, 22, '3 years', 'Study the human mind and behaviour. Honours required to practice as psychologist.', ARRAY['Psychologist', 'Counsellor', 'HR Specialist', 'Social Worker', 'Research Psychologist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 60);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 32, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 30, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 28, '31 July 2026'),
      (cid, 'University of Johannesburg (UJ)', 26, '30 September 2026'),
      (cid, 'North-West University (NWU)', 24, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 24, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 22, '30 November 2026'),
      (cid, 'University of the Western Cape (UWC)', 24, '30 September 2026'),
      (cid, 'Rhodes University', 26, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Psychology';
  END IF;

  -- Bachelor of Social Work (BSW)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Bachelor of Social Work (BSW)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Bachelor of Social Work (BSW)', 'Humanities', 'degree', 7, 18, '4 years', 'Help vulnerable communities and families. Critical and in-demand profession in SA.', ARRAY['Social Worker', 'Child Protection Officer', 'Community Developer', 'Social Development Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 20, '30 September 2026'),
      (cid, 'North-West University (NWU)', 20, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 18, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 18, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 18, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 18, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 18, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 18, '30 November 2026'),
      (cid, 'University of the Western Cape (UWC)', 20, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Bachelor of Social Work (BSW)';
  END IF;

  -- BA Journalism and Media Studies
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Journalism and Media Studies') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Journalism and Media Studies', 'Humanities', 'degree', 7, 22, '3 years', 'Study media, journalism and communication in the digital age.', ARRAY['Journalist', 'News Anchor', 'Content Creator', 'PR Specialist', 'Media Producer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 65);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of the Witwatersrand (Wits)', 28, '30 September 2026'),
      (cid, 'Stellenbosch University (SU)', 26, '31 July 2026'),
      (cid, 'Rhodes University', 26, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 24, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 24, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 22, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 22, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Journalism and Media Studies';
  END IF;

  -- BA Political Science
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Political Science') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Political Science', 'Humanities', 'degree', 7, 22, '3 years', 'Study government, politics and international relations.', ARRAY['Political Analyst', 'Government Official', 'Diplomat', 'Policy Researcher', 'NGO Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 60);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 30, '31 July 2026'),
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'Stellenbosch University (SU)', 26, '31 July 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 20, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Political Science';
  END IF;

  -- Bachelor of Architecture (BArch)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Bachelor of Architecture (BArch)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Bachelor of Architecture (BArch)', 'Built Environment', 'degree', 8, 28, '5 years', 'Design buildings and urban spaces. Creative and technical career with good prospects.', ARRAY['Architect', 'Urban Designer', 'Project Manager', 'Interior Designer', 'Construction Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 65),
      (cid, 'English', 60);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 34, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 32, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 30, '30 June 2026'),
      (cid, 'Nelson Mandela University (NMU)', 28, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 28, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Bachelor of Architecture (BArch)';
  END IF;

  -- BSc Quantity Surveying
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Quantity Surveying') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Quantity Surveying', 'Built Environment', 'degree', 7, 26, '3 years', 'Manage construction costs and contracts. High demand in construction industry.', ARRAY['Quantity Surveyor', 'Cost Engineer', 'Project Manager', 'Construction Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 60),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of the Witwatersrand (Wits)', 28, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'Nelson Mandela University (NMU)', 26, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 24, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 24, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 24, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Quantity Surveying';
  END IF;

  -- BA Criminology & Criminal Justice
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Criminology & Criminal Justice') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Criminology & Criminal Justice', 'Humanities', 'degree', 7, 20, '3 years', 'Study crime, criminal behaviour and the justice system.', ARRAY['Police Officer', 'Detective', 'Crime Analyst', 'Probation Officer', 'Correctional Services'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of South Africa (UNISA)', 20, '30 November 2026'),
      (cid, 'University of Limpopo (UL)', 20, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Criminology & Criminal Justice';
  END IF;

  -- Diploma in Accounting Sciences
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Accounting Sciences') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Accounting Sciences', 'Commerce', 'diploma', 6, 18, '3 years', 'Practical accounting qualification. Good stepping stone to BCom degree.', ARRAY['Bookkeeper', 'Accounting Technician', 'Junior Accountant', 'Payroll Administrator'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'English', 50),
      (cid, 'Accounting', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 20, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 18, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 18, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Accounting Sciences';
  END IF;

  -- Diploma in Information Technology
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Information Technology') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Information Technology', 'Science', 'diploma', 6, 18, '3 years', 'Practical IT qualification. Excellent entry point into the tech industry.', ARRAY['IT Technician', 'Help Desk Support', 'Junior Developer', 'Network Technician'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 18, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 18, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 18, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Information Technology';
  END IF;

  -- Diploma in Engineering (Electrical)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Engineering (Electrical)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Engineering (Electrical)', 'Engineering', 'diploma', 6, 18, '3 years', 'Practical electrical engineering qualification. High demand in construction and industry.', ARRAY['Electrical Technician', 'Electrician', 'Maintenance Technician', 'Solar Installer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'Physical Sciences', 50),
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 18, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 18, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 18, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Engineering (Electrical)';
  END IF;

  -- Diploma in Engineering (Mechanical)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Engineering (Mechanical)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Engineering (Mechanical)', 'Engineering', 'diploma', 6, 18, '3 years', 'Practical mechanical engineering. High demand in manufacturing and mining sectors.', ARRAY['Mechanical Technician', 'Fitter & Turner', 'Maintenance Engineer', 'Production Supervisor'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'Physical Sciences', 50),
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 18, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 18, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 18, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Engineering (Mechanical)';
  END IF;

  -- Diploma in Nursing
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Nursing') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Nursing', 'Health Sciences', 'diploma', 6, 18, '3 years', 'Become a nursing practitioner. Can upgrade to degree later.', ARRAY['Enrolled Nurse', 'Community Health Worker', 'Clinic Nurse'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 50),
      (cid, 'Life Sciences', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 20, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Nursing';
  END IF;

  -- Diploma in Hospitality Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Hospitality Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Hospitality Management', 'Commerce', 'diploma', 6, 16, '3 years', 'Work in SA''s booming hospitality and tourism industry.', ARRAY['Hotel Manager', 'Restaurant Manager', 'Event Coordinator', 'Food & Beverage Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 18, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 18, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 16, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 16, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 16, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Hospitality Management';
  END IF;

  -- Higher Certificate in Business Administration
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Higher Certificate in Business Administration') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Higher Certificate in Business Administration', 'Commerce', 'certificate', 5, 14, '1 year', 'Entry level business qualification. Good stepping stone to diploma or degree.', ARRAY['Office Administrator', 'Admin Clerk', 'Receptionist', 'PA'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of South Africa (UNISA)', 14, '30 November 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 14, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 14, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 14, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 14, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Higher Certificate in Business Administration';
  END IF;

  -- Higher Certificate in Information Technology
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Higher Certificate in Information Technology') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Higher Certificate in Information Technology', 'Science', 'certificate', 5, 14, '1 year', 'Entry level IT qualification. Step towards IT diploma or degree.', ARRAY['IT Support', 'Help Desk', 'Computer Technician'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40),
      (cid, 'Mathematics', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of South Africa (UNISA)', 14, '30 November 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 14, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 14, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Higher Certificate in Information Technology';
  END IF;

  -- BSc Speech-Language Therapy & Audiology
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Speech-Language Therapy & Audiology') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Speech-Language Therapy & Audiology', 'Health Sciences', 'degree', 8, 24, '4 years', 'Diagnose and treat communication, swallowing and hearing disorders. High demand in schools, hospitals and private practice.', ARRAY['Speech Therapist', 'Audiologist', 'Voice Therapist', 'Hearing Specialist', 'School Speech Therapist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 60),
      (cid, 'Mathematics', 50),
      (cid, 'Life Sciences', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 30, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 28, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'Stellenbosch University', 26, '30 June 2026'),
      (cid, 'University of the Free State (UFS)', 24, '30 September 2026'),
      (cid, 'North-West University (NWU)', 24, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 24, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Speech-Language Therapy & Audiology';
  END IF;

  -- BSc Medical Sciences
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Medical Sciences') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Medical Sciences', 'Health Sciences', 'degree', 7, 22, '3 years', 'Study the biological and medical sciences underpinning human health and disease. Foundation for further specialisation.', ARRAY['Medical Scientist', 'Laboratory Scientist', 'Researcher', 'Pharmaceutical Rep', 'Public Health Officer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 55),
      (cid, 'Physical Sciences', 55),
      (cid, 'Life Sciences', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 28, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 26, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Medical Sciences';
  END IF;

  -- BSc Biomedical Technology
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Biomedical Technology') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Biomedical Technology', 'Health Sciences', 'degree', 7, 20, '3 years', 'Learn to operate and maintain medical laboratory equipment and perform clinical tests used in disease diagnosis.', ARRAY['Biomedical Technologist', 'Lab Technician', 'Medical Device Specialist', 'Clinical Researcher'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 55),
      (cid, 'Physical Sciences', 55),
      (cid, 'Life Sciences', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 24, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 22, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 22, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 20, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 20, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 24, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Biomedical Technology';
  END IF;

  -- Diploma in Environmental Health
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Environmental Health') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Environmental Health', 'Health Sciences', 'diploma', 6, 18, '3 years', 'Inspect food premises, water quality and living environments to protect public health. Government and municipal roles available.', ARRAY['Environmental Health Officer', 'Food Safety Inspector', 'Water Quality Inspector', 'Health & Safety Officer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 40),
      (cid, 'Life Sciences', 40),
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 18, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 18, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 18, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Environmental Health';
  END IF;

  -- BEd Early Childhood Development (ECD)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEd Early Childhood Development (ECD)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEd Early Childhood Development (ECD)', 'Education', 'degree', 7, 16, '4 years', 'Specialise in teaching children from birth to age 6. High demand for qualified ECD practitioners across South Africa.', ARRAY['ECD Teacher', 'Crèche Owner', 'ECD Programme Coordinator', 'Early Learning Specialist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 20, '30 June 2026'),
      (cid, 'North-West University (NWU)', 18, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 18, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 18, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 18, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 18, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 18, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 16, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 16, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 16, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 16, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 16, '30 September 2026'),
      (cid, 'Sol Plaatje University (SPU)', 16, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 16, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEd Early Childhood Development (ECD)';
  END IF;

  -- BEd Special Needs Education
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEd Special Needs Education') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEd Special Needs Education', 'Education', 'degree', 7, 18, '4 years', 'Train to support learners with physical, cognitive and learning disabilities. Critical shortage in SA inclusive education.', ARRAY['Special Needs Teacher', 'Learning Support Specialist', 'Inclusive Education Coordinator', 'Remedial Teacher'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 22, '30 June 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 22, '30 September 2026'),
      (cid, 'North-West University (NWU)', 20, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 20, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'University of Cape Town (UCT)', 22, '31 July 2026'),
      (cid, 'Stellenbosch University', 20, '30 June 2026'),
      (cid, 'University of the Western Cape (UWC)', 18, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 18, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 18, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 18, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 18, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEd Special Needs Education';
  END IF;

  -- BA Communication Studies
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Communication Studies') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Communication Studies', 'Humanities', 'degree', 7, 18, '3 years', 'Study how people communicate through media, language and organisations. Leads to careers in PR, media and corporate communication.', ARRAY['Communications Officer', 'PR Specialist', 'Content Creator', 'Corporate Communicator', 'Social Media Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 26, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 24, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 22, '30 June 2026'),
      (cid, 'Stellenbosch University', 22, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'North-West University (NWU)', 20, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 20, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 20, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 18, '30 September 2026'),
      (cid, 'Rhodes University', 22, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 18, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 18, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 18, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 18, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Communication Studies';
  END IF;

  -- BA International Relations
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA International Relations') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA International Relations', 'Humanities', 'degree', 7, 20, '3 years', 'Study global politics, diplomacy and international law. Opens doors to government, NGOs and international organisations.', ARRAY['Diplomat', 'Foreign Affairs Officer', 'NGO Programme Manager', 'International Trade Analyst', 'Policy Analyst'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 60);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 28, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 26, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'Stellenbosch University', 24, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'Rhodes University', 24, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 20, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 20, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 20, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA International Relations';
  END IF;

  -- BA Development Studies
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Development Studies') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Development Studies', 'Humanities', 'degree', 7, 16, '3 years', 'Understand poverty, inequality and development in Africa and the Global South. Relevant to NGOs, government and development agencies.', ARRAY['Development Practitioner', 'NGO Coordinator', 'Community Developer', 'Policy Researcher', 'Government Official'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 26, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 18, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 18, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 16, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 16, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 16, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 16, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 16, '30 September 2026'),
      (cid, 'Sol Plaatje University (SPU)', 16, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 16, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Development Studies';
  END IF;

  -- BA African Languages
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA African Languages') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA African Languages', 'Humanities', 'degree', 7, 16, '3 years', 'Study Zulu, Xhosa, Sotho, Tswana and other SA languages at an academic level. Valued in education, government and media.', ARRAY['Language Practitioner', 'Translator', 'Lexicographer', 'Teacher', 'Broadcaster', 'Government Language Officer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Home Language', 50),
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 20, '30 June 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 18, '30 September 2026'),
      (cid, 'North-West University (NWU)', 18, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 18, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 16, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 16, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 16, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 16, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 16, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 16, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA African Languages';
  END IF;

  -- BA Sociology
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Sociology') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Sociology', 'Humanities', 'degree', 7, 16, '3 years', 'Study society, inequality, race, class and gender in South Africa. Broad career options in research, social services and policy.', ARRAY['Social Researcher', 'Community Development Worker', 'Policy Analyst', 'Human Resources Officer', 'NGO Worker'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 26, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 22, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 20, '30 June 2026'),
      (cid, 'Stellenbosch University', 20, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 18, '30 September 2026'),
      (cid, 'North-West University (NWU)', 18, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 18, '30 September 2026'),
      (cid, 'Rhodes University', 20, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 18, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 18, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 16, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 16, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 16, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 16, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 16, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Sociology';
  END IF;

  -- BA History & Heritage Studies
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA History & Heritage Studies') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA History & Heritage Studies', 'Humanities', 'degree', 7, 16, '3 years', 'Study South African and world history, colonial heritage and memory. Careers in museums, archives, government and education.', ARRAY['Archivist', 'Museum Curator', 'Heritage Officer', 'Researcher', 'Teacher', 'Government Communications'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 26, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 22, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 20, '30 June 2026'),
      (cid, 'Stellenbosch University', 20, '30 June 2026'),
      (cid, 'Rhodes University', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 18, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 18, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 18, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 18, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 16, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 16, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 16, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA History & Heritage Studies';
  END IF;

  -- BA Community Development
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Community Development') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Community Development', 'Humanities', 'degree', 7, 16, '3 years', 'Learn to plan and implement community upliftment programmes. Practical skills for government, municipalities and NGOs.', ARRAY['Community Development Worker', 'Social Development Officer', 'Municipal Official', 'NGO Manager', 'Ward Councillor Support'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of the Western Cape (UWC)', 18, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 18, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 16, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 16, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 16, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 16, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 16, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 16, '30 September 2026'),
      (cid, 'Sol Plaatje University (SPU)', 16, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 18, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 18, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 16, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Community Development';
  END IF;

  -- BCom Information Systems
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BCom Information Systems') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BCom Information Systems', 'Commerce', 'degree', 7, 22, '3 years', 'Bridge the gap between business and technology. Manage information systems, data and digital transformation in organisations.', ARRAY['IT Manager', 'Business Analyst', 'Systems Analyst', 'Data Manager', 'ERP Consultant', 'Digital Transformation Lead'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 55),
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 28, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 26, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'Stellenbosch University', 26, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 24, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 22, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 22, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 22, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BCom Information Systems';
  END IF;

  -- BAdmin Public Administration
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BAdmin Public Administration') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BAdmin Public Administration', 'Commerce', 'degree', 7, 18, '3 years', 'Study how government and public institutions are managed. Leads to careers in municipal and provincial government.', ARRAY['Government Administrator', 'Municipal Manager', 'Policy Officer', 'Public Sector Manager', 'Ward Councillor'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 22, '30 June 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 22, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 20, '30 September 2026'),
      (cid, 'North-West University (NWU)', 20, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 18, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 18, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 18, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 18, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 18, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 18, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 18, '30 September 2026'),
      (cid, 'Sol Plaatje University (SPU)', 18, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 18, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BAdmin Public Administration';
  END IF;

  -- BCom Entrepreneurship
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BCom Entrepreneurship') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BCom Entrepreneurship', 'Commerce', 'degree', 7, 20, '3 years', 'Learn to start and grow businesses. Combines business fundamentals with innovation and venture creation skills.', ARRAY['Entrepreneur', 'Business Owner', 'Startup Founder', 'Business Development Manager', 'Innovation Consultant'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'Stellenbosch University', 24, '30 June 2026'),
      (cid, 'North-West University (NWU)', 20, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 20, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 20, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 20, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 20, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 20, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BCom Entrepreneurship';
  END IF;

  -- Diploma in Business Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Business Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Business Management', 'Commerce', 'diploma', 6, 16, '3 years', 'Practical management skills for supervisory and junior management roles in any business sector.', ARRAY['Business Manager', 'Team Leader', 'Operations Coordinator', 'Office Manager', 'Retail Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40),
      (cid, 'Mathematics', 30);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 18, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 18, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 16, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 16, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 16, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 16, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 16, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 16, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 16, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 16, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 16, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 16, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 16, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Business Management';
  END IF;

  -- Diploma in Human Resource Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Human Resource Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Human Resource Management', 'Commerce', 'diploma', 6, 16, '3 years', 'Learn to manage people in organisations — recruitment, training, payroll and labour relations. Every company needs HR.', ARRAY['HR Officer', 'Recruitment Consultant', 'Labour Relations Officer', 'Training Coordinator', 'Payroll Administrator'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 18, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 18, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 16, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 16, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 16, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 16, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 16, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 16, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 16, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Human Resource Management';
  END IF;

  -- Diploma in Marketing
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Marketing') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Marketing', 'Commerce', 'diploma', 6, 16, '3 years', 'Learn advertising, digital marketing, branding and market research. Huge demand in the digital economy.', ARRAY['Marketing Coordinator', 'Digital Marketer', 'Brand Assistant', 'Social Media Manager', 'Sales Executive'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 18, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 18, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 16, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 16, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 16, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 16, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 16, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 16, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Marketing';
  END IF;

  -- Diploma in Financial Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Financial Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Financial Management', 'Commerce', 'diploma', 6, 16, '3 years', 'Learn budgeting, financial reporting and cost management for business. Pathway to a career in corporate or government finance.', ARRAY['Financial Administrator', 'Bookkeeper', 'Budget Analyst', 'Accounts Clerk', 'Finance Officer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 40),
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 18, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 18, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 16, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 16, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 16, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 16, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 16, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 16, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Financial Management';
  END IF;

  -- Diploma in Public Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Public Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Public Management', 'Commerce', 'diploma', 6, 15, '3 years', 'Entry-level qualification for local and provincial government roles. Covers governance, municipal finance and service delivery.', ARRAY['Municipal Officer', 'Government Clerk', 'Public Sector Administrator', 'Ward Administrator'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 16, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 16, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 15, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 15, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 15, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 15, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 15, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 15, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 15, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 15, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 15, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 15, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Public Management';
  END IF;

  -- BSc Physics
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Physics') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Physics', 'Science', 'degree', 7, 24, '3 years', 'Study matter, energy and the universe. Opens doors to research, engineering, finance, medicine physics and technology sectors.', ARRAY['Physicist', 'Research Scientist', 'Medical Physicist', 'Actuary', 'Quantitative Analyst', 'Lecturer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 65),
      (cid, 'Physical Sciences', 65);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 30, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 28, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'Stellenbosch University', 26, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 24, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 24, '30 September 2026'),
      (cid, 'North-West University (NWU)', 24, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 24, '30 September 2026'),
      (cid, 'Rhodes University', 26, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 24, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 24, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 24, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 24, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 24, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Physics';
  END IF;

  -- BSc Chemistry
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Chemistry') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Chemistry', 'Science', 'degree', 7, 22, '3 years', 'Study the composition, properties and reactions of matter. Pathways to medicine, industry, research and teaching.', ARRAY['Chemist', 'Chemical Analyst', 'Quality Control Officer', 'Pharmaceutical Researcher', 'Forensic Scientist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 60),
      (cid, 'Physical Sciences', 65);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 28, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 26, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'Stellenbosch University', 24, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'Rhodes University', 24, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 22, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 22, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 22, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 22, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 22, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Chemistry';
  END IF;

  -- BSc Mathematics
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Mathematics') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Mathematics', 'Science', 'degree', 7, 24, '3 years', 'Pure and applied mathematics. Opens doors to finance, data science, engineering, academia and technology.', ARRAY['Mathematician', 'Statistician', 'Data Scientist', 'Financial Analyst', 'Actuary', 'Software Developer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 70);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 30, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 28, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'Stellenbosch University', 26, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 24, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 24, '30 September 2026'),
      (cid, 'North-West University (NWU)', 24, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 24, '30 September 2026'),
      (cid, 'Rhodes University', 26, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 24, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 24, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 24, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 24, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Mathematics';
  END IF;

  -- BSc Actuarial Science
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Actuarial Science') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Actuarial Science', 'Science', 'degree', 7, 28, '3 years', 'Use mathematics and statistics to assess financial risk for insurance, banking and investment. One of the highest-paid careers in SA.', ARRAY['Actuary', 'Risk Analyst', 'Investment Analyst', 'Insurance Consultant', 'Pension Fund Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 80),
      (cid, 'English', 60);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 34, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 32, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 30, '30 June 2026'),
      (cid, 'Stellenbosch University', 32, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 28, '30 September 2026'),
      (cid, 'North-West University (NWU)', 28, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 28, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Actuarial Science';
  END IF;

  -- BSc Statistics
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Statistics') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Statistics', 'Science', 'degree', 7, 22, '3 years', 'Collect, analyse and interpret data to support decision-making. Critical skill across all industries in the data age.', ARRAY['Statistician', 'Data Analyst', 'Research Analyst', 'Market Researcher', 'Biostatistician'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 65);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 28, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 26, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'Stellenbosch University', 24, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'Rhodes University', 24, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 22, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 22, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 22, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Statistics';
  END IF;

  -- BSc Biochemistry
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Biochemistry') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Biochemistry', 'Science', 'degree', 7, 22, '3 years', 'Study the chemical processes in living organisms. Key for careers in medicine, nutrition, pharmaceuticals and research.', ARRAY['Biochemist', 'Pharmaceutical Researcher', 'Laboratory Scientist', 'Nutritionist', 'Medical Researcher'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 60),
      (cid, 'Physical Sciences', 60),
      (cid, 'Life Sciences', 60);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 28, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 26, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'Stellenbosch University', 24, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'Rhodes University', 24, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 22, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 22, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Biochemistry';
  END IF;

  -- BSc Microbiology
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Microbiology') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Microbiology', 'Science', 'degree', 7, 22, '3 years', 'Study bacteria, viruses and fungi and their roles in disease, food, environment and industry.', ARRAY['Microbiologist', 'Medical Scientist', 'Food Safety Scientist', 'Environmental Scientist', 'Pharmaceutical Researcher'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 55),
      (cid, 'Life Sciences', 60),
      (cid, 'Physical Sciences', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 28, '31 July 2026'),
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'Stellenbosch University', 24, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 22, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 22, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Microbiology';
  END IF;

  -- BSc Geology & Earth Science
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Geology & Earth Science') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Geology & Earth Science', 'Science', 'degree', 7, 22, '3 years', 'Study rocks, minerals, fossils and the structure of the earth. SA is a major mining country — geologists are in high demand.', ARRAY['Geologist', 'Mining Geologist', 'Environmental Consultant', 'Hydrogeologist', 'Exploration Geologist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 55),
      (cid, 'Physical Sciences', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 28, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 26, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'Stellenbosch University', 24, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'Rhodes University', 24, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Geology & Earth Science';
  END IF;

  -- BSc Food Science & Technology
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Food Science & Technology') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Food Science & Technology', 'Science', 'degree', 7, 20, '3 years', 'Study food composition, safety, processing and quality control. SA food industry is a major employer.', ARRAY['Food Scientist', 'Food Safety Officer', 'Product Developer', 'Quality Assurance Manager', 'Nutritionist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'Physical Sciences', 50),
      (cid, 'Life Sciences', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'Stellenbosch University', 24, '30 June 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 20, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Food Science & Technology';
  END IF;

  -- BEng Mechatronics Engineering
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEng Mechatronics Engineering') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEng Mechatronics Engineering', 'Engineering', 'degree', 8, 28, '4 years', 'Combines mechanical, electrical and computer engineering. Designs smart machines, robots and automation systems.', ARRAY['Mechatronics Engineer', 'Robotics Engineer', 'Automation Engineer', 'Product Design Engineer', 'Manufacturing Engineer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 70),
      (cid, 'Physical Sciences', 65);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 32, '30 June 2026'),
      (cid, 'Stellenbosch University', 32, '30 June 2026'),
      (cid, 'North-West University (NWU)', 28, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 28, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 28, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 28, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEng Mechatronics Engineering';
  END IF;

  -- BEng Computer Engineering
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEng Computer Engineering') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEng Computer Engineering', 'Engineering', 'degree', 8, 28, '4 years', 'Design and build computer hardware, embedded systems and networks. Bridge between electrical engineering and computer science.', ARRAY['Computer Engineer', 'Hardware Engineer', 'Embedded Systems Engineer', 'Network Engineer', 'Systems Architect'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 70),
      (cid, 'Physical Sciences', 65);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 32, '31 July 2026'),
      (cid, 'University of Pretoria (UP)', 32, '30 June 2026'),
      (cid, 'Stellenbosch University', 32, '30 June 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 30, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 28, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 28, '30 September 2026'),
      (cid, 'North-West University (NWU)', 28, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEng Computer Engineering';
  END IF;

  -- BEng Agricultural Engineering
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BEng Agricultural Engineering') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BEng Agricultural Engineering', 'Engineering', 'degree', 8, 24, '4 years', 'Apply engineering to farming — irrigation, machinery, food processing and land management. Critical for food security.', ARRAY['Agricultural Engineer', 'Irrigation Engineer', 'Farm Equipment Designer', 'Water Resource Engineer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 65),
      (cid, 'Physical Sciences', 60);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'Stellenbosch University', 28, '30 June 2026'),
      (cid, 'University of the Free State (UFS)', 26, '30 September 2026'),
      (cid, 'North-West University (NWU)', 24, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BEng Agricultural Engineering';
  END IF;

  -- Diploma in Engineering (Civil)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Engineering (Civil)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Engineering (Civil)', 'Engineering', 'diploma', 6, 18, '3 years', 'Practical civil engineering skills — roads, buildings, water infrastructure. Entry point to a career in construction and government.', ARRAY['Civil Engineering Technician', 'Construction Supervisor', 'Roads Technician', 'Site Inspector', 'Municipal Engineer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'Physical Sciences', 45);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 18, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 18, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 18, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 18, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Engineering (Civil)';
  END IF;

  -- Diploma in Engineering (Chemical)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Engineering (Chemical)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Engineering (Chemical)', 'Engineering', 'diploma', 6, 18, '3 years', 'Learn process plant operations, laboratory techniques and chemical production. Entry into petrochemical and manufacturing industries.', ARRAY['Chemical Technician', 'Process Plant Operator', 'Laboratory Technician', 'Quality Control Technician'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'Physical Sciences', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 18, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 18, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Engineering (Chemical)';
  END IF;

  -- BSc Cybersecurity
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Cybersecurity') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Cybersecurity', 'Information Technology', 'degree', 7, 22, '3 years', 'Protect networks, systems and data from cyber threats. One of the fastest-growing and highest-paid tech fields globally.', ARRAY['Cybersecurity Analyst', 'Ethical Hacker', 'Security Architect', 'Incident Responder', 'Forensic Analyst'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 60),
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 26, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 24, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 22, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 22, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 22, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Cybersecurity';
  END IF;

  -- Diploma in Software Development
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Software Development') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Software Development', 'Information Technology', 'diploma', 6, 16, '3 years', 'Practical coding, app development and software engineering skills. Direct entry to the tech industry.', ARRAY['Software Developer', 'Web Developer', 'App Developer', 'Junior Programmer', 'Systems Support Specialist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 40),
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 18, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 18, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 16, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 16, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 16, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 16, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 18, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 16, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Software Development';
  END IF;

  -- BSc Animal Science
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Animal Science') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Animal Science', 'Agriculture', 'degree', 7, 18, '3 years', 'Study livestock production, animal nutrition and breeding. Key for the farming, food and veterinary industries.', ARRAY['Animal Scientist', 'Livestock Farmer', 'Animal Nutritionist', 'Farm Manager', 'Agricultural Extension Officer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 40),
      (cid, 'Life Sciences', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 22, '30 June 2026'),
      (cid, 'Stellenbosch University', 22, '30 June 2026'),
      (cid, 'University of the Free State (UFS)', 20, '30 September 2026'),
      (cid, 'North-West University (NWU)', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 18, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 18, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 18, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 18, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Animal Science';
  END IF;

  -- BSc Plant Production & Soil Science
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Plant Production & Soil Science') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Plant Production & Soil Science', 'Agriculture', 'degree', 7, 18, '3 years', 'Understand crop production, soil health and sustainable farming. Critical for food security in Southern Africa.', ARRAY['Agronomist', 'Crop Scientist', 'Soil Scientist', 'Agricultural Extension Officer', 'Farm Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 40),
      (cid, 'Life Sciences', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 22, '30 June 2026'),
      (cid, 'Stellenbosch University', 22, '30 June 2026'),
      (cid, 'University of the Free State (UFS)', 20, '30 September 2026'),
      (cid, 'North-West University (NWU)', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 18, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 18, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 18, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 18, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Plant Production & Soil Science';
  END IF;

  -- Diploma in Agriculture
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Agriculture') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Agriculture', 'Agriculture', 'diploma', 6, 15, '3 years', 'Practical farming and agricultural management skills. Entry-level qualification for agricultural extension, farming and rural development.', ARRAY['Farm Manager', 'Agricultural Extension Officer', 'Rural Development Worker', 'Livestock Supervisor', 'Irrigation Technician'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Life Sciences', 40),
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 16, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 15, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 15, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 15, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 15, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 15, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 15, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 15, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Agriculture';
  END IF;

  -- BSc Forestry
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Forestry') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Forestry', 'Agriculture', 'degree', 7, 18, '3 years', 'Manage forests for timber, conservation and carbon credits. Growing importance in climate change mitigation.', ARRAY['Forester', 'Conservation Manager', 'Carbon Credits Officer', 'Environmental Manager', 'Wildlife Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 40),
      (cid, 'Life Sciences', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Stellenbosch University', 22, '30 June 2026'),
      (cid, 'University of Pretoria (UP)', 22, '30 June 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Forestry';
  END IF;

  -- BSc Town & Regional Planning
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Town & Regional Planning') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Town & Regional Planning', 'Built Environment', 'degree', 7, 22, '4 years', 'Plan cities, towns and rural areas for sustainable growth. Municipalities and government desperately need planners.', ARRAY['Town Planner', 'Urban Designer', 'Land Use Manager', 'Municipal Planner', 'Development Consultant'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 28, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 26, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'Stellenbosch University', 24, '30 June 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 22, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 22, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Town & Regional Planning';
  END IF;

  -- BSc Construction Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Construction Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Construction Management', 'Built Environment', 'degree', 7, 20, '3 years', 'Manage building construction projects from design to completion. Strong job market in government and private construction.', ARRAY['Construction Manager', 'Project Manager', 'Site Manager', 'Building Contractor', 'Facilities Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'Physical Sciences', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 26, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 24, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 22, '30 June 2026'),
      (cid, 'Stellenbosch University', 22, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'North-West University (NWU)', 20, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 20, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 20, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Construction Management';
  END IF;

  -- Diploma in Construction
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Construction') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Construction', 'Built Environment', 'diploma', 6, 15, '3 years', 'Practical construction skills for the building industry. Entry into site supervision, municipal infrastructure and housing.', ARRAY['Site Supervisor', 'Construction Technician', 'Building Inspector', 'Infrastructure Coordinator'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 16, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 16, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 15, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 15, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 15, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 15, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 15, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Construction';
  END IF;

  -- BSc Sport Science
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Sport Science') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Sport Science', 'Health Sciences', 'degree', 7, 20, '3 years', 'Study human performance, exercise physiology and sport coaching. Exciting career in elite sport, wellness and health.', ARRAY['Sport Scientist', 'Biokineticist', 'Personal Trainer', 'Sport Coach', 'Wellness Coordinator', 'Fitness Consultant'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'Life Sciences', 50),
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 24, '30 June 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 24, '30 September 2026'),
      (cid, 'North-West University (NWU)', 22, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'Stellenbosch University', 24, '30 June 2026'),
      (cid, 'University of the Free State (UFS)', 22, '30 September 2026'),
      (cid, 'University of Cape Town (UCT)', 24, '31 July 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'University of the Western Cape (UWC)', 20, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 20, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026'),
      (cid, 'Sol Plaatje University (SPU)', 20, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Sport Science';
  END IF;

  -- BSc Biokinetics
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BSc Biokinetics') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BSc Biokinetics', 'Health Sciences', 'degree', 7, 22, '4 years', 'Use exercise as medicine to rehabilitate injury and manage chronic disease. Registered health profession in SA.', ARRAY['Biokineticist', 'Cardiac Rehabilitation Specialist', 'Corporate Wellness Consultant', 'Sports Rehabilitator'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 50),
      (cid, 'Life Sciences', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'North-West University (NWU)', 24, '30 September 2026'),
      (cid, 'University of Johannesburg (UJ)', 24, '30 September 2026'),
      (cid, 'Stellenbosch University', 26, '30 June 2026'),
      (cid, 'University of the Free State (UFS)', 24, '30 September 2026'),
      (cid, 'University of Cape Town (UCT)', 26, '31 July 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 22, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BSc Biokinetics';
  END IF;

  -- BA Fine Art
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Fine Art') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Fine Art', 'Arts & Design', 'degree', 7, 16, '3 years', 'Develop your creative practice in painting, sculpture, printmaking and new media. Careers in arts education, galleries and freelance.', ARRAY['Artist', 'Art Teacher', 'Gallery Curator', 'Art Therapist', 'Illustrator', 'Visual Designer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 22, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 20, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 20, '30 June 2026'),
      (cid, 'Stellenbosch University', 20, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 18, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 18, '30 September 2026'),
      (cid, 'Rhodes University', 20, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 16, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 16, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 18, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Fine Art';
  END IF;

  -- BA Graphic Design
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Graphic Design') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Graphic Design', 'Arts & Design', 'degree', 7, 18, '3 years', 'Create visual communication for brands, media and digital platforms. High demand in advertising, tech and media industries.', ARRAY['Graphic Designer', 'UI/UX Designer', 'Brand Designer', 'Motion Graphics Artist', 'Art Director'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 24, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 22, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 22, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 20, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 20, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 20, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 18, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Graphic Design';
  END IF;

  -- BA Music
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Music') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Music', 'Arts & Design', 'degree', 7, 16, '3 years', 'Study performance, composition and music theory at an advanced level. Leads to teaching, performance and music production careers.', ARRAY['Musician', 'Music Teacher', 'Composer', 'Music Producer', 'Choir Director', 'Music Therapist'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 22, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 20, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 20, '30 June 2026'),
      (cid, 'Stellenbosch University', 20, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 18, '30 September 2026'),
      (cid, 'North-West University (NWU)', 18, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 18, '30 September 2026'),
      (cid, 'Rhodes University', 20, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 18, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 16, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Music';
  END IF;

  -- BA Drama & Theatre Arts
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Drama & Theatre Arts') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Drama & Theatre Arts', 'Arts & Design', 'degree', 7, 16, '3 years', 'Study acting, directing, stagecraft and theatre production. Careers in television, film, theatre and drama education.', ARRAY['Actor', 'Theatre Director', 'Drama Teacher', 'Film Producer', 'TV Presenter', 'Corporate Trainer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 22, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 20, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 20, '30 June 2026'),
      (cid, 'Stellenbosch University', 20, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 18, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 18, '30 September 2026'),
      (cid, 'Rhodes University', 20, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Drama & Theatre Arts';
  END IF;

  -- Diploma in Fashion Design
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Fashion Design') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Fashion Design', 'Arts & Design', 'diploma', 6, 15, '3 years', 'Design and produce clothing and fashion collections. Entry into the fashion industry, retail and textile manufacturing.', ARRAY['Fashion Designer', 'Textile Designer', 'Pattern Maker', 'Retail Buyer', 'Costume Designer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 16, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 16, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 15, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 15, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 16, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Fashion Design';
  END IF;

  -- BA Law (Extended)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Law (Extended)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Law (Extended)', 'Law', 'degree', 7, 18, '4 years', 'A 4-year programme combining arts and law, leading into LLB. Suitable for students who want a broader foundation before specialising.', ARRAY['Legal Advisor', 'Paralegal', 'Magistrate (after LLB)', 'Human Rights Officer', 'Corporate Legal Officer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 22, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 22, '30 September 2026'),
      (cid, 'North-West University (NWU)', 20, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 20, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 20, '30 September 2026'),
      (cid, 'University of Cape Town (UCT)', 24, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 24, '30 September 2026'),
      (cid, 'Stellenbosch University', 24, '30 June 2026'),
      (cid, 'University of the Western Cape (UWC)', 20, '30 September 2026'),
      (cid, 'Rhodes University', 22, '30 September 2026'),
      (cid, 'Nelson Mandela University (NMU)', 20, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 18, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 18, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 18, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Law (Extended)';
  END IF;

  -- BTh (Bachelor of Theology)
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BTh (Bachelor of Theology)') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BTh (Bachelor of Theology)', 'Theology', 'degree', 7, 16, '3 years', 'Study religion, the Bible and church ministry. Leads to pastoral work, chaplaincy, education and NGO careers.', ARRAY['Minister / Pastor', 'Chaplain', 'Religious Education Teacher', 'NGO Worker', 'Community Development Officer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 50);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Pretoria (UP)', 20, '30 June 2026'),
      (cid, 'Stellenbosch University', 20, '30 June 2026'),
      (cid, 'North-West University (NWU)', 18, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 18, '30 September 2026'),
      (cid, 'University of KwaZulu-Natal (UKZN)', 18, '30 September 2026'),
      (cid, 'University of Cape Town (UCT)', 20, '31 July 2026'),
      (cid, 'University of the Western Cape (UWC)', 18, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 16, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 16, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 16, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 16, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BTh (Bachelor of Theology)';
  END IF;

  -- Diploma in Tourism Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Tourism Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Tourism Management', 'Commerce', 'diploma', 6, 15, '3 years', 'Learn travel, tourism operations, hospitality and tour guiding. SA tourism is a major employer across all provinces.', ARRAY['Tour Guide', 'Travel Agent', 'Tourism Officer', 'Hotel Coordinator', 'Events Coordinator'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 16, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 16, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 15, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 15, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 15, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 15, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 15, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 15, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 15, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Tourism Management';
  END IF;

  -- BA Police Science
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BA Police Science') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BA Police Science', 'Humanities', 'degree', 7, 17, '3 years', 'Study policing, crime prevention, criminology and community safety. Pathway into SAPS, municipal policing and security industry.', ARRAY['Police Officer', 'Detective', 'Crime Analyst', 'Security Manager', 'Community Safety Officer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of South Africa (UNISA)', 17, '30 November 2026'),
      (cid, 'North-West University (NWU)', 18, '30 September 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 18, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 17, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 17, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BA Police Science';
  END IF;

  -- Diploma in Policing
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Diploma in Policing') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Diploma in Policing', 'Humanities', 'diploma', 6, 15, '3 years', 'Entry-level qualification for a career in law enforcement. Covers criminal law, policing methods and community relations.', ARRAY['Police Officer', 'Traffic Officer', 'Metro Police Officer', 'Security Officer', 'Community Safety Officer'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 16, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 16, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 15, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 15, '30 September 2026'),
      (cid, 'University of South Africa (UNISA)', 15, '30 November 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Diploma in Policing';
  END IF;

  -- BCom Forensic Accounting
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BCom Forensic Accounting') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BCom Forensic Accounting', 'Commerce', 'degree', 7, 24, '3 years', 'Detect financial fraud, corruption and money laundering. High demand from auditing firms, banks and government agencies.', ARRAY['Forensic Accountant', 'Fraud Investigator', 'Internal Auditor', 'Compliance Officer', 'Anti-Corruption Analyst'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 60),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 30, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 28, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 26, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 26, '30 September 2026'),
      (cid, 'North-West University (NWU)', 24, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 24, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BCom Forensic Accounting';
  END IF;

  -- BCom Investment Management
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'BCom Investment Management') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('BCom Investment Management', 'Commerce', 'degree', 7, 24, '3 years', 'Manage investments, analyse financial markets and build portfolios. Entry into banking, asset management and stock broking.', ARRAY['Investment Analyst', 'Portfolio Manager', 'Stockbroker', 'Financial Advisor', 'Asset Manager'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'Mathematics', 65),
      (cid, 'English', 55);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of Cape Town (UCT)', 30, '31 July 2026'),
      (cid, 'University of the Witwatersrand (Wits)', 28, '30 September 2026'),
      (cid, 'University of Pretoria (UP)', 28, '30 June 2026'),
      (cid, 'Stellenbosch University', 28, '30 June 2026'),
      (cid, 'University of Johannesburg (UJ)', 26, '30 September 2026'),
      (cid, 'North-West University (NWU)', 24, '30 September 2026'),
      (cid, 'University of the Free State (UFS)', 24, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): BCom Investment Management';
  END IF;

  -- Higher Certificate in Commerce
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Higher Certificate in Commerce') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Higher Certificate in Commerce', 'Commerce', 'certificate', 5, 15, '1 year', 'Foundation-level qualification for students who narrowly missed diploma entry requirements. Leads directly into a diploma.', ARRAY['Entry-level Office Worker', 'Shop Floor Supervisor', 'Administrative Clerk', 'Sales Representative'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of South Africa (UNISA)', 15, '30 November 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 15, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 15, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 15, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 15, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 15, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 15, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 15, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Higher Certificate in Commerce';
  END IF;

  -- Higher Certificate in Agriculture
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Higher Certificate in Agriculture') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Higher Certificate in Agriculture', 'Agriculture', 'certificate', 5, 15, '1 year', 'Entry qualification for the agricultural sector. Leads into diploma programmes in farming, conservation and rural development.', ARRAY['Farm Worker Supervisor', 'Agricultural Assistant', 'Extension Officer Assistant'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 15, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 15, '30 September 2026'),
      (cid, 'University of Fort Hare (UFH)', 15, '30 September 2026'),
      (cid, 'Walter Sisulu University (WSU)', 15, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 15, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 15, '30 September 2026'),
      (cid, 'University of Mpumalanga (UMP)', 15, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Higher Certificate in Agriculture';
  END IF;

  -- Higher Certificate in Public Administration
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Higher Certificate in Public Administration') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Higher Certificate in Public Administration', 'Commerce', 'certificate', 5, 15, '1 year', 'Foundation for a career in local and national government. Leads into diploma and degree programmes in public administration.', ARRAY['Government Clerk', 'Administrative Trainee', 'Municipal Learnership Candidate'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'University of South Africa (UNISA)', 15, '30 November 2026'),
      (cid, 'Tshwane University of Technology (TUT)', 15, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 15, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 15, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 15, '30 September 2026'),
      (cid, 'University of Zululand (UNIZULU)', 15, '30 September 2026'),
      (cid, 'University of Limpopo (UL)', 15, '30 September 2026'),
      (cid, 'University of Venda (UNIVEN)', 15, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Higher Certificate in Public Administration';
  END IF;

  -- Higher Certificate in Tourism
  IF NOT EXISTS (SELECT 1 FROM courses WHERE name = 'Higher Certificate in Tourism') THEN
    INSERT INTO courses (name, faculty, level, nqf_level, min_aps, duration, description, careers, is_active, academic_year)
    VALUES ('Higher Certificate in Tourism', 'Commerce', 'certificate', 5, 15, '1 year', 'Entry-level qualification for the hospitality and tourism industry. Leads into Diploma in Tourism or Hospitality Management.', ARRAY['Tourism Assistant', 'Hotel Receptionist', 'Tour Guide Trainee', 'Events Assistant'], true, 2025)
    RETURNING id INTO cid;
    INSERT INTO course_subject_requirements (course_id, subject, minimum_mark) VALUES
      (cid, 'English', 40);
    INSERT INTO course_universities (course_id, university_name, min_aps, application_deadline) VALUES
      (cid, 'Tshwane University of Technology (TUT)', 15, '30 September 2026'),
      (cid, 'Cape Peninsula University of Technology (CPUT)', 15, '30 September 2026'),
      (cid, 'Durban University of Technology (DUT)', 15, '30 September 2026'),
      (cid, 'Vaal University of Technology (VUT)', 15, '30 September 2026'),
      (cid, 'Central University of Technology (CUT)', 15, '30 September 2026'),
      (cid, 'Mangosuthu University of Technology (MUT)', 15, '30 September 2026');
  ELSE
    RAISE NOTICE 'Skipping (exists): Higher Certificate in Tourism';
  END IF;

  RAISE NOTICE 'Seed complete!';
END $$;

-- Verify
SELECT COUNT(*) AS total_courses FROM courses;
SELECT COUNT(*) AS total_universities FROM course_universities;
SELECT COUNT(*) AS total_subject_reqs FROM course_subject_requirements;