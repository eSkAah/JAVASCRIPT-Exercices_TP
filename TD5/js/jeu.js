export class Morpion {

  static #MAX_GRILLE = 8;
  static #MIN_GRILLE = 3;
  #taille; //attribut de la classe MorpionComplet privée 
  #grille;
 

  constructor(taille) {

    if (Number.isNaN(taille) || taille < Morpion.#MIN_GRILLE || taille > Morpion.#MAX_GRILLE) {
      throw new Error("Taille invalide");
    } else {

      this.#taille = taille;
      this.#grille = new Array(this.#taille);

      for (let i = 0; i < this.#taille; i++) {
        this.#grille[i] = new Array(this.#taille);

        for (let j = 0; j < this.#taille; j++) {
          this.#grille[i][j] = ' ';
        }
      }

    }
  }

  /////////////////////
  //      METHODS    //
  /////////////////////

  setPion(symbole, ligne, colonne){
    if(this.#grille[ligne][colonne] !== ' '){
      return false;
    }else{
      this.#grille[ligne][colonne] = symbole;
      return true;
    }
  }


 

aGagne (symbole, y, x) {

  let nbSymboles;

  // gagné en ligne ?
  const ligne = y;
  nbSymboles = 0;
  for (let col = 0; col < this.#taille; col++) {
    if (this.#grille[ligne][col] === symbole) {
      nbSymboles++;
    }
  }
  if (nbSymboles === this.#taille) {
    return true;
  }

  // gagné en colonne ?
  const col = x;
  nbSymboles = 0;
  for (let ligne = 0; ligne < this.#taille; ligne++) {
    if (this.#grille[ligne][col] === symbole) {
      nbSymboles++;
    }
  }
  if (nbSymboles === this.#taille) {
    return true;
  }

  // gagné diagonale
  if (x === y) {
    nbSymboles = 0;
    for (let lc = 0; lc < this.#taille; lc++) {
      if (this.#grille[lc][lc] === symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === this.#taille) {
      return true;
    }
  }

  // gagné diag inverse
  if (x === this.#taille - (y + 1)) {
    nbSymboles = 0;
    for (let ligne = 0; ligne < this.#taille; ligne++) {
      if (this.#grille[ligne][this.#taille - (ligne + 1)] === symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === this.#taille) {
      return true;
    }
  }
  return false;
};

matchNul(coups){
  if(coups === (this.#taille * this.#taille)){
    return true;
  };
  
}

}

  
  

