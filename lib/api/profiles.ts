import { createClient } from '@/utils/supabase/server';
import type { Profile } from '@/types/database';

export interface GetProfilesOptions {
  limit?: number;
  offset?: number;
}

export interface GetProfilesResult {
  data: Profile[] | null;
  error: Error | null;
}

/**
 * Fetches profiles from the database with pagination support
 */
export async function getProfiles(
  options: GetProfilesOptions = {}
): Promise<GetProfilesResult> {
  const { limit = 10, offset = 0 } = options;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('profiles')
      .select('id, username, full_name')
      .range(offset, offset + limit - 1);

    if (error) {
      console.error('Error fetching profiles:', error);
      return { data: null, error: new Error(error.message) };
    }

    return { data, error: null };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Unexpected error fetching profiles:', error);
    return { data: null, error: new Error(errorMessage) };
  }
}
