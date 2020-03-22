const text= document.querySelector('textarea');
const button= document.querySelector('button');

text.addEventListener('keyup',function(){
  button.disabled = text.value.length>20 ? true : false;
})