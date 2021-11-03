export class Morpion {

  static #MAX_GRILLE = 8;
  static #MIN_GRILLE = 3;
  _taille; //attribut de la classe MorpionComplet privée 
  _grille;
 

  constructor(taille) {

    if (Number.isNaN(taille) || taille < Morpion.#MIN_GRILLE || taille > Morpion.#MAX_GRILLE) {
      throw new Error("Taille invalide");
    } else {

      this._taille = taille;
      this._grille = new Array(this._taille);

      for (let i = 0; i < this._taille; i++) {
        this._grille[i] = new Array(this._taille);

        for (let j = 0; j < this._taille; j++) {
          this._grille[i][j] = ' ';
        }
      }

    }
  }

  /////////////////////
  //      METHODS    //
  /////////////////////

  setPion(symbole, ligne, colonne){
    if(this._grille[ligne][colonne] !== ' '){
      return false;
    }else{
      this._grille[ligne][colonne] = symbole;
      return true;
    }
  }

aGagne (symbole, y, x) {

  let nbSymboles;

  // gagné en ligne ?
  const ligne = y;
  nbSymboles = 0;
  for (let col = 0; col < this._taille; col++) {
    if (this._grille[ligne][col] === symbole) {
      nbSymboles++;
    }
  }
  if (nbSymboles === this._taille) {
    return true;
  }

  // gagné en colonne ?
  const col = x;
  nbSymboles = 0;
  for (let ligne = 0; ligne < this._taille; ligne++) {
    if (this._grille[ligne][col] === symbole) {
      nbSymboles++;
    }
  }
  if (nbSymboles === this._taille) {
    return true;
  }

  // gagné diagonale
  if (x === y) {
    nbSymboles = 0;
    for (let lc = 0; lc < this._taille; lc++) {
      if (this._grille[lc][lc] === symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === this._taille) {
      return true;
    }
  }

  // gagné diag inverse
  if (x === this._taille - (y + 1)) {
    nbSymboles = 0;
    for (let ligne = 0; ligne < this._taille; ligne++) {
      if (this._grille[ligne][this._taille - (ligne + 1)] === symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === this._taille) {
      return true;
    }
  }
  return false;
};

matchNul(coups){
  if(coups === (this._taille * this._taille)){
    return true;
  };
  
}

}

  
  

