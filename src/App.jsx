import "antd/dist/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import PagPelicula from "./components/view/PagPelicula";
import PagPrincipal from "./components/view/PagPrincipal";
import PagIngreso from "./components/view/PagIngreso";
import { ConfigProvider } from "antd";

function App() {

  return (
    <BrowserRouter>
    <ConfigProvider
    theme={{
      token: {
        colorPrimary:"#13def0",
        colorText:"#ddd",
        colorTitle:"#ddd",
      }
    }}
    >
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<PagPrincipal />}></Route>
        <Route exact path="/pagina/:numero" element={<PagPrincipal />}></Route>
        <Route exact path="/buscar/:nombre/:numero" element={<PagPrincipal />}></Route>
        <Route exact path="/ingresar" element={<PagIngreso />}></Route>
        <Route exact path="/registro" element={<PagIngreso />}></Route>
        <Route exact path="/:id" element={<PagPelicula />}></Route>
      </Routes>
      <Footer></Footer>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
