import React from "react";
import "./Menu.css";
//import ButtonLink from "../ButtonLink";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src="img/logo.png" alt="Natflix" className="Logo" />
      </a>
      <Button as="a" href="/">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;
