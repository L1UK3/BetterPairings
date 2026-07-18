import { NextResponse } from "next/server";
import { createClient } from "../../lib/supabase";

export async function GET() {
    try {
        const supabase = await createClient();
        const { data: players, error } = await supabase
            .from('players')
            .select('*')
            .order('name', { ascending: true });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(players);
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
        const { name } = body;

        if (!name) {
            return NextResponse.json(
                { error: 'Name is required' },
                { status: 400 }
            );
        }

        const { data: player, error } = await supabase
            .from('players')
            .insert({ name })
            .select()
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(player, { status: 201 });
    } catch (err) {
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
