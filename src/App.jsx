import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import PagPelicula from "./pages/pagPelicula/PagPelicula";
import PagPrincipal from "./pages/pagPrincipal/PagPrincipal";
import PagIngreso from "./pages/pagIngreso/PagIngreso";
import PagListaPeliculas from "./pages/pagListaPeliculas/PagListaPeliculas";
import "./App.css";
import "antd/dist/reset.css";
import { ConfigProvider } from "antd";
import PagRegistro from "./pages/pagRegistro/PagRegistro";
import RutaProtegida from "./routes/RutaProtegida";

function App() {
  return (
    <BrowserRouter>
      {/* Modifica algunos de los estilos de antd */}
      <ConfigProvider
        theme={{
          token: {
            colorError: "#D61C4E",
            colorPrimary: "#1CD6CE",
            colorText: "#ddd",
            colorTitle: "#ddd",
            colorLink: "#ddd",
            colorLinkHover: "#1cd6ce",
            colorLinkActive: "#42E3D6",
          },
        }}
      >
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Navigate to="/popular/1" />}></Route>
          <Route
            exact
            path="/:filtro/:numero"
            element={<PagPrincipal />}
          ></Route>
          <Route
            exact
            path="/buscar/:nombre/:numero"
            element={<PagPrincipal />}
          ></Route>
          <Route
            exact
            path="/categoria/:nombre/:numero"
            element={<PagPrincipal />}
          ></Route>
          <Route exact path="/ingresar" element={<PagIngreso />}></Route>
          <Route exact path="/registro" element={<PagRegistro />}></Route>
          <Route exact path="/:id" element={<PagPelicula />}></Route>
          <Route
            exact
            path="/milista"
            element={
              <RutaProtegida>
                <PagListaPeliculas />
              </RutaProtegida>
            }
          ></Route>
          {/* <Route exact path="/milista" element={<PagListaPeliculas />}></Route> */}
        </Routes>
        <Footer></Footer>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
