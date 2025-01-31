import { create } from "zustand";
import { Superhero } from "../interfaces/superhero-state.interface";

interface SuperheroesState {
  superheroes: Superhero[];
  loading: boolean;
  sortedSuperheroesByHumilityScore: () => Superhero[];
  setLoading: (loading: boolean) => void;
  addSuperhero: (superhero: Superhero) => void;
  addSuperheroes: (superheroes: Superhero[]) => void;
}

export const useSuperheroesStore = create<SuperheroesState>((set, get) => ({
  superheroes: [],
  loading: false,

  sortedSuperheroesByHumilityScore: () => {
    const { superheroes } = get();

    return superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  },

  addSuperhero: (superhero) => {
    const { superheroes } = get();

    const isDuplicate = superheroes.some(
      (s) => s.name.toLowerCase() === superhero.name.toLowerCase()
    );

    if (!isDuplicate) {
      set({ superheroes: [...superheroes, superhero] });
    }
  },

  addSuperheroes: (newSuperheroes) => {
    const { superheroes } = get();

    const filteredSuperheroes = newSuperheroes.filter(
      (hero) =>
        !superheroes.some(
          (s) => s.name.toLowerCase() === hero.name.toLowerCase()
        )
    );

    if (filteredSuperheroes.length) {
      set({ superheroes: [...superheroes, ...filteredSuperheroes] });
    }
  },

  setLoading: (loading) => set({ loading }),
}));
