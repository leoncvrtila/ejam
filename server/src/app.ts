import express from "express";
import cors from "cors";
import superheroesRoutes from "./routes/superheroes.routes";

const app = express();

app.use(cors({ origin: "http://localhost:3001" }));

app.use(express.json());

app.use("/superheroes", superheroesRoutes);

export default app;
