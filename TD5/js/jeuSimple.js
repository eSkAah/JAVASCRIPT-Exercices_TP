import {Morpion} from './jeu.js';

export class MorpionSimple extends Morpion {

  constructor(taille) {
    super(taille);
  }

/////Methods////
setPion(symbole, ligne, colonne){
  let sp = super.setPion(symbole, ligne, colonne);
  return sp; 
}

aGagne(symbole, y, x) {
  const aTrouver = symbole.repeat(3);

  console.log(aTrouver);

  // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
  let ligne = '';
  this._grille[y].forEach(element => (ligne += element));
  if (ligne.indexOf(aTrouver) >= 0) {
    return true;
  }

  // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
  let col = '';
  this._grille.forEach(element => (col += element[x]));
  if (col.indexOf(aTrouver) >= 0) {
    return true;
  }

  // gagné diagonale
  if (x === y) {

    console.log('oui dans la diag');
    let diagonale = '';

    for (let lc = 0; lc < this._taille; lc++) {
      diagonale += this._grille[lc][lc];
    }
    if (diagonale.indexOf(aTrouver) >= 0) {
      console.log('morpion simple diag win');
      return true;
    }
  }

  // gagné diag inverse
  if (x === this._taille - (y + 1)) {
    let inverse = '';

    for (let lc = 0; lc < this._taille; lc++) {
      inverse += this._grille[lc][this._taille - (lc + 1)];
    }
    if (inverse.indexOf(aTrouver) >= 0) {
      return true;
    }
  }

  return false;
}












  
}



