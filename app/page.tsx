import { createClient } from '@/utils/supabase/server'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default async function Home() {
  const { data: profiles } = await (await createClient()).from('profiles').select('*')

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
          {profiles?.length ? profiles.map(({ id, username, full_name }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{id}</TableCell>
              <TableCell>{username}</TableCell>
              <TableCell>{full_name}</TableCell>
            </TableRow>
          )) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">No profiles found.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
