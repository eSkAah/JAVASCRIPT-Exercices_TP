const exo1InsertArticle = (body) => {
  let titre = 'Article 0 - Interdiction absolue';
  let texte =
    "<span style='color:#000000;'>Il est absolument interdit de me doubler, sous peine de disqualification immédiate.</span>";

  let newH2 = $('<h2 />');
  newH2.text(titre);
  let newP = $('<p />');
  newP.html(texte);

  body.prepend(newP);
  body.prepend(newH2);
};

const exo2TitresMajuscule = () => {
  $('body > h2').each(function () {
    $(this).text($(this).text().toUpperCase());
  });

  // OU
  //$("body > h2").css("text-transform", "uppercase");
};

const exo3DecalerNumeros = () => {
  const h2s = $('body > h2');
  h2s.each(function () {
    const unH2 = $(this);
    const ch = unH2.text();
    const idx = ch.indexOf(' ');
    const idx2 = ch.indexOf(' ', idx + 1);
    const numero = Number.parseInt(ch.substring(idx, idx2)) + 1;
    const ch2 = ch.substring(0, idx + 1) + numero + ch.substring(idx2);
    unH2.text(ch2);
  });
};

const exo4Styles = () => {
  let lesH2 = $('body > h2:odd');
  lesH2.addClass('unsurdeux');
  for (const unH2 of lesH2) {
    $(unH2).nextUntil('h2').addClass('unsurdeux');
  }
};

const exo5ChangeDates = () => {
  let lesH2 = $('body > h2');
  let art4 = lesH2[3];
  // Recherche du premier UL
  let noeud = $(art4).nextAll('ul')[0];
  // Recherche des UL suivants jusqu'à trouver autre chose
  let noeud2 = $(noeud).nextUntil(':not(ul)');

  let lesUL = [noeud, ...noeud2];
  let pointInsertion = $(lesUL[0]);
  for (let i = lesUL.length - 1; i >= 1; i--) {
    pointInsertion.before(lesUL[i]);
  }
};

exo1InsertArticle($('body'));
exo2TitresMajuscule();
exo3DecalerNumeros();
exo4Styles();
exo5ChangeDates();
