import { createClient } from '@/utils/supabase/server';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default async function Home() {
  const supabase = await createClient();
  const { data: profiles, error } = await supabase
    .from('profiles')
    .select('id, username, full_name')
    .range(0, 9);

  if (error) {
    console.error('Error fetching profiles:', error);
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">User Profiles</h1>
      <Table>
        <TableCaption>A list of user profiles.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Full Name</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {profiles?.map((profile) => (
            <TableRow key={profile.id}>
              <TableCell className="font-medium">{profile.id}</TableCell>
              <TableCell>{profile.username}</TableCell>
              <TableCell>{profile.full_name}</TableCell>
            </TableRow>
          ))}
          {!profiles?.length && (
            <TableRow>
              <TableCell colSpan={3} className="text-center">No profiles found.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
