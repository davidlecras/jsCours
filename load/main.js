const images= document.querySelectorAll('img');
const imgArray= Array.from(images);

imgArray.map((image, index)=>image.addEventListener("load", function(){
  console.log(`image chargée ${index +1}: OK`)
}))