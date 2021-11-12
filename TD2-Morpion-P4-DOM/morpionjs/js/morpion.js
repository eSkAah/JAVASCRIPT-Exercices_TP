let morpion;
let nbCoups;
let joueur;
let symbole;
let scores = [0, 0];

let taille;
let modeJeu;
let zoneMessage;

const btnReset = document.getElementById('btn_reset');
btnReset.addEventListener('click', recommence);

function recommence () {
  const MAX_GRILLE = 8;
  const MIN_GRILLE = 3;

  zoneMessage = document.getElementById('messages');
  taille = Number.parseInt(document.getElementById('taille').value);
  modeJeu = document.getElementById('simple').checked ? 'simple' : 'complet';
  if (Number.isNaN(taille) || taille < MIN_GRILLE || taille > MAX_GRILLE) {
    zoneMessage.innerHTML = 'Taille invalide !';
  } else {
    const table = document.getElementById('table_morpion');
    for (let l = table.rows.length - 1; l >= 0; l--) {
      table.deleteRow(l);
    }

    morpion = new Array(taille);
    for (let i = 0; i < taille; i++) {
      const ligne = table.insertRow(i);
      morpion[i] = new Array(taille);
      for (let j = 0; j < taille; j++) {
        morpion[i][j] = ' ';

        const id = '' + ((i + 1) * 10 + (j + 1));
        const cell = ligne.insertCell(j);
        cell.innerHTML = "<input type='button' class='case' id='" + id + "' onclick='clicBouton(this, " + i + ',' + j + ")'/>";
        document.getElementById(id).value = '';
      }
    }

    nbCoups = 0;
    joueur = 1;
    symbole = 'x';
    zoneMessage.innerHTML = 'Joueur 1, à toi !';
    document.getElementById('btn_reset').disabled = true;
  }
}

function clicBouton (uneCase, y, x) {
  if (morpion[y][x] === ' ') {
    morpion[y][x] = symbole;
    uneCase.value = symbole;
    uneCase.classList.add('joueur' + joueur);
    nbCoups++;

    const victoire = aGagne(symbole, y, x);
    if (victoire) {
      zoneMessage.innerHTML = 'Le joueur ' + joueur + ' a gagné !';
      desactiveEcouteurs();
      symbole === 'x' ? scores[0]++ : scores[1]++;
      document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];
    } else if (nbCoups === taille * taille) {
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
  } else {
    zoneMessage.innerHTML = 'Case déjà occupée !!! ';
  }
}

function desactiveEcouteurs () {
  for (let i = 0; i < taille; i++) {
    for (let j = 0; j < taille; j++) {
      document.getElementById('' + ((i + 1) * 10 + (j + 1))).removeAttribute('onclick');
    }
  }
  document.getElementById('btn_reset').disabled = false;
}

function aGagne (symbole, y, x) {
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

function aGagne3ParmiN (symbole, y, x) {
  const aTrouver = symbole.repeat(3);

  // gagné en ligne ? : concaténation de la ligne, et recherche de la sous-chaîne gagnante
  let ligne = '';
  morpion[y].forEach(element => (ligne += element));
  if (ligne.indexOf(aTrouver) >= 0) {
    return true;
  }

  // gagné en colonne ? : concaténation de la colonne et recherche de la sous-chaîne gagnante
  let col = '';
  morpion.forEach(element => (col += element[x]));
  if (col.indexOf(aTrouver) >= 0) {
    return true;
  }

  // gagné diagonale
  if (x === y) {
    let diagonale = '';
    for (let lc = 0; lc < taille; lc++) {
      diagonale += morpion[lc][lc];
    }
    if (diagonale.indexOf(aTrouver) >= 0) {
      return true;
    }
  }

  // gagné diag inverse
  if (x === taille - (y + 1)) {
    let inverse = '';
    for (let lc = 0; lc < taille; lc++) {
      inverse += morpion[lc][taille - (lc + 1)];
    }
    if (inverse.indexOf(aTrouver) >= 0) {
      return true;
    }
  }

  return false;
}

document.getElementById('score').innerHTML = 'X : ' + scores[0] + ' - O  : ' + scores[1];
