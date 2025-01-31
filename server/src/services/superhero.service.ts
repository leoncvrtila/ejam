import SuperheroRepository, {
  Superhero,
} from "../repositories/superhero.repository";

class SuperheroService {
  async getAll() {
    return await SuperheroRepository.findAll();
  }

  async create(data: Superhero) {
    return await SuperheroRepository.create(data);
  }
}

export default new SuperheroService();
