addEventListener('click',function(){
  const img= document.createElement('img');
  const size=300;
  img.setAttribute('src',`https://picsum.photos/${size}/${size}`);
  img.style.position="absolute";
  img.style.top= event.y -size/2+ "px";
  img.style.left= event.x-size/2 + "px";
  this.document.body.appendChild(img);
})