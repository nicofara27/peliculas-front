import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";

const FormRegistrar = ({ ingresar, setIngresar }) => {
  const { Text, Title } = Typography;

  const cambioIngreso = () => {
    setIngresar(!ingresar);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="formularioContainer">
      <Title>Crear Cuenta</Title>
      <Form
        className="formulario"
        layout="vertical"
        name="ingresar"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Usuario"
          name="usuario"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu nombre de usuario!",
            },
            {
              min: 6,
              message: "El nombre de usuario debe tener mas de 6 caracteres",
            },
            {
              max: 16,
              message: "El nombre de usuario debe tener menos de 16 caracteres",
            },
          ]}
        >
          <Input placeholder="juan.perez@gmail.com" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu email!",
            },
            {
              min: 15,
              message: "La contraseña debe tener mas de 15 caracteres",
            },
            {
              max: 80,
              message: "La contraseña debe tener menos de 80 caracteres",
            },
          ]}
        >
          <Input placeholder="juan.perez@gmail.com" />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="contrasenia"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu contraseña!",
            },
            {
              min: 8,
              message: "La contraseña debe tener mas de 8 caracteres",
            },
            {
              max: 24,
              message: "La contraseña debe tener menos de 24 caracteres",
            },
          ]}
        >
          <Input.Password placeholder="********" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 32,
          }}
        >
          <Button type="primary" htmlType="submit">
            Ingresar
          </Button>
        </Form.Item>
      </Form>
      <Text>
        Ya tienes cuenta?{" "}
        <Button
          className="formulario__cambioBtn"
          type="text"
          onClick={cambioIngreso}
        >
          Ingresa
        </Button>
      </Text>
    </section>
  );
};

export default FormRegistrar;
