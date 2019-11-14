import React from "react";

import { Container } from "./styles";
import {Link} from "react-router-dom";
export default function Recuperar() {
  return (
    <Container>
        <section>
            <h6>Digite o email cadastrado nesta conta. Logo após a verificação da validade do mesmo, le enviaremos sua nova senha!</h6>
            <input placeholder= "Email" type = "Email"/>
            <button className = "botoes">Enviar</button><br/>
            <Link to= "/"> 
          <label className= "Logar" htmlFor= "login">  Deseja Logar? </label>
          </Link>
        </section>
    </Container>
  );
}