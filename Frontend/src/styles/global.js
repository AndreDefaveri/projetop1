import { createGlobalStyle } from "styled-components";
import fundo2 from "../assets/mosaico.png"
export default createGlobalStyle`
  @import url('https://fonts.googleapi.com/css?family=Roboto:100,300,400,500&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font:14px 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased !important;
  }
  html, body, #root{
    height: 100%;
  }

 body{
   background: url(${fundo2}) right;
   background-size: 100%;
   height:auto;
  
 }

 input{
   border-style: solid;
   background: none;
   font-size: 14pt;
   border-radius: 4px;
   width: 300px;
 }
 section{
   text-align: center;
   align-items: center;
   background: rgba(109,215,255,0.9);
   border-radius:5%;
 }
 button{
  border-style: solid;
  background: none;
  font-size: 14pt;
  border-radius: 4px;
  cursor: pointer;
 }

a{
  color: purple;
  text-decoration: none;
}
`;
