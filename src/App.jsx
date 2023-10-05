import "antd/dist/reset.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import PagPelicula from "./components/view/PagPelicula";
import PagPrincipal from "./components/view/PagPrincipal";
import PagIngreso from "./components/view/PagIngreso";
import { ConfigProvider } from "antd";
import PagListaPeliculas from "./components/view/PagListaPeliculas";

function App() {

  return (
    <BrowserRouter>
    {/* Modifica algunos de los estilos de antd */}
    <ConfigProvider
    theme={{
      token: {
        colorError:"#D61C4E",
        colorPrimary:"#1CD6CE",
        colorText:"#ddd",
        colorTitle:"#ddd",
        colorLink:"#ddd",
        colorLinkHover:"#1cd6ce",
        colorLinkActive:"#42E3D6"
      }
    }}
    >

      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Navigate to="/popular/1" />}></Route>
        <Route exact path="/:filtro/:numero" element={<PagPrincipal />}></Route>
        <Route exact path="/buscar/:nombre/:numero" element={<PagPrincipal />}></Route>
        <Route exact path="/categoria/:nombre/:numero" element={<PagPrincipal />}></Route>
        <Route exact path="/ingresar" element={<PagIngreso />}></Route>
        <Route exact path="/registro" element={<PagIngreso />}></Route>
        <Route exact path="/:id" element={<PagPelicula />}></Route>
        <Route exact path="/milista" element={<PagListaPeliculas />}></Route>
      </Routes>
      <Footer></Footer>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
