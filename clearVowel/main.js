const text= document.querySelector('textarea');
const txt=[];
const vowell= ["a","e","i","o","u","y"];

text.addEventListener('keypress',function(evt){
  const key= evt.key;
  if (!vowell.includes(key)){
    txt.push(key)
  }
  console.log(txt.join(""))
})