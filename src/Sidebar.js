import React from "react";
import Usuario from "./Usuario";

export default function Sidebar() {
    const sugestoes = [
      {image: "bad.vibes.memes.svg", usuario: "bad.vibes.memes", nome: "Segue você"},
      {image: "chibirdart.svg", usuario: "chibirdart", nome: "Segue você"},
      {image: "razoesparaacreditar.svg", usuario: "razoesparaacreditar", nome: "Novo no Instagram"},
      {image: "adorable_animals.svg", usuario: "adorable_animals", nome: "Segue você"},
    ]
    const componentsSidebar =
      sugestoes.map(sugestion =>
        <div class="perfil-sugestao-item">
          <div class="perfil-sugestao">
            <img class="profile"
              src={sugestion.image} alt="sugestion"/>
            <div>
              <p class="profile-nome-usuario">{sugestion.usuario}</p>
              <p class="profile-nome">{sugestion.nome}</p>
            </div>
          </div>
          <p>Seguir</p>
        </div>
  
      );
    return (
      <div class="sidebar">
        <Usuario image="catanacomics.svg"
        usuario="catanacomics" nome="Catana"
        />
        <div class="sidebar-conteudo">
          <div class="sugestoes">
            <p class="paragrafo-1-sugestao">Sugestões para você</p>
            <p class="paragrafo-2-sugestao">Ver tudo</p>
          </div>
          <div class="perfis-sugestoes">
            {componentsSidebar}
          </div>
        </div>
      </div>
    )
  }
  