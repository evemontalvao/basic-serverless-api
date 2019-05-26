CREATE TABLE IF NOT EXISTS users (
  id serial PRIMARY KEY,
  name text,
  username text,
  followers text[],
  following text[]
);
