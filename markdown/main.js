//https://cdnjs.com/libraries/marked

const texte= document.querySelector('textarea');
const render= document.querySelector('div');
texte.value=localStorage.getItem("texte");

if(texte.value){
  render.innerHTML=marked(localStorage.getItem("texte"))
}

texte.addEventListener('keyup',function(){
  localStorage.setItem("texte", text.value);
  render.innerHTML=marked(texte.value);
})