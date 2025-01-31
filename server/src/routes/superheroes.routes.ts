import express from "express";
import SuperheroController from "../controllers/superheroes.controller";
import { validateSuperhero } from "../middlewares/create-superhero.validator";

const router = express.Router();

router.get("/", SuperheroController.getAll);
router.post("/", validateSuperhero, SuperheroController.create);

export default router;
