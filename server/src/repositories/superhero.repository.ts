export interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humilityScore: number;
}

let superheroes: Superhero[] = [];

class SuperheroRepository {
  async findAll(): Promise<Superhero[]> {
    return superheroes;
  }

  async create(data: Superhero): Promise<Superhero> {
    const newSuperhero = { ...data, id: Date.now() };
    superheroes.push(newSuperhero);
    return newSuperhero;
  }
}

export default new SuperheroRepository();
