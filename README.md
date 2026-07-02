# BetterPairings

A Next.js implementation of a Swiss tournament pairings application for Trading Card Games (TCGs), utilizing the Edmonds-Blossom algorithm for optimal matchmaking.

## Target Audience & Design Philosophy

- **Players (Mobile-First):** The player experience is optimized for mobile screens. Players can quickly view current pairings, check their table assignments, view live standings, and submit match results (e.g., wins, losses, draws) directly from their phones.
- **Tournament Organisers (Tablet-First):** The organiser dashboard is optimized for tablet/desktop screens, providing a high-density, multi-column interface. Organisers can register/drop players, control rounds, execute pairings, and perform manual overrides.

## Technical Specifications

### Edmonds-Blossom Matchmaking
To avoid the deadlocks ("jams") common in greedy, top-down matchmaking heuristics:
- The player field is modeled as a graph where players are vertices and valid potential matches are edges.
- Matchups are assigned dynamic weights (e.g., high positive weights for players with identical scores, negative weights/forbidden edges for previous opponents).
- The Edmonds-Blossom algorithm is used to solve the Maximum Weight Perfect Matching (MWPM) problem.

### Swiss Standings & Tiebreakers
Standings are calculated using standard TCG tiebreaker hierarchies:
1. **Match Points:** 3 points for a win, 1 point for a draw, 0 for a loss.
2. **Opponent's Match-Win Percentage (OMW%):** Average match-win percentage of all faced opponents.
3. **Opponent's Opponent's Match-Win Percentage (OOMW%):** Average OMW% of the player's opponents.

## Important Disclaimers & Usage Restrictions

> [!WARNING]
> **Copyrighted Property Restrictions**
> References to copyrighted properties, trademarks, logos, or official card game assets cannot be used or incorporated into this software.

> [!IMPORTANT]
> **Tournament Sanctioning**
> This application is strictly for casual, unofficial use. It **cannot** be used to run or report sanctioned/official tournament matches.
