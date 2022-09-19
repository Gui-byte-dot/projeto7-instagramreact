export default function Stories() {
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
          <img class="profile" src={image} alt="stories" />
        </div>
      );
  
    return (
      <div class="stories">
        {componentsStories}
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
  
  
    )
  }