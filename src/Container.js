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
function Feed(props) {
  const [isActivePost, setIsActivePost] = React.useState(null);
  const [isActiveLike, setIsActiveLike] = React.useState(null);
  const [contadorpost, setContadorPost] = React.useState(101369);
  



  let handlePost = (index) => {
    if(isActivePost === index){
      setIsActivePost(null)
    } else {
      setIsActivePost(index)

    }
  }
  let handleLike = (indice) => {
    if(isActiveLike === indice){
      setIsActiveLike(null);
      setContadorPost(contadorpost - 1);

    } else {
      setIsActiveLike(indice);
      setContadorPost(contadorpost + 1);

    }
  }
  
  // const toggle = (index) => {
  //   setIsActive((prev) => {
  //     return prev === index ? null : index
  //   });
  // }
  // className={isActive === index ? 'ioncolor' : ''} onClick={() => toggle(index)} >

  // function handleClick (){
  //   isActive === '' ? setIsActive('ioncolor') : setIsActive('');
  // }
  // const handleClick = index => {
  //   setIsActive(index); 
  // };
  // const handleClick = (i) => {
  //   if (isActive.indexOf(i) === -1) {
  //     setIsActive([...isActive, i]);
  //   }
  // };


const posts = [
    {id:1, imagepost: "gato-telefone.svg", imagefeed:"meowed.svg",imagecoment:"respondeai.svg",quantidade: 101523},
    {id:2, imagepost: "dog.svg", imagefeed:"barked.svg",imagecoment:"adorable_animals.svg", quantidade: 99159}
  ]
  const componentFeed =
  posts.map(
    (post,i) => 
    <div class="post" >
        <div class="post-title">
          <div class="persona">
            <img class="profile profile-feed"
              src={post.imagefeed} />
            <h4>Lara</h4>
          </div>
          <div class="menu-mais">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>
        <div class="post-media">
          <img src={post.imagepost} alt="gato curioso na internet" />
        </div>

        <div class="post-action">
          <div class="esquerda">
            <ion-icon name="heart-outline"></ion-icon>
            <div key={i} className={isActiveLike === i ? 'ioncolorlike': ''} onClick={() => handleLike(i)}>
              <ion-icon name="chatbubble-outline"></ion-icon>
            </div>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div class="direita" key={i} className={isActivePost === i ? 'ioncolorpost': ''} onClick={() => handlePost(i)} >
            <ion-icon name="bookmark-outline" ></ion-icon>          
          </div>
        </div>
        <div class="post-coments">
          <img class="profile post-coments-img"
            src={post.imagecoment} />
          <p>Curtido por respondeai e outras {contadorpost} pessoas</p>
        </div>
      </div>
  )
  return (

    <div class="feed">
      {componentFeed}
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