import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastrar";
import Recuperar from "./pages/RecuperarAcesso";
import Home from "./pages/Home";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("Usuario/token") ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/Cadastrar" component={Cadastro} />
      <Route path="/Recuperar" component={Recuperar} />
      <PrivateRoute path="/Home" component={Home}/>
    </BrowserRouter>
  );
}
