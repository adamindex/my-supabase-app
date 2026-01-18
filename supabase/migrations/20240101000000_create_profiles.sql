create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  username text,
  full_name text
);
