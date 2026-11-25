import { createClient } from '@supabase/supabase-js';

let client: ReturnType<typeof createClient> | null = null;

/** Returns a Supabase client when environment variables are present; null when
    the app runs without a configured backend (enquiries then fail gracefully). */
export function getSupabase() {
  const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
  if (!url || !key) return null;
  if (!client) client = createClient(url, key);
  return client;
}
