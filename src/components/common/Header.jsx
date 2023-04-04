import { Drawer, Input, Menu } from "antd";
import { useState } from "react";
import { MenuOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  
  const onSearch = (value) => console.log(value);

  const NavMenu = ({ isInline = false }) => {
    return (
      <Menu
        id="header"
        mode={isInline ? "inline" : "horizontal"}
        onClick={({ key }) => {
          if(key!=="search"){
            navigate(key);
          }
        }}
        items={[
          {
            label: "Peliculas",
            key: "/",
            icon: <VideoCameraOutlined />,
          },
          {
            label: (
              <Input.Search
                size="large"
                placeholder="input search text"
                allowClear
                onSearch={onSearch}
                style={{
                  width: 200,
                }}
              />
            ),
            key:"search"
          },
          {
            label: "Ingresar / Registrarse",
            key: "/Ingreso",
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
        width={"80vw"}
        open={openMenu}
        placement="left"
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
