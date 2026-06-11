-- Run this in your Supabase SQL Editor
-- Adds the tables needed by the new Applications and AI agent features

-- =====================
-- APPLICATIONS (new structure using user_id directly)
-- =====================
create table if not exists applications (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  course_id uuid references courses(id) on delete cascade,
  university_name text not null,
  status text not null default 'draft',
  application_fee integer default 150,
  fee_waiver boolean default false,
  proof_of_payment_path text,
  submitted_at timestamp,
  notes text,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

alter table applications enable row level security;

create policy "Users can view own applications"
  on applications for select using (auth.uid() = user_id);

create policy "Users can insert own applications"
  on applications for insert with check (auth.uid() = user_id);

create policy "Users can update own applications"
  on applications for update using (auth.uid() = user_id);

create policy "Users can delete own applications"
  on applications for delete using (auth.uid() = user_id);

-- =====================
-- AGENT USAGE (rate limiting — 20 messages per student per day)
-- =====================
create table if not exists agent_usage (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users(id) on delete cascade not null,
  date date not null default current_date,
  message_count integer default 1,
  last_message_at timestamp default now(),
  unique(user_id, date)
);

alter table agent_usage enable row level security;

create policy "Users can view own usage"
  on agent_usage for select using (auth.uid() = user_id);

create policy "Users can insert own usage"
  on agent_usage for insert with check (auth.uid() = user_id);

create policy "Users can update own usage"
  on agent_usage for update using (auth.uid() = user_id);

-- Allow service role to manage agent_usage for rate limiting
-- (used by the API route with SUPABASE_SERVICE_ROLE_KEY)
create policy "Service role full access to agent_usage"
  on agent_usage for all using (true);
