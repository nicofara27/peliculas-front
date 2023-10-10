import { Button, Drawer, Popconfirm } from "antd";
import { useContext, useEffect, useState } from "react";
import { MenuOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { FiltrosContext } from "../../context/filtrosContext";

const Header = () => {
  let [usuarioConectado, setUsuarioConectado] = useState(false);
  let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo")) || [];
  const [abrirDrawer, setAbrirDrawer] = useState(false);

  const { setFiltro, setPagina, setCategoria, setBuscar } =
    useContext(FiltrosContext);
  const navigate = useNavigate();

  // Si hay un usuario en el ls cambia el state usuarioConectado a true
  useEffect(() => {
    if (usuarioActivo.length !== 0) {
      setUsuarioConectado(true);
    }
  }, [usuarioActivo]);

  const irAInicio = () => {
    setCategoria("");
    setBuscar("");
    setFiltro("popular");
    setPagina(1);
  };

  // Funciones para abrir y cerrar el drawer que contiene el navbar en responsive
  const mostrarDrawer = () => {
    setAbrirDrawer(true);
  };
  const cerrarDrawer = () => {
    setAbrirDrawer(false);
  };

  // Funcion para cerrar sesion de usuario
  const cerrarSesion = () => {
    setUsuarioConectado(false);
    localStorage.removeItem("usuarioActivo");
    navigate("/");
    cerrarDrawer();
  };

  const NavBar = () => {
    return (
      <nav>
        <NavLink onClick={cerrarDrawer} to="/milista">
          Mi lista
        </NavLink>
        {usuarioConectado ? (
          <Popconfirm
            title="Cerrar sesion"
            description="¿Estas seguro que deseas cerrar sesion?"
            onConfirm={cerrarSesion}
            okText="Si"
            cancelText="No"
          >
            <Button type="primary" danger id="btnCerrarSesion">
              Cerrar sesion
            </Button>
          </Popconfirm>
        ) : (
          <NavLink id="btnIngresar" onClick={cerrarDrawer} to="/ingresar">
            Ingresar
          </NavLink>
        )}
      </nav>
    );
  };

  return (
    <header id="header">
      <NavLink id="logo" to="/" onClick={irAInicio}>
        <VideoCameraOutlined />
        InfoPelis
      </NavLink>
      <div id="navBarPc">
        <NavBar></NavBar>
      </div>
      <Button onClick={mostrarDrawer} id="btnHamburguesa">
        <MenuOutlined />
      </Button>
      <Drawer
        placement="right"
        width={250}
        open={abrirDrawer}
        closable={false}
        onClose={cerrarDrawer}
      >
        <NavBar></NavBar>
      </Drawer>
    </header>
  );
};

export default Header;
