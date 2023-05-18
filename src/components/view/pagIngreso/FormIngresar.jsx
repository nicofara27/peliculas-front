import React from "react";
import { Button, Form, Input, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import { login } from "../../helpers/helpers";

const FormIngresar = ({ ingresar, setIngresar }) => {
  const { Text, Title } = Typography;
  const navegacion = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const cambioRegistro = () => {
    setIngresar(!ingresar);
  };

  const onFinish = (datos) => {
    login(datos).then((respuesta) => {
      if (respuesta.status === 200) {
        localStorage.setItem("usuarioActivo", JSON.stringify(datos));

        navegacion("/");
      } else {
        messageApi.open({
          type: "error",
          content: "Ocurrio un error, no se pudo logear",
        });
      }
    });
  };

  return (
    <section className="formularioContainer">
      <Title >Ingresar</Title>
      <Form
        className="formulario"
        layout="vertical"
        name="ingresar"
        onFinish={onFinish}
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
              min: 15,
              message: "El email debe tener mas de 15 caracteres",
            },
            {
              max: 80,
              message: "El email debe tener menos de 80 caracteres",
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
        ¿No tienes una cuenta?{" "}
        <Button
          className="formulario__cambioBtn"
          type="text"
          onClick={cambioRegistro}
        >
          Regístrate
        </Button>
      </Text>
    </section>
  );
};

export default FormIngresar;
