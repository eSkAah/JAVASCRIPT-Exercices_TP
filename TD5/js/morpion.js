import {Morpion} from './jeu.js';
import { MorpionSimple } from './jeuSimple.js';

let morpion;
let joueur = 1;
let scores = [0, 0];
let taille;
let coups;
let symbole = "x"; 
let modeJeu;

// Faire fonction recommence et la fixer 
// Voir pour mettre le Switch en place pour les mdoes de jeu 
// Dupliquer sur le fichier morpion Extends 
// Voir pour le remove event listener

const zoneMessage = document.getElementById('messages');
const btnReset = document.getElementById('btn_reset');
const restart = () => recommence();



btnReset.addEventListener('click', restart);

  function recommence() {
    taille = Number.parseInt(document.getElementById('taille').value);
    modeJeu = document.getElementById('simple').checked ? 'simple' : 'complet';

    try {
      const table = document.getElementById('table_morpion');
      for (let l = table.rows.length - 1; l >= 0; l--) {
        table.deleteRow(l);
      }

      switch (modeJeu){

        case 'simple' : 
          morpion = new MorpionSimple(taille);
          console.log(morpion);
          break;

        case 'complet' : 
          morpion = new Morpion(taille);
          console.log(morpion);
          break;

      }
      
      let cases = [];
    
      for (let i = 0; i < taille; i++) { 
        const ligne = table.insertRow(i);
        for (let j = 0; j < taille; j++) {
          const id = '' + ((i + 1) * 10 + (j + 1));
          const cell = ligne.insertCell(j);
          cell.innerHTML = "<input type='button' class='case' id='" + id + "'/>";
          cases.push(cell.firstChild);
          cell.firstChild.addEventListener("click", () => clicBouton(cell.firstChild, i, j));  
          document.getElementById(id).value = '';
        }
      }

      coups = 0;
      document.getElementById('btn_reset').disabled = true;

    } catch (e) {
      zoneMessage.innerHTML = e;
    }
    
  }


  function clicBouton(uneCase, y, x){
    
    if(morpion.setPion(symbole ,y, x)){
      uneCase.value = symbole;
      uneCase.classList.add('joueur' + joueur);
      coups++;
    }else{
      clicBouton(symbole ,y, x);
    }
     
    const zoneMessage = document.getElementById('messages');

     const  victoire = morpion.aGagne(symbole, y, x);
    
      if(victoire) {
    
        zoneMessage.innerHTML = 'Le joueur ' + joueur + ' a gagné !';
        desactiveEcouteurs();
        symbole === 'x' ? scores[0]++ : scores[1]++;
        zoneMessage.innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];
      
      } else if (morpion.matchNul(coups)){

        zoneMessage.innerHTML = 'Match nul !';
        desactiveEcouteurs();
      
      } else {

        if (symbole === 'x') {
          symbole = 'o';
          joueur = 2;
        } else {
          symbole = 'x';
          joueur = 1;
        }

        zoneMessage.innerHTML = 'Joueur ' + joueur + ', à toi de jouer !';
    
      } 
  }

  function desactiveEcouteurs() {
    for (let i = 0; i < taille; i++) {
      for (let j = 0; j < taille; j++) {
       document.getElementById('' + ((i + 1) * 10 + (j + 1))).disabled = true;
      }
    }
   
    document.getElementById('btn_reset').disabled = false;
  };


  



  
  
