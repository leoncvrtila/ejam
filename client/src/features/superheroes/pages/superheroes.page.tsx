import React, { useEffect } from "react";
import { Table } from "antd";
import { Superhero } from "../interfaces/superhero-state.interface";
import SuperheroesForm from "../components/superheroes-form.component";
import { useSuperheroesService } from "../service/superheroes.service";
import { useSuperheroesStore } from "../store/superheroes.store";

const Superheroes: React.FC = () => {
  const superherosService = useSuperheroesService();
  const { loading, sortedSuperheroesByHumilityScore } = useSuperheroesStore();

  useEffect(() => {
    superherosService.getSuperheroes();
  }, []);

  const addSuperhero = async (values: Superhero) => {
    try {
      await superherosService.createSuperhero(values);
    } catch (error) {
      console.error(error);
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Superpower", dataIndex: "superpower", key: "superpower" },
    {
      title: "Humility Score",
      dataIndex: "humilityScore",
      key: "humilityScore",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Superhero List</h1>

      <SuperheroesForm loading={loading} addSuperhero={addSuperhero} />

      <Table
        dataSource={sortedSuperheroesByHumilityScore()}
        columns={columns}
        rowKey="id"
        loading={loading}
      />
    </div>
  );
};

export default Superheroes;
