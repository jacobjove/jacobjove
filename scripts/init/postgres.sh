#!/bin/sh
set -e

# -- Executed on DB init; creates read-only user for replica's purposes.
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE EXTENSION IF NOT EXISTS pg_trgm;
  CREATE EXTENSION IF NOT EXISTS btree_gin;
  CREATE EXTENSION IF NOT EXISTS ltree;
  CREATE USER read_only WITH PASSWORD 'read_only';
  GRANT CONNECT ON DATABASE $POSTGRES_DB TO read_only;
  GRANT USAGE ON SCHEMA public TO read_only;
  GRANT SELECT ON ALL TABLES IN SCHEMA public TO read_only;
  ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO read_only;
EOSQL
