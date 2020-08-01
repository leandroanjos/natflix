import React from "react";
import { Link } from "react-router-dom"
import "./Menu.css";
import Logo from "../../assets/img/logo.png";
//import ButtonLink from "../ButtonLink";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <Link href="/">
        <img src={Logo} alt="Natflix" className="Logo" />
      </Link>
      <Button as={Link} to="/cadastro/video">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
