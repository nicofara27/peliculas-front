import { Button, Form, Input, Typography, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../helpers/helpers";

const PagIngreso = () => {
  const { Text, Title } = Typography;
  const navegacion = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (datos) => {
    login(datos).then((respuesta) => {
      if (respuesta.status === 200) {
        localStorage.setItem("usuarioActivo", JSON.stringify(respuesta.nombre));
        navegacion("/");
      } else {
        messageApi.open({
          type: "error",
          content: "El usuario o la contraseña son incorrectos",
        });
      }
    });
  };

  return (
    <main id="pagFormulario">
      {contextHolder}
      <section className="formularioContainer">
        <Title>Ingresar</Title>
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
          <Link className="formulario__cambioBtn" type="text" to={"/registro"}>
            Regístrate
          </Link>
        </Text>
      </section>
    </main>
  );
};

export default PagIngreso;
