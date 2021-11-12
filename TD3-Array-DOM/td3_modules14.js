import {calcul, countEven, maxEvenA, dichoSearch  } from './array_util.js';


const resultats = document.getElementById('resultatDicho');

let resultArray = [];
let testArray = [4,6,7,12,45,33,87,122,8,909, 1000];


//Duplication de l'input

let add = document.getElementById('addNewInput');
let search = document.getElementById('search');
const menu = document.getElementById('dichoMenu');
const sumElements = document.getElementById('sumElements');
const pairsElement = document.getElementById('pairsElement');
const evenPairElement = document.getElementById('evenPairElement');
const indexElement = document.getElementById('indexElement');
const error = document.getElementById('error');

add.addEventListener('click', () =>{
  cloneInput();
});

search.addEventListener('click', () =>{
  searchFunction();
})





/**
 * Fonction qui permet de dupliquer l'input
 */
function cloneInput() {
  // Stocker un bouton dans la variable
  // retirer le bouton du précédent input
  let elementToClone = document.getElementById('numberInput');

  console.log(elementToClone.firstElementChild);

  if(elementToClone.firstElementChild.value == ""){
    error.textContent = " Vous devez entrer une valeure avant d'en ajouter une autre.";
    error.removeAttribute('hidden');
    error.style.fontSize = "x-small";
    error.style.color = "red";
    error.style.fontStyle = "italic";
    return;
  }
  
  let newElement = elementToClone.cloneNode(true);
  newElement.firstElementChild.value = 0;
  menu.appendChild(newElement);
  newElement.lastElementChild.addEventListener('click', () =>{
    cloneInput();
  });

  elementToClone.removeChild(elementToClone.lastElementChild);
  elementToClone.removeAttribute('id');
  error.setAttribute('hidden', true);
    
}

//Zone d'affichage de données 
function searchFunction() {
  
  let allInputs = menu.getElementsByTagName('input');
  let elementLookingFor = parseInt(document.getElementById('elementLookingFor').value);
  let tempArray = [];

  for(let i = 0; i < allInputs.length; i++){
    tempArray.push(parseInt(allInputs[i].value));
  }

  // console.log(tempArray);

  let addition = parseInt(calcul(tempArray));
  let evenNumber = countEven(tempArray);
  let bigger = maxEvenA(tempArray);

  // console.log(addition);
  // console.log(evenNumber);
  // console.log(bigger);
  // console.log(elementLookingFor);

  sumElements.textContent = calcul(tempArray);
  pairsElement.textContent = countEven(tempArray);
  evenPairElement.textContent = maxEvenA(...tempArray);
  console.log(elementLookingFor);
  indexElement.textContent = dichoSearch(tempArray,parseInt(elementLookingFor));
  

}











