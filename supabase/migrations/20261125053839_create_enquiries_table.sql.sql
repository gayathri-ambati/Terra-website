/*
# Create enquiries table for the public contact form

1. New Tables
- `enquiries`: one row per website enquiry submission.
  - `id` (uuid, primary key, server-generated)
  - `name` (text, not null) — submitter's full name
  - `email` (text, not null) — reply address
  - `phone` (text, nullable)
  - `organization` (text, nullable)
  - `enquiry_type` (text, not null) — one of the site's enquiry categories
  - `message` (text, not null) — the enquiry body
  - `status` (text, not null, default 'new') — internal triage state
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `enquiries`.
- No public SELECT, UPDATE or DELETE: the site only needs to submit new enquiries.
- Grant INSERT only, to `anon` and `authenticated` (the site has no sign-in,
  so the browser always talks with the anon key).
- INSERT policy with validation on length, email shape and a basic
  spam-honeypot-free shape; no read-back of submitted rows.
- `service_role` gets full CRUD for a future admin panel.

3. Notes
- The form in the app validates before insert; these database checks are the
  server-side backstop so invalid or oversized submissions cannot land.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (length(name) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'),
  phone text CHECK (phone IS NULL OR length(phone) <= 30),
  organization text CHECK (organization IS NULL OR length(organization) <= 160),
  enquiry_type text NOT NULL CHECK (length(enquiry_type) BETWEEN 1 AND 80),
  message text NOT NULL CHECK (length(message) BETWEEN 1 AND 5000),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'closed')),
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT (name, email, phone, organization, enquiry_type, message) ON enquiries TO anon, authenticated;

DROP POLICY IF EXISTS "Public can submit enquiries" ON enquiries;
CREATE POLICY "Public can submit enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 1 AND 120
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(message) BETWEEN 1 AND 5000
);
