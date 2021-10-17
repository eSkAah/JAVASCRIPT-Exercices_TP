export class Morpion {

  static MIN_GRILLE = 3;
  static MAX_GRILLE = 8;

  taille;

  constructor() {

   
  }


  /////////////////////
  //      METHODS    //
  /////////////////////


//Logique métier
 aGagne (symbole, y, x) {
  if (modeJeu === 'simple') {
    return aGagne3ParmiN(symbole, y, x);
  }

  let nbSymboles;

  // gagné en ligne ?
  const ligne = y;
  nbSymboles = 0;
  for (let col = 0; col < taille; col++) {
    if (morpion[ligne][col] === symbole) {
      nbSymboles++;
    }
  }
  if (nbSymboles === taille) {
    return true;
  }

  // gagné en colonne ?
  const col = x;
  nbSymboles = 0;
  for (let ligne = 0; ligne < taille; ligne++) {
    if (morpion[ligne][col] === symbole) {
      nbSymboles++;
    }
  }
  if (nbSymboles === taille) {
    return true;
  }

  // gagné diagonale
  if (x === y) {
    nbSymboles = 0;
    for (let lc = 0; lc < taille; lc++) {
      if (morpion[lc][lc] === symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === taille) {
      return true;
    }
  }

  // gagné diag inverse
  if (x === taille - (y + 1)) {
    nbSymboles = 0;
    for (let ligne = 0; ligne < taille; ligne++) {
      if (morpion[ligne][taille - (ligne + 1)] === symbole) {
        nbSymboles++;
      }
    }
    if (nbSymboles === taille) {
      return true;
    }
  }

  return false;
}


}