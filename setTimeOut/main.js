const titre= document.querySelector('h1');

const text= setTimeout(function(){
  titre.textContent="Javascrpit s'apprend avec de la patience!";
  titre.style.opacity=1;
  document.body.style.background="#FB1";
}, 5000)