// var nom='Antho';
// var age=25;

// var stat= ["attaque","deffense"];

// var array=[nom,age,stat];

// array[2][1]="puissance",
// console.log(array);

// var prenom='david';
// var nom='lecras';
// var result=[];
// var initiales= prenom[2]+nom[4];
// result.push(prenom,nom,initiales);

// console.log(result)

// var note1=17;
// var note2=14
// var moyenne;

// function calculerLaMoyenne(){
// moyenne=(note1+note2)/2
// return moyenne
// }

// calculerLaMoyenne();
// console.log(moyenne);

// function niveau (arr){
// var lasommeDesNotes= arr.length;
// var toutesLesNotes=arr[0]+ arr[1]+arr[2];

// var moyenne= toutesLesNotes/lasommeDesNotes;
// console.log(moyenne)
// if (moyenne >=15){
//     return "très bien!";
// }else if( moyenne>=10){
//     return "bien";
// }else{
//     return "convocation des parents"
// }
// }

// console.log(niveau([12,8,16]))

// function moyenne(arr){
//     var totalnotes=0;
//     for(var i=0; i<arr.length;i++){
//         totalnotes += arr[i];
//     }
//     return totalnotes/arr.length;
// }

// console.log(moyenne([15,7,8,14]));




// function rangRandom (min,max){
//     var result= Math.floor((Math.random()*(max-min+1)+min));
//     return result;
// }
// console.log(rangRandom(5,10));




//mélanger un tableau:
const randomize= (arr)=>{
    for (let i=0; i<arr.length; i++){
        random= Math.floor(Math.random()*i);
        [arr[random],arr[i]]=[arr[i],arr[random]];
    }
    return arr;
}

console.log(randomize([1,2,3,4,5]));


const nouveauTexte=document.createTextNode("Coucou c'est moi!");

document.body.appendChild(nouveauTexte);

//Deviner la taille d'un élément du DOM:
const titre= document.getElementById('titre');

console.log(titre.offsetHeight, titre.offsetWidth);
console.log(titre.clientHeight, titre.clientWidth);