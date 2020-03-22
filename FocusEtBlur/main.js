const input = document.querySelector('input');
input.addEventListener("focus",function(){
  input.style.background="#C0FFEE";
})

input.addEventListener("blur",function(){
  input.style.background="white";
})