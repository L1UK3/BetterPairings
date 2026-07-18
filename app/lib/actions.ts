'use server';

import { createClient } from '@/app/lib/supabase';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function createTournament(formData: FormData) {
  const name = formData.get('name') as string;
  const format = formData.get('format') as string;
  const description = formData.get('description') as string;
  const maxPlayersVal = formData.get('maxPlayers') as string;

  if (!name) {
    return { error: 'Tournament name is required' };
  }

  const supabase = await createClient();
  const maxPlayers = maxPlayersVal ? parseInt(maxPlayersVal, 10) : null;

  const { data, error } = await supabase
    .from('tournaments')
    .insert({
      name,
      format: format || 'swiss',
      description: description || null,
      max_players: maxPlayers,
      status: 'setup',
    })
    .select()
    .single();

  if (error) {
    return { error: error.message };
  }

  revalidatePath('/tournaments');
  redirect('/tournaments');
}
