import axios from "axios";
import { Superhero } from "../interfaces/superhero-state.interface";
import { message } from "antd";
import { useSuperheroesStore } from "../store/superheroes.store";
import { apiUrl } from "../../../config";

export function useSuperheroesService() {
  const { addSuperhero, addSuperheroes, setLoading } = useSuperheroesStore();

  async function getSuperheroes() {
    try {
      setLoading(true);
      const response = await axios.get<Superhero[]>(`${apiUrl}/superheroes`);

      addSuperheroes(response.data);
    } catch (error) {
      console.error(error);
      message.error("Failed to fetch superheroes");
    } finally {
      setLoading(false);
    }
  }

  async function createSuperhero(values: Superhero) {
    try {
      setLoading(true);
      const response = await axios.post(`${apiUrl}/superheroes`, values);
      addSuperhero(response.data);
      message.success("Superhero added successfully!");
    } catch (error) {
      console.error(error);
      message.error("Failed to add superhero");
    } finally {
      setLoading(false);
    }
  }

  return {
    getSuperheroes,
    createSuperhero,
  };
}
