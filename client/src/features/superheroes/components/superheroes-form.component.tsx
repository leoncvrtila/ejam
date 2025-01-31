import React from "react";
import { Input, Button, Form, InputNumber } from "antd";
import { Superhero } from "../interfaces/superhero-state.interface";

interface SuperheroesFormProps {
  loading: boolean;
  addSuperhero: (values: Superhero) => void;
}

const SuperheroesForm: React.FC<SuperheroesFormProps> = (props) => {
  const [form] = Form.useForm();

  const submit = (values: Superhero) => {
    props.addSuperhero(values);
    form.resetFields();
  };

  return (
    <Form
      form={form}
      onFinish={submit}
      layout="inline"
      style={{ marginBottom: 20 }}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please enter name" }]}
      >
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="superpower"
        rules={[{ required: true, message: "Please enter superpower" }]}
      >
        <Input placeholder="Superpower" />
      </Form.Item>
      <Form.Item
        name="humilityScore"
        rules={[{ required: true, message: "Enter a humility score" }]}
      >
        <InputNumber min={1} max={10} placeholder="Humility Score" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={props.loading}>
          Add Superhero
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SuperheroesForm;
