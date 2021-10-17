const exo1InsertArticle = (body) => {
  const titre = 'Article 0 - Interdiction absolue';
  const texte =
    "<span style='color:#000000;'>Il est absolument interdit de doubler Bob Tahri, sous peine de disqualification immédiate.</span>";

  const newH2 = document.createElement('h2');
  newH2.innerHTML = titre;
  const newP = document.createElement('p');
  newP.innerHTML = texte;

  const firstH2 = body.getElementsByTagName('H2')[0];
  body.insertBefore(newP, firstH2);
  body.insertBefore(newH2, newP);
};

const exo2TitresMajuscule = (body) => {
  const lesH2 = body.getElementsByTagName('h2');
  for (const unH2 of lesH2) {
    const ch = unH2.firstChild.nodeValue;
    unH2.firstChild.nodeValue = ch.toUpperCase();
    // ou unH2.style.textTransform = "uppercase";
    // ou une classe
  }
};

const exo3DecalerNumeros = (body) => {
  const lesH2 = body.getElementsByTagName('h2');
  for (const unH2 of lesH2) {
    const ch = unH2.firstChild.nodeValue;
    const idx = ch.indexOf(' ');
    const idx2 = ch.indexOf(' ', idx + 1);
    const numero = Number.parseInt(ch.substring(idx, idx2)) + 1;
    const ch2 = ch.substring(0, idx + 1) + numero + ch.substring(idx2);
    unH2.firstChild.nodeValue = ch2;
  }
};

const exo4Styles = (body) => {
  const lesH2 = body.getElementsByTagName('h2');
  let i = 0;
  for (const unH2 of lesH2) {
    if (i % 2 === 1) {
      unH2.classList.add('unsurdeux');
      let precedent = unH2;
      let unP;
      do {
        unP = precedent.nextElementSibling;
        precedent = unP;
        if (unP.nodeName !== 'H2') {
          unP.classList.add('unsurdeux');
        }
      } while (unP.nodeName !== 'H2' && unP.nodeName !== 'SCRIPT');
    }
    i++;
  }
};

const exo5ChangeDates = (body) => {
  const lesH2 = body.getElementsByTagName('h2');
  const art4 = lesH2[3];
  // Recherche du premier UL
  let noeud = art4;
  while (noeud.nodeName !== 'UL') {
    noeud = noeud.nextElementSibling;
  }

  // Boucle sur les UL
  const lesUL = [];
  let unUL;
  do {
    unUL = noeud;
    if (unUL.nodeName === 'UL') {
      lesUL.push(unUL);
    }
    noeud = noeud.nextElementSibling;
  } while (unUL.nodeName === 'UL');

  const pointInsertion = lesUL[0];
  for (let i = lesUL.length - 1; i >= 1; i--) {
    document.body.insertBefore(lesUL[i], pointInsertion);
  }
};

exo1InsertArticle(document.body);
exo2TitresMajuscule(document.body);
exo3DecalerNumeros(document.body);
exo4Styles(document.body);
exo5ChangeDates(document.body);
