# BetterPairings TODO

## Development Tasks

- [ ] **Next.js Project Foundation**
  - [ ] Initialize Next.js project structure
  - [ ] Set up layout structure and core CSS styles (Vanilla CSS / responsive viewports)
- [ ] **Matchmaking Engine (Edmonds-Blossom)**
  - [ ] Design graph modeling for tournament pairings (players as nodes, matchups as edges)
  - [ ] Implement edge weight calculations (reward pairing similar scores, penalize repeat opponents)
  - [ ] Implement odd-player-count bye logic (assigning bye to lowest rank/score, preventing multiple byes for same player)
  - [ ] Integrate/Implement Edmonds-Blossom maximum weight perfect matching solver
- [ ] **Tournament Calculations & Standings**
  - [ ] Implement match points tracker (Win = 3 pts, Draw = 1 pt, Loss = 0 pts)
  - [ ] Implement Opponent's Match-Win Percentage (OMW%) calculation with 33.33% floor
  - [ ] Implement Opponent's Opponent's Match-Win Percentage (OOMW%) calculation
  - [ ] Implement Opponent's Game-Win Percentage (OGW%) calculation
  - [ ] Implement Player's Game-Win Percentage (PGW%) calculation
- [ ] **Player Experience (Mobile-First)**
  - [ ] Mobile-responsive layout for active round pairing details & table numbers
  - [ ] Mobile-responsive player standings board
  - [ ] Mobile-responsive score submission form (wins, losses, draws)
- [ ] **Organiser Dashboard (Tablet-First/Desktop compatible)**
  - [ ] Tablet-responsive high-density main console
  - [ ] Player registration, status management (active, dropped), and manual seeding controls
  - [ ] Round controls (pair round, lock round, repair, roll back round)
  - [ ] Manual pairing override interface and referee score entry (for fixing errors/penalties)
- [ ] **Legal & Compliance Safeguards**
  - [ ] Maintain generic vocabulary in UI (e.g., "Trading Card Game", "Player", "Table" instead of trademarked property terms)
  - [ ] Render clear warnings in organizer & player layouts noting that the software is for casual, unsanctioned use only
