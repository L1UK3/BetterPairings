import { NextResponse } from 'next/server';
import { createClient } from '../../lib/supabase';

export async function GET(request: Request) {
    try {
        const supabase = await createClient();
        const { searchParams } = new URL(request.url);

        const tournamentId = searchParams.get('tournamentId');
        const roundStr = searchParams.get('round');

        if (!tournamentId) {
            return NextResponse.json(
                { error: 'tournamentId is required' },
                { status: 400 }
            );
        }

        let query = supabase
            .from('matches')
            .select(
                `
        id,
        round,
        table_number,
        player_1:players!player1_id(id, name),
        player_2:players!player2_id(id, name),
        player_1_score,
        player_2_score,
        status
      `
            )
            .eq('tournament_id', tournamentId);

        if (roundStr) {
            const round = parseInt(roundStr, 10);
            if (!isNaN(round)) {
                query = query.eq('round', round);
            }
        }

        const { data: matches, error } = await query.order('table_number', {
            ascending: true,
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(matches);
    } catch (err) {
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
