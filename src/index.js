import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import "./index.css";
import Home from "./pages/Home";
import CadastroVideo from "./pages/CadastroVideo";
import CadastroCategoria from "./pages/CadastroCategoria";

const Pagina404 = () => {
  return (
    <div>Pagina não encontrada.</div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro/video" exact component={CadastroVideo} />
      <Route path="/cadastro/categoria" exact component={CadastroCategoria} />
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
