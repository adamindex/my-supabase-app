import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import type { Profile } from '@/types/database';

interface ProfilesTableProps {
  profiles: Profile[];
  caption?: string;
}

export function ProfilesTable({ profiles, caption = 'A list of user profiles.' }: ProfilesTableProps) {
  const hasProfiles = profiles.length > 0;

  return (
    <Table>
      <TableCaption>{caption}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Full Name</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {hasProfiles ? (
          profiles.map((profile) => (
            <TableRow key={profile.id}>
              <TableCell className="font-medium">{profile.id}</TableCell>
              <TableCell>{profile.username ?? 'N/A'}</TableCell>
              <TableCell>{profile.full_name ?? 'N/A'}</TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={3} className="text-center text-muted-foreground">
              No profiles found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
