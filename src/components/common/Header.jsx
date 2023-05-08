import { Drawer, Input, Menu } from "antd";
import { useState } from "react";
import { MenuOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  const NavMenu = ({ isInline = false }) => {
    return (
      <Menu
        id="header"
        mode={isInline ? "inline" : "horizontal"}
        onClick={({ key }) => {
          navigate(key);
        }}
        items={[
          {
            label: "Peliculas",
            key: "/",
            icon: <VideoCameraOutlined />,
          },
          {
            label: "Ingresar",
            key: "/ingresar",
          },
          {
            label: "Github",
            key: "",
          },
        ]}
      ></Menu>
    );
  };
  
  return (
    <header>
      <div id="header__hamburger">
        <MenuOutlined
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <div id="header__menu">
        <NavMenu></NavMenu>
      </div>
      <Drawer
        width={"50vw"}
        open={openMenu}
        placement="right"
        onClose={() => {
          setOpenMenu(false);
        }}
        closable={false}
        bodyStyle={{ backgroundColor: "#222222ff" }}
        id="header__drawer"
        >
        <NavMenu isInline></NavMenu>
      </Drawer>
    </header>
  );
};

export default Header;
