const titres= document.querySelectorAll("h1");

function goToTitre(titre){
  const distance= titre.offsetTop;
  window.scrollTo(0,distance);
}