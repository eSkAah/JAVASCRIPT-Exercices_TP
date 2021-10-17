import {Morpion} from './jeu.js';

export class MorpionSimple extends Morpion {

  #taille;
  #grille;

  constructor(taille) {
    super(taille);
    this.#taille = taille;
      this.#grille = new Array(this.#taille);

      for (let i = 0; i < this.#taille; i++) {
        this.#grille[i] = new Array(this.#taille);

        for (let j = 0; j < this.#taille; j++) {
          this.#grille[i][j] = ' ';
        }
      }
    
    
  }

/////Methods////
setPion(symbole, ligne, colonne){
  if(this.#grille[ligne][colonne] !== ' '){
    return false;
  }else{
    this.#grille[ligne][colonne] = symbole;
    return true;
  }
}

aGagne(symbole, y, x) {
  const aTrouver = symbole.repeat(3);

  // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
  let ligne = '';
  this.#grille[y].forEach(element => (ligne += element));
  if (ligne.indexOf(aTrouver) >= 0) {
    return true;
  }

  // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
  let col = '';
  this.#grille.forEach(element => (col += element[x]));
  if (col.indexOf(aTrouver) >= 0) {
    return true;
  }

  // gagné diagonale
  if (x === y) {
    let diagonale = '';
    for (let lc = 0; lc < taille; lc++) {
      diagonale += this.#grille[lc][lc];
    }
    if (diagonale.indexOf(aTrouver) >= 0) {
      return true;
    }
  }

  // gagné diag inverse
  if (x === taille - (y + 1)) {
    let inverse = '';
    for (let lc = 0; lc < taille; lc++) {
      inverse += this.#grille[lc][taille - (lc + 1)];
    }
    if (inverse.indexOf(aTrouver) >= 0) {
      return true;
    }
  }

  return false;
}

// document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];











  
}



