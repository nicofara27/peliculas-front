import "antd/dist/reset.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import PagPelicula from "./components/view/PagPelicula";
import PagPrincipal from "./components/view/PagPrincipal";

function App() {

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<PagPrincipal />}></Route>
        <Route exact path="/pagina/:numero" element={<PagPrincipal />}></Route>
        <Route exact path="/buscar/:nombre/:numero" element={<PagPrincipal />}></Route>
        <Route exact path="/:id" element={<PagPelicula />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
