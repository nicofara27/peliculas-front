import { Button, Drawer, Input, Menu, Popconfirm } from "antd";
import { useEffect, useState } from "react";
import { MenuOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  let [usuarioConectado, setUsuarioConectado] = useState(false);
  let usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo")) || [];
  const [abrirDrawer, setAbrirDrawer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (usuarioActivo.length !== 0) {
      setUsuarioConectado(true);
      console.log(usuarioConectado);
    }
  }, [usuarioActivo]);
  useEffect(() => {
    console.log(usuarioActivo);
    console.log(usuarioConectado);
  }, []);

  const NavBar = () => {
    return (
      <nav>
        <NavLink onClick={cerrarDrawer} to="">
          Mi lista
        </NavLink>
        <NavLink onClick={cerrarDrawer} to="">
          Github
        </NavLink>
        {usuarioConectado ? (
          <Popconfirm
            title="Cerrar sesion"
            description="¿Estas seguro que deseas cerrar sesion?"
            onConfirm={cerrarSesion}
            okText="Yes"
            cancelText="No"
          >
            <Button id="btnCerrarSesion" danger type="primary">
              Cerrar sesion
            </Button>
          </Popconfirm>
        ) : (
          <NavLink onClick={cerrarDrawer} to="/ingresar">
            Ingresar
          </NavLink>
        )}
      </nav>
    );
  };

  const mostrarDrawer = () => {
    setAbrirDrawer(true);
  };
  const cerrarDrawer = () => {
    setAbrirDrawer(false);
  };

  const cerrarSesion = () => {
    setUsuarioConectado(false);
    localStorage.removeItem("usuarioActivo");
    localStorage.removeItem("usuarioNoAdmin");
    console.log(usuarioConectado);
    // navigate("/");
  };

  return (
    <header id="header">
      <NavLink id="logo" to="/">
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
