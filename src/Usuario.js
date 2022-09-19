import React from "react";

export default function Usuario(props){
    const [user, setUser] = React.useState(props.usuario);
    const [imagem, setImagem] = React.useState(props.image);
  
    function inserirNome(){
      const nomePrompt = prompt("Qual é o seu nome?");
      if(nomePrompt === "" || nomePrompt === null){
        return false;
      } else{
        setUser(nomePrompt);
      }}
      
    function inserirImagem(){
      const nomeImagem = prompt("Insira um novo link para imagem");
      if(nomeImagem === "" || nomeImagem === null){
        return false
      } else {
        setImagem(nomeImagem);
      }}
  
      
    return(
      <div class="sidebar-perfil">
      <img class="profile"
        src={imagem} alt={props.nome} onClick={inserirImagem}/>
      <div onClick={inserirNome}>
        <p class="profile-nome-usuario">{user}</p>
        <p class="profile-nome">{props.nome}</p>
      </div>
    </div>
    )
  }