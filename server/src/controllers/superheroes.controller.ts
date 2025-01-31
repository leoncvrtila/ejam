import { Request, Response } from "express";
import SuperheroService from "../services/superhero.service";

class SuperheroController {
  async getAll(req: Request, res: Response) {
    const superheroes = await SuperheroService.getAll();
    res.json(superheroes);
  }

  async create(req: Request, res: Response) {
    const superhero = await SuperheroService.create(req.body);
    res.status(201).json(superhero);
  }
}

export default new SuperheroController();
