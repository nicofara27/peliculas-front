import { Button, Form, Input, Typography, message } from "antd";
import { crearUsuario } from "../../helpers/helpers";
import { Link, useNavigate } from "react-router-dom";

const PagRegistro = () => {
  const { Text, Title } = Typography;
  const navegacion = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  // Mensaje que aparece cuando se crea correctamente el usuario
  const success = () => {
    messageApi.open({
      type: "success",
      content: "La cuenta se creo correctamente",
    });
  };
  // Mensaje que aparece cuando hubo un error al crear el usuario
  const fail = () => {
    messageApi.open({
      type: "error",
      content: "No se pudo crear la cuenta",
    });
  };

  // Funcion para crear usuario
  const onFinish = (datos) => {
    datos.lista = [];
    crearUsuario(datos).then((respuesta) => {
        console.log(respuesta.json())
      if (respuesta.status === 201) {
        success();
        localStorage.setItem(
          "usuarioActivo",
          JSON.stringify(datos.nombreUsuario)
        );
        navegacion("/");
      } else {
        console.log(respuesta.json().value)
        fail();
      }
    });
  };
  return (
    <main id="pagFormulario">
      <section className="formularioContainer">
        <Title>Crear Cuenta</Title>
        <Form
          className="formulario"
          layout="vertical"
          name="ingresar"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Usuario"
            name="nombreUsuario"
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
                message:
                  "El nombre de usuario debe tener menos de 16 caracteres",
              },
            ]}
          >
            <Input placeholder="juanPerez" />
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
              Registrarse
            </Button>
          </Form.Item>
        </Form>
        <Text>
          Ya tienes cuenta?{" "}
          <Link
            className="formulario__cambioBtn"
            type="text"
            to ="/ingresar"
          >
            Ingresa
          </Link>
        </Text>
      </section>
    </main>
  );
};

export default PagRegistro;
