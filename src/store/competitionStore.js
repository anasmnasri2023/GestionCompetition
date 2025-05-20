import { create } from 'zustand';
import competitionsData from '../competitions.json';

export const useCompetitionStore = create((set) => ({
  competitions: competitionsData,
  addPlayer: (competitionId, username) =>
    set((state) => ({
      competitions: state.competitions.map((comp) =>
        comp.id.toString() === competitionId
          ? {
              ...comp,
              participants: comp.participants > 0 ? comp.participants - 1 : 0,
              players: comp.players ? [...comp.players, username] : [username],
            }
          : comp
      ),
    })),
}));