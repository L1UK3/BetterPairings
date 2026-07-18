// Local TypeScript definitions for tournament records
export interface Tournament {
    id: string;
    name: string;
    format: string;
    status: 'setup' | 'active' | 'completed';
    description?: string;
    max_players?: number;
    created_at: string;
}
