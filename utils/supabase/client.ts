import { createBrowserClient } from '@supabase/ssr';
import { config } from '@/lib/config';
import type { Database } from '@/types/database';

/**
 * Creates a Supabase client for use in Client Components
 */
export function createClient() {
  return createBrowserClient<Database>(
    config.supabase.url,
    config.supabase.anonKey
  );
}
