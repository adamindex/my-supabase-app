import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { updateProfile } from "../actions"

export default function ProfileForm({ id, username, fullName }: { id?: string, username?: string, fullName?: string }) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Edit Profile</CardTitle>
        <CardDescription>Make changes to your profile here.</CardDescription>
      </CardHeader>
      <form action={updateProfile}>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <input type="hidden" name="id" value={id || ''} />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="username">Username</Label>
              <Input id="username" name="username" placeholder="jdoe" defaultValue={username} />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" name="fullName" placeholder="John Doe" defaultValue={fullName} />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" type="button">Cancel</Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
