import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";

const FormIngresar = ({ingresar, setIngresar}) => {
  const { Text, Title } = Typography;

  const cambioRegistro = () => {
    setIngresar(!ingresar);
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className="formularioContainer">
      <Title>Ingresar</Title>
      <Form
      className="formulario"
        layout="vertical"
        name="ingresar"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Por favor ingresa tu email!",
            },
            {
              min: 12,
              message: "La contraseña debe tener mas de 12 caracteres",
            },
            {
              max: 60,
              message: "La contraseña debe tener menos de 60 caracteres",
            }
          ]}
        >
          <Input placeholder="juan.perez@gmail.com"/>
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
            }
          ]}
        >
          <Input.Password placeholder="********"/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span:32 ,
          }}
        >
          <Button type="primary" htmlType="submit">
            Ingresar
          </Button>
        </Form.Item>
      </Form>
      <Text>
        ¿No tienes una cuenta? <Button className="formulario__cambioBtn" type="text" onClick={cambioRegistro}>Regístrate</Button>
      </Text>
    </section>
  );
};

export default FormIngresar;
