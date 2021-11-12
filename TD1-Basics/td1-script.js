/**
 * Importation du module readline afin de pouvoir intérroger l'utilisateur dans la console, équivalent au Prompt sur une page web;
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//Exercice 2.1 2.2
console.log('------------------');
console.log("Exercice 2.1 & 2.2: Les types");
console.log('------------------');

/**
 * Fonction qui va identifier le type d'une variable qu'on passe en paramètre, définis en haut du code dû a la syntaxe de la fonction
 * @param {*} $var 
 * @returns 
 */
let getType = ($var) => { return typeof console.log(typeof $var); };

let x;
getType(x);
x = 'blabla';
getType(x);
x = "blabla";
getType(x);
x = `blabla ${x}`;
getType(x);
x = 9;
getType(x);
x = 2.5;
getType(x);
x = true;
getType(x);
x = undefined;
getType(x);
x = null;
getType(x);
x = [1,2,3];
getType(x);
x = new Array();
getType(x);
x = {};
getType(x);
x = {"promo":"lpwmce", "nb":25};
getType(x);
x = new Date();
getType(x);
x = function() {alert('toto')};
getType(x);
x = 42n;
getType(x);

//Exercice 2.3 
console.log('------------------');
console.log("Exercice 2.3 : Les conversions");
console.log('------------------');

x = {
  "name":"Allan",
  "surname":"Breuil"
}

x.toString();
console.log(x);
console.log(parseInt(100.5));
console.log(parseFloat("40 years old"));

console.log(Math.floor(10.546433));
console.log(Math.ceil(10.546433));
console.log(Math.round(10.546433));

//Exercice 2.3 
console.log('------------------');
console.log("Exercice 2.4 : Les égalités");
console.log('------------------');

console.log('------------------');
console.log("Egalité");
console.log('------------------');

let b=false;
let n=0;
let s='0';
let tab = [];
let o = {};

console.log(b == n);
console.log(b == s);
console.log(b == tab);
console.log(b == o);

console.log(s == n);
console.log(s == tab);
console.log(s == o);

console.log(tab == n);
console.log(tab == s);
console.log(tab == o);

console.log(o == n);
console.log(o == s);
console.log(o == tab);

console.log('------------------');
console.log("Egalité stricte");
console.log('------------------');

console.log(b === n);
console.log(b === s);
console.log(b === tab);
console.log(b === o);

console.log(s === n);
console.log(s === tab);
console.log(s === o);

console.log(tab === n);
console.log(tab === s);
console.log(tab === o);

console.log(o === n);
console.log(o === s);
console.log(o === tab);

//Exercice 3
console.log('------------------');
console.log("Exercice 3 : Les chaînes");
console.log('------------------');

/**
 * Fonction qui permet de rentrer son nom, et vérifie que ce nom est bien entré en Majuscule! 
 */
 function string() {
   rl.question("What is your name ? ", function saveInput(name) {
     if(name === name.toUpperCase() && name.length >= 3){
       console.log(`Bonjour ${name}`);
       rl.close();
     }else{
       console.log("Vérifier que votre nom est écrit en Majuscule et comporte plus de 3 caractères.");
       string();
     }
   });
 };

console.log('------------------');
console.log("Exercice 3 : Les chaînes EXERCICE 2");
console.log('------------------');
    
/**
 * Fonction qui permet de générer une lettre an majuscule aléatoire, et qui indique le nombre de tentative avant d'avoir réussi l'opération
 * 
 */
const randomLetter = () => {
  let word = "";
  let letter;
  let tries = 0;  

  for(let i = 0; i < 5; i++){
    do{
      letter =  String.fromCharCode(65 + Math.random()*(122-61));
      tries++;
    }while(letter !== letter.toUpperCase());
    word += letter;
    console.log(word);
  }
  console.log("Le mot entier est : " + word); 
  console.log(tries);
}

/**
 * Fonction qui retourne Jazz si le nombre est divisible par 3, Bundle si il est divisible par 5, et JazzBundle si il est divisible par les deux
 * Renvoi le chiffre si jamais il n'est divisible ni par l'un ni par l'autre
 * 
 */
const jazzBundle = () => {
  let result = "";
  rl.question("Choose a number : ", function saveInput($number) {
    result += ($number%3 === 0) ? "Jazz" : "";
    result += ($number%5 === 0) ? "Bundle" : "";

    if($number%3 !== 0 && $number%5 !== 0){
      console.log($number);
    }else{
      console.log(result);
    }
    rl.close();
  })
}

/**
 * Fonction qui permet de générer aléatoirement un mot uniquement composé de voyelles. 
 */


const genStrVowels = () => {
  let vowels = ["a","e","i","o","u","y"];
  let word = "";
  for(let i = 0; i < vowels.length; i++){
    word += vowels[Math.floor(Math.random() * vowels.length)];
  }
  console.log(word);
}

/**
 * Fonction qui permet de renvoyer dans la console le nom et prénom de l'utilisateur avec le NOM en Majuscule et le Prénom en Minuscule et
 * majuscule a la première lettre.
 */
const correctName = () => {
  rl.question("Quel est ton nom de famille ? : ", ($name) => {
    rl.question("Quel est ton prénom ? : ", ($surname) =>{
      let fullName = "Bonjour" + $name.toUpperCase() + " " + $surname.charAt(0).toUpperCase() + $surname.slice(1).toLowerCase() + " j'éspere que tu vas bien :)";
      console.log(fullName);
    })
  })
}

/**
 * Fonction qui permet de remplacer certains caractères par d'autres caractères
 * @param {String} $string 
 */

const crypting = (string) => {
  let replaceArray = ['a', 'e', 'g', 'i', 'o', 's', 'z'];
  let cryptArray = ['4', '3', '6', '1', '0', '5', '2'];
  let newString = string.toLowerCase();

  for(let i = 0; i <= replaceArray.length ; i++){
    newString = newString.split(replaceArray[i]).join(cryptArray[i]);
  }
  console.log(newString);
  return newString;
}

//Exercice 4 
console.log('------------------');
console.log("Exercice 4 : Les tableaux et fonctions");
console.log('------------------');


//////////////////////////////////////////////////
// //Addition des nombres d'un tableau
//////////////////////////////////////////////////

let array = [4,6,7,12,45,33,87,122,8,909, 1000];
let array2 = [2,42,8,76,97,35,33,76,87,29]

// Algorithmique
console.log(calcul(array));
/**
 * 
 * @param {array} array 
 * @returns 
 */
function calcul(array){
  let number = 0;
  for(let i = 0 ; i < array.length ; i++){
    number += array[i];
  }
  return number;
}

// Fonctionnelle
const reducer = (previousValue, currentValue) => previousValue + currentValue;
console.log(array.reduce(reducer));

//////////////////////////////////////////////////
//Compter le nombre d'entiers pair dans un tableau
//////////////////////////////////////////////////
//Algorithmique

/**
 * Fonction qui permet compter les nombres pair d'un tableau
 * @param {array} array 
 * @returns 
 */
function countEven(array) {
  let count = 0;
  for(let i = 0 ; i < array.length ; i++){
     if(array[i]%2 == 0){
       count++
     }
  }
  return count;
}
console.log("il y a " + countEven(array) + " nombres pair dans le tableau d'élements reçu");

////Fonctionnelle

/**
 * Fonction qui permet compter les nombres pair d'un tableau
 * @param {array} arr 
 * @returns 
 */
function evenNumbers(arr){
  let result = arr.filter(number => number % 2 == 0);
  return result.length;
}
console.log("il y a " + evenNumbers(array) + " nombres pair dans le tableau d'élements reçu");

////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ecrire une fonction qui fusionne deux tableaux triés, et renvoie un tableau trié (sans utiliser sort).
////////////////////////////////////////////////////////////////////////////////////////////////////////
//Algorithmique 

console.log(sortArrays(array, array2));

/**
 * Fonction qui permet de retourner 2 tableau fusionné et trié dans l'ordre croissant.
 * @param {array} array 
 * @param {array} array2 
 * @returns array
 */
function sortArrays(array, array2){
  array = sortArray(array);
  array2 = sortArray(array2);
  const newArray = [];

  for(let i = 0; i < array.length; i++){
    newArray.push(array[i]);
  }

  for(let i = 0; i < array2.length; i++){
    newArray.push(array2[i]);
  }

  sortArray(newArray);

  //newArray = sortArray([...array, ...array2]);
  return newArray;
}

/**
 * Fonction qui permet de retourner un tableau trier dans l'ordre croissant.
 * @param {array} array 
 * @returns array
 */
function sortArray(array){
  let value;
  let counter = 0;

  for(let i = 1; i < array.length; i++){
    value = array[i];
    counter = i;
    
    while(counter > 0 && array[counter-1] > value ) {
      array[counter] = array[counter-1];
      counter = counter-1;
    }
    array[counter] = value;
  }

return array;
}

//Fonctionnelle

let concArray = [...array, ...array2];
concArray.sort( (a, b) => a- b );
console.log(concArray);

////////////////////////////////////////////////////////////////////////////////////////////////////////
//Ecrire une fonction qui réalise la recherche dichotomique dans un tableau 
//(sans utiliser de fonctions propres au tableau).
////////////////////////////////////////////////////////////////////////////////////////////////////////
//Algorithmique

console.log("Ce chiffre se trouve en index : " + dicoSearch(87, array));
/**
 * 
 * @param {number} value 
 * @param {array} array 
 * @returns 
 */
function dicoSearch(value, array){
  sortArray(array);
  let midNum = parseInt(array.length/2);
  let newArray = [];

  if(array[midNum] == value){
     return true;
  }else{
    
    if(array[midNum] > value){
      for(let i = 0; i < midNum; i++){
        newArray.push(array[i]);
      }
      return dicoSearch(value, newArray);
    }else if(array[midNum] < value) {
      for(let i = midNum; i < array.length; i++){
        newArray.push(array[i])
      }
      return dicoSearch(value, newArray);
    }
  }     
}

//Fonctionnelle
console.log(array.includes(12));

//////////////////////////////////////////////////////////////////////////
//Ecrire une fonction qui prend en paramètres un certain nombre d'entiers 
//(Rest parameters, cours n°1 page 26) et renvoie le plus grand pair.
//////////////////////////////////////////////////////////////////////////
//Algorithmique
console.log(maxEvenA(5,1,9,8,10,2,4,12));

/**
 * Fonction qui retourne le plus grand nombre d'une serie d'entiers 
 * @param  {...any} props 
 * @returns 
 */
function maxEvenA(...props){
  let bigger = 0;
  let current;
for(let i = 0; i < props.length; i++){
  current = props[i];
  if(current > bigger && props[i]%2 == 0) bigger = props[i];
}
return bigger;
}

//Fonctionnelle
console.log(maxEven(5,1,9,8,10,2,4,12));

/**
 * Fonction qui retourne le plus grand nombre d'une serie d'entiers 
 * @param  {...any} props 
 * @returns 
 */
function maxEven(...props){
  result = props.filter(number => number % 2 == 0);
  return Math.max(...result);
}


//////////////////////////////////////////////////////////////////////////
// En utilisant un "tableau associatif", écrire une fonction qui renvoie le 
//nombre d'occurences de chaque mot d'une phrase.
//////////////////////////////////////////////////////////////////////////
//Algorithmique

let wordsArray = ["bonjour", "les", "exercices", "de", "JS", "sont", "cool", "les", "les", "cool", "cool"];

console.log(numbChar(wordsArray));

/**
 * 
 * @param {array} array 
 * @returns Object
 */
function numbChar(array){
  result = { };

  for(i = 0; i < array.length; ++i) {
    if(!result[array[i]]) result[array[i]] = 0;
    ++result[array[i]]; 
  }
  return result;
}

//Fonctionnelle

console.log(numbCharFonctio(wordsArray));

/**
 * 
 * @param {array} array 
 * @returns Object
 */
function numbCharFonctio(array){
data = {};

  for(i = 0; i < array.length; ++i) {
    data[array[i]] = array.filter(x => x===array[i]).length;
  }
  return data;
}

/////////////////////////////////////////////////////
// Zone d'appel de fonctions pour les exercices 3 //
////////////////////////////////////////////////////

/**
 * Fonction qui utilise un Switch pour appeler les différentes fonctions des exercices :
 * 1- Générer 5 caratères aléatoires en majuscule
 * 2- JazzBundle
 * 3- Bonjour "<name>" En majuscules obligatoirement
 * 4- Generateur voyelles aléatoire
 * 5- Correction du nom et prénom de l'user
 * 6- Encryptage d'une phrase
 */
function functionsJS() {
  rl.question("Choisissez une fonction à executer :", ($choice) => {
   switch(parseInt($choice)){
     case 1 : randomLetter();
     break;
     case 2 : jazzBundle();
     break;
     case 3 : string();
     break;
     case 4 : genStrVowels();
     break;
     case 5 : correctName();
     break;
     case 6 : crypting("Ceci est un test de la fonction de cryptage 'zZz', Super cA fonctionne ");
     break;
     default:
     console.log('Veuillez saisir une valeure parmis les propositions proposé.');
     functionsJS();
   }
  })
}

// Décomenter la fonction pour correction.
functionsJS();


////////////////////////////////
// Zone d'appel de fonctions //
///////////////////////////////
// Faire un Do While //

 functionsJS();
 
 function functionsJS() {
   rl.question("Choisissez une fonction à executer :", ($choice) => {
    switch(parseInt($choice)){
      case 1 : randomLetter();
      break;
      case 2 : jazzBundle();
      break;
      case 3 : string();
      break;
      case 4 : genStrVowels();
      break;
      case 5 : correctName();
      break;
      case 6 : crypting("Ceci est un test de la fonction de cryptage 'zZz', Super cA fonctionne ");
      break;
      default:
      console.log('Veuillez saisir une valeure parmis les propositions proposé.');
      functionsJS();
    }
   })
 }







