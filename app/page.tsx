import { getProfiles } from '@/lib/api/profiles';
import { ProfilesTable } from '@/components/profiles/profiles-table';
import { ErrorMessage } from '@/components/ui/error-message';

export default async function Home() {
  const { data: profiles, error } = await getProfiles({ limit: 10 });

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">User Profiles</h1>
      {error ? (
        <ErrorMessage 
          title="Failed to load profiles" 
          message={error.message} 
        />
      ) : (
        <ProfilesTable profiles={profiles ?? []} />
      )}
    </div>
  );
}
