import React from "react";
export default function Feed(props) {
    const [isActiveFirstPost, setIsActiveFirstPost] = React.useState(false);
    const [isActiveSecondPost, setIsActiveSecondPost] = React.useState(false);
  
  
    const [isActiveFirstLike, setIsActiveFirstLike] = React.useState(false);
    const [isActiveSecondLike, setIsActiveSecondLike] = React.useState(false);
  
    const [contadorfirstlike, setContadorFirstLike] = React.useState(101369);
    const [contadorsecondlike, setContadorSecondLike] = React.useState(99169);
  
    
  
    function handlefirstPost(){
      setIsActiveFirstPost(!isActiveFirstPost);
    }
    function handlefirstLike(){
      setIsActiveFirstLike(!isActiveFirstLike);
      if(isActiveFirstLike){
        setContadorFirstLike(contadorfirstlike - 1);
      } else {
        setContadorFirstLike(contadorfirstlike + 1);
  
      }
  
    }
    function handlesecondPost(){
      setIsActiveSecondPost(!isActiveSecondPost)
    }
    function handlesecondLike(){
      setIsActiveSecondLike(!isActiveSecondLike);
      if(isActiveSecondLike){
        setContadorSecondLike(contadorsecondlike - 1)
      } else {
        setContadorSecondLike(contadorsecondlike + 1);
      }
    }
  
    // let handlePost = (index) => {
    //   if(isActivePost === index){
    //     setIsActivePost(null)
    //   } else {
    //     setIsActivePost(index)
  
    //   }
    // }
    // let handleLike = (indice) => {
    //   if(isActiveLike === indice){
    //     setIsActiveLike(null);
    //     setContadorPost(contadorpost - 1);
  
    //   } else {
    //     setIsActiveLike(indice);
    //     setContadorPost(contadorpost + 1);
  
    //   }
    // }
    
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
  
  
  
    return (
  
      <div class="feed">
        <div class="post" >
          <div class="post-title">
            <div class="persona">
              <img class="profile profile-feed"
                src={"meowed.svg"} alt="meowed"/>
              <h4>meowed</h4>
            </div>
            <div class="menu-mais">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
          <div class="post-media">
            <img src={"gato-telefone.svg"} alt="gato curioso na internet" />
          </div>
  
          <div class="post-action">
            <div class="esquerda">
            <div className={isActiveFirstLike ? 'ioncolorlike': ''} onClick={handlefirstLike}>
            {isActiveFirstLike? <ion-icon name="heart"></ion-icon> : <ion-icon name="heart-outline"></ion-icon>}          
            </div>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div class="direita"  className={isActiveFirstPost  ? 'ioncolorpost': ''} onClick={handlefirstPost} >
              {isActiveFirstPost? <ion-icon name="bookmark"></ion-icon> : <ion-icon name="bookmark-outline"></ion-icon>}          
            </div>
          </div>
          <div class="post-coments">
            <img class="profile post-coments-img"
              src={"respondeai.svg"} alt="respondeai"/>
            <p>Curtido por respondeai e outras {contadorfirstlike} pessoas</p>
          </div>
        </div>
        <div class="post" >
          <div class="post-title">
            <div class="persona">
              <img class="profile profile-feed"
                src={"barked.svg"} alt="barked"/>
              <h4><b>barked</b></h4>
            </div>
            <div class="menu-mais">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
          <div class="post-media">
            <img src={"dog.svg"} alt="gato curioso na internet" />
          </div>
  
          <div class="post-action">
            <div class="esquerda">
              <div className={isActiveSecondLike ? 'ioncolorlike': ''} onClick={handlesecondLike}>
              {isActiveSecondLike? <ion-icon name="heart"></ion-icon> : <ion-icon name="heart-outline"></ion-icon>}          
              </div>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div class="direita" className={isActiveSecondPost ? 'ioncolorpost': ''} onClick={handlesecondPost} >
            {isActiveSecondPost? <ion-icon name="bookmark"></ion-icon> : <ion-icon name="bookmark-outline"></ion-icon>}          
            </div>
          </div>
          <div class="post-coments">
            <img class="profile post-coments-img"
              src={"adorable_animals.svg"} alt="animals"/>
            <p>Curtido por respondeai e outras {contadorsecondlike} pessoas</p>
          </div>
        </div>
      </div>
    )
  }