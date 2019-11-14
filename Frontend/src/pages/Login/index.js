import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Container } from "./styles";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = new useState("")
  const [senha, setSenha] = new useState("")
  async function handleSubmit(event) {
    event.preventDefault()
    try {
      const user = {
        email,
        senha
      }
      const response = await api.post("/session", user);
      const token = response.data.token;
      if (token) {
        localStorage.getItem("Usuario/token", token)
      }
      history.push("/Home")
    } catch (erro) {
      console.log("Erro na autenticação", erro);
      alert("Erro na autenticação");
    }
  }
  return (
    <Container>
      <section>
      <form onSubmit={handleSubmit}>
          <input placeholder= "Email" type = "Email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
          <input placeholder= "Senha" type = "Password" value={senha} onChange={(event) => setSenha(event.target.value)} required/><br/>
          <button className = "botoes" type = "submit">Entrar </button>
      </form>
      <br/>
      <Link to="./Cadastrar">
      <p>Cadastrar</p>
      </Link>
      <Link to="./Recuperar">
      <p>Recuperar Senha</p>
      </Link>
      
      </section>
  
    </Container>
  );
}
