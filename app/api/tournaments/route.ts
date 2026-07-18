import { NextResponse } from 'next/server';
import { createClient } from '../../lib/supabase';

export async function GET() {
    try {
        const supabase = await createClient();
        const { data: tournaments, error } = await supabase
            .from('tournaments')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(tournaments);
    } catch (err) {
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const supabase = await createClient();
        const body = await request.json();
        const { name, format, status } = body;

        if (!name) {
            return NextResponse.json(
                { error: 'Name is required' },
                { status: 400 }
            );
        }

        const { data: tournament, error } = await supabase
            .from('tournaments')
            .insert({
                name,
                format: format || 'swiss',
                status: status || 'setup',
            })
            .select()
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(tournament, { status: 201 });
    } catch (err) {
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
