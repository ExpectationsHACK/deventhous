-- Leads captured by the /contact brief form.
-- Run in the Supabase SQL editor. Inserts happen server-side with the service role key,
-- so RLS stays on with no public policies: the anon key cannot read or write leads.

create table if not exists public.leads (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  name        text not null,
  email       text not null,
  whatsapp    text,
  company     text,
  package     text,
  budget      text,
  timeline    text,
  message     text not null,
  ip          text,
  status      text not null default 'new'
);

alter table public.leads enable row level security;

create index if not exists leads_created_at_idx on public.leads (created_at desc);
