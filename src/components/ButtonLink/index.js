import React from "react";
import "./../Menu/Menu.css";
function ButtonLink(props) {
  console.log(props);
  return (
    <a className="ButtonLink" href={props.route}>
      {props.children}
    </a>
  );
}
export default ButtonLink;
