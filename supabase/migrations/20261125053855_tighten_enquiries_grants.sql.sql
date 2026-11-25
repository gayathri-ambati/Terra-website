/*
# Tighten grants on enquiries

1. Modified Tables
- `enquiries`: revoke SELECT, UPDATE and DELETE from `anon` and `authenticated`
  (defaults were broader than needed). Only the column-scoped INSERT grant from
  the previous migration remains, plus full access for `service_role` so a
  future admin panel can read and triage enquiries server-side.

2. Security
- No policy changes: RLS still has no SELECT/UPDATE/DELETE policies, so public
  roles could never read rows; this removes the unused privilege surface.
*/

REVOKE SELECT, UPDATE, DELETE ON enquiries FROM anon, authenticated;

GRANT SELECT, UPDATE, DELETE ON enquiries TO service_role;
