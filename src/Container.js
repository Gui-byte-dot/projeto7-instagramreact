import React from "react";

export default function Container() {
  return (
    <div class="container">
      <div class="conteudo-principal">
        <Stories />
        <Feed />
      </div>
      <Sidebar />
    </div>

  )
}

function Stories() {
  const imagens = [
    "9gag.svg",
    "meowed.svg",
    "barked.svg",
    "nathanwpylestrangeplanet.svg",
    "wawawicomics.svg",
    "respondeai.svg",
    "filomoderna.svg",
    "memeriagourmet.svg",
  ];
  const componentsStories =
    imagens.map(image =>
      <div>
        <img class="profile" src={image} />
      </div>
    );

  return (
    <div class="stories">
      {componentsStories}
      <ion-icon name="chevron-forward-circle"></ion-icon>
    </div>


  )
}

function Feed() {
  return (
    <div class="feed">
      <div class="post">
        <div class="post-title">
          <div class="persona">
            <img class="profile profile-feed"
              src="https://i.pinimg.com/originals/e9/58/b5/e958b5b1f0811c4480e9a5c2fcfa21e3.jpg" />
            <h4>Lara</h4>
          </div>
          <div class="menu-mais">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
        <div class="post-media">
          <img src="https://gateirasdobrasil.com.br/wp-content/uploads/2017/11/gato_celular.jpg
              " alt="gato curioso na internet" />
        </div>

        <div class="post-action">
          <div class="esquerda">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div class="direita">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
        <div class="post-coments">
          <img class="profile post-coments-img"
            src="https://cn.i.cdn.ti-platform.com/content/792/hermano-de-jorel/showpage/ar/jorel.f7a80b37.png" />
          <p>Curtido por respondeai e outras 101.523 pessoas</p>
        </div>
      </div>
      <div class="post">
        <div class="post-title">
          <div class="persona">
            <img class="profile profile-feed"
              src="https://i.pinimg.com/originals/e9/58/b5/e958b5b1f0811c4480e9a5c2fcfa21e3.jpg" />
            <h4>Lara</h4>
          </div>
          <div class="menu-mais">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
        <div class="post-media">
          <img src="https://gateirasdobrasil.com.br/wp-content/uploads/2017/11/gato_celular.jpg
                " alt="gato curioso na internet" />
        </div>

        <div class="post-action">
          <div class="esquerda">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div class="direita">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
        </div>
        <div class="post-coments">
          <img class="profile post-coments-img"
            src="https://cn.i.cdn.ti-platform.com/content/792/hermano-de-jorel/showpage/ar/jorel.f7a80b37.png" />
          <p>Curtido por respondeai e outras 101.523 pessoas</p>
        </div>
      </div>
    </div>
  )
}



function Sidebar() {
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
            src={sugestion.image} />
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

function Usuario(props){
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