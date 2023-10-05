import { ConfigProvider } from "antd";
import Title from "antd/es/typography/Title";
import Tabla from "./components/Tabla";

const PagListaPeliculas = () => {
  let usuario = JSON.parse(localStorage.getItem("usuarioActivo")) || [];

  return (
    <main id="pagListaPeliculas">
      <ConfigProvider
        theme={{
          token: {
            colorText: "#ddd",
            colorTitle: "#ddd",
            colorBgBase: "#222",
            colorBorderSecondary: "#ddd",
          },
        }}
      >
        <Title>Mi lista</Title>
        <Tabla usuario={usuario}></Tabla>
      </ConfigProvider>
    </main>
  );
};

export default PagListaPeliculas;
