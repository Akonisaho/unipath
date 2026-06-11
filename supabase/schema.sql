-- UniPath Database Schema
-- Run this in your Supabase SQL Editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- =====================
-- CAREER FIELDS
-- =====================
create table if not exists career_fields (
  id uuid primary key default uuid_generate_v4(),
  name varchar(100) not null,
  icon varchar(50) not null,
  description text,
  created_at timestamp default now()
);

-- =====================
-- CAREERS
-- =====================
create table if not exists careers (
  id uuid primary key default uuid_generate_v4(),
  field_id uuid references career_fields(id) on delete cascade,
  title varchar(200) not null,
  description text not null,
  salary_min_zar integer not null,
  salary_max_zar integer not null,
  job_outlook varchar(20) default 'Stable',
  related_careers jsonb default '[]',
  updated_at timestamp default now()
);

-- =====================
-- UNIVERSITIES
-- =====================
create table if not exists universities (
  id uuid primary key default uuid_generate_v4(),
  name varchar(200) not null,
  abbreviation varchar(20) not null,
  province varchar(50) not null,
  website varchar(200),
  logo_url varchar(300),
  created_at timestamp default now()
);

-- =====================
-- COURSES
-- =====================
create table if not exists courses (
  id uuid primary key default uuid_generate_v4(),
  university_id uuid references universities(id) on delete cascade,
  faculty varchar(200) not null,
  name varchar(200) not null,
  aps_required integer not null,
  duration_years integer not null,
  closing_date date,
  application_fee decimal(10,2) default 0,
  updated_at timestamp default now()
);

-- Junction table: courses <-> careers
create table if not exists course_careers (
  course_id uuid references courses(id) on delete cascade,
  career_id uuid references careers(id) on delete cascade,
  primary key (course_id, career_id)
);

-- =====================
-- STUDENTS
-- =====================
create table if not exists students (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade unique,
  first_name varchar(100) not null,
  last_name varchar(100) not null,
  email varchar(200) not null,
  phone varchar(20),
  id_number varchar(20),
  school_name varchar(200),
  province varchar(50),
  matric_results jsonb default '[]',
  aps_score integer default 0,
  registration_complete boolean default false,
  created_at timestamp default now()
);

-- =====================
-- DOCUMENTS
-- =====================
create table if not exists documents (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references students(id) on delete cascade,
  type varchar(50) not null,
  file_url varchar(500) not null,
  file_name varchar(200) not null,
  uploaded_at timestamp default now()
);

-- =====================
-- APPLICATIONS
-- =====================
create table if not exists applications (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references students(id) on delete cascade,
  university_id uuid references universities(id),
  course_id uuid references courses(id),
  status varchar(50) default 'submitted',
  submitted_at timestamp default now(),
  updated_at timestamp default now()
);

-- =====================
-- PROOF OF PAYMENTS
-- =====================
create table if not exists proof_of_payments (
  id uuid primary key default uuid_generate_v4(),
  application_id uuid references applications(id) on delete cascade,
  file_url varchar(500) not null,
  file_name varchar(200) not null,
  uploaded_at timestamp default now()
);

-- =====================
-- NOTIFICATIONS
-- =====================
create table if not exists notifications (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references students(id) on delete cascade,
  title varchar(200) not null,
  message text not null,
  read boolean default false,
  created_at timestamp default now()
);

-- =====================
-- CHAT SESSIONS
-- =====================
create table if not exists chat_sessions (
  id uuid primary key default uuid_generate_v4(),
  student_id uuid references students(id) on delete cascade,
  messages jsonb default '[]',
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- =====================
-- ROW LEVEL SECURITY
-- =====================
alter table students enable row level security;
alter table documents enable row level security;
alter table applications enable row level security;
alter table proof_of_payments enable row level security;
alter table notifications enable row level security;
alter table chat_sessions enable row level security;

-- Students: only own row
create policy "Students can view own profile"
  on students for select using (auth.uid() = user_id);

create policy "Students can update own profile"
  on students for update using (auth.uid() = user_id);

create policy "Students can insert own profile"
  on students for insert with check (auth.uid() = user_id);

-- Documents: only own documents
create policy "Students can view own documents"
  on documents for select using (
    student_id in (select id from students where user_id = auth.uid())
  );

create policy "Students can insert own documents"
  on documents for insert with check (
    student_id in (select id from students where user_id = auth.uid())
  );

-- Applications: only own applications
create policy "Students can view own applications"
  on applications for select using (
    student_id in (select id from students where user_id = auth.uid())
  );

create policy "Students can insert own applications"
  on applications for insert with check (
    student_id in (select id from students where user_id = auth.uid())
  );

-- Proof of payments: only own
create policy "Students can view own proof of payments"
  on proof_of_payments for select using (
    application_id in (
      select id from applications where student_id in (
        select id from students where user_id = auth.uid()
      )
    )
  );

create policy "Students can insert own proof of payments"
  on proof_of_payments for insert with check (
    application_id in (
      select id from applications where student_id in (
        select id from students where user_id = auth.uid()
      )
    )
  );

-- Notifications: only own
create policy "Students can view own notifications"
  on notifications for select using (
    student_id in (select id from students where user_id = auth.uid())
  );

-- Chat sessions: only own
create policy "Students can view own chat sessions"
  on chat_sessions for select using (
    student_id in (select id from students where user_id = auth.uid())
  );

create policy "Students can insert own chat sessions"
  on chat_sessions for insert with check (
    student_id in (select id from students where user_id = auth.uid())
  );

create policy "Students can update own chat sessions"
  on chat_sessions for update using (
    student_id in (select id from students where user_id = auth.uid())
  );

-- Public read access for universities, courses, careers, career_fields
create policy "Anyone can view universities"
  on universities for select using (true);

create policy "Anyone can view courses"
  on courses for select using (true);

create policy "Anyone can view careers"
  on careers for select using (true);

create policy "Anyone can view career fields"
  on career_fields for select using (true);

alter table universities enable row level security;
alter table courses enable row level security;
alter table careers enable row level security;
alter table career_fields enable row level security;

-- =====================
-- SEED: ALL 26 SA UNIVERSITIES
-- =====================
insert into universities (name, abbreviation, province, website) values
('University of Pretoria', 'UP', 'Gauteng', 'https://www.up.ac.za'),
('University of Johannesburg', 'UJ', 'Gauteng', 'https://www.uj.ac.za'),
('University of the Witwatersrand', 'Wits', 'Gauteng', 'https://www.wits.ac.za'),
('University of South Africa', 'UNISA', 'Gauteng', 'https://www.unisa.ac.za'),
('Tshwane University of Technology', 'TUT', 'Gauteng', 'https://www.tut.ac.za'),
('Vaal University of Technology', 'VUT', 'Gauteng', 'https://www.vut.ac.za'),
('Sefako Makgatho Health Sciences University', 'SMU', 'Gauteng', 'https://www.smu.ac.za'),
('University of Cape Town', 'UCT', 'Western Cape', 'https://www.uct.ac.za'),
('Stellenbosch University', 'SU', 'Western Cape', 'https://www.sun.ac.za'),
('University of the Western Cape', 'UWC', 'Western Cape', 'https://www.uwc.ac.za'),
('Cape Peninsula University of Technology', 'CPUT', 'Western Cape', 'https://www.cput.ac.za'),
('University of KwaZulu-Natal', 'UKZN', 'KwaZulu-Natal', 'https://www.ukzn.ac.za'),
('Durban University of Technology', 'DUT', 'KwaZulu-Natal', 'https://www.dut.ac.za'),
('Mangosuthu University of Technology', 'MUT', 'KwaZulu-Natal', 'https://www.mut.ac.za'),
('University of Zululand', 'UniZulu', 'KwaZulu-Natal', 'https://www.unizulu.ac.za'),
('Rhodes University', 'RU', 'Eastern Cape', 'https://www.ru.ac.za'),
('Nelson Mandela University', 'NMU', 'Eastern Cape', 'https://www.mandela.ac.za'),
('Walter Sisulu University', 'WSU', 'Eastern Cape', 'https://www.wsu.ac.za'),
('University of Fort Hare', 'UFH', 'Eastern Cape', 'https://www.ufh.ac.za'),
('University of the Free State', 'UFS', 'Free State', 'https://www.ufs.ac.za'),
('Central University of Technology', 'CUT', 'Free State', 'https://www.cut.ac.za'),
('University of Limpopo', 'UL', 'Limpopo', 'https://www.ul.ac.za'),
('University of Venda', 'UNIVEN', 'Limpopo', 'https://www.univen.ac.za'),
('University of Mpumalanga', 'UMP', 'Mpumalanga', 'https://www.ump.ac.za'),
('Sol Plaatje University', 'SPU', 'Northern Cape', 'https://www.spu.ac.za'),
('North-West University', 'NWU', 'North West', 'https://www.nwu.ac.za');

-- =====================
-- SEED: CAREER FIELDS
-- =====================
insert into career_fields (name, icon, description) values
('Health Sciences', '🏥', 'Careers in medicine, nursing, pharmacy, and allied health'),
('Engineering', '⚙️', 'Careers in civil, mechanical, electrical, and chemical engineering'),
('Law', '⚖️', 'Careers in legal practice, advocacy, and justice'),
('Business', '💼', 'Careers in accounting, finance, marketing, and management'),
('Education', '📚', 'Careers in teaching, training, and educational leadership'),
('Technology', '💻', 'Careers in software development, IT, and data science'),
('Science', '🔬', 'Careers in mathematics, physics, chemistry, and research'),
('Arts and Humanities', '🎨', 'Careers in psychology, social work, journalism, and arts'),
('Architecture', '🏛️', 'Careers in architecture, urban planning, and design'),
('Agriculture', '🌱', 'Careers in farming, veterinary science, and food science');
