-- Minimal schema so CI does real work
create table if not exists healthcheck(
  id bigserial primary key,
  note text,
  created_at timestamptz default now()
);
