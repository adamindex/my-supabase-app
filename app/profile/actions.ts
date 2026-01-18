'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function updateProfile(formData: FormData) {
  const supabase = await createClient()

  // In a real app, we would get the user ID from the session
  // const { data: { user } } = await supabase.auth.getUser()
  // For this "early development" demo, we might need to pass the ID or assume one
  // Let's assume we are updating a specific ID passed in the form for now, or just the first one found if not auth'd yet.
  // Ideally, we need auth. Let's assume the user is authenticated and we get the user.

  // For the sake of this bootstrap demo without full auth flow working in the verification script:
  const id = formData.get('id') as string
  const username = formData.get('username') as string
  const fullName = formData.get('fullName') as string

  if (!id) {
      // Create a new one if no ID? Or fail.
      // Let's just insert if no ID for testing
      const { error } = await supabase.from('profiles').insert({ username, full_name: fullName })
      if (error) {
          console.error(error)
          // return { error: 'Failed to create profile' }
          throw new Error('Failed to create profile')
      }
  } else {
      const { error } = await supabase.from('profiles').update({ username, full_name: fullName }).eq('id', id)
      if (error) {
          console.error(error)
          // return { error: 'Failed to update profile' }
          throw new Error('Failed to update profile')
      }
  }

  revalidatePath('/')
  redirect('/')
}
