let monStockage = localStorage;

/**
 * Fonction qui permet ed récupérer les différentes régions de France via l'API
 * https://geo.api.gouv.fr/regions
 */
function getRegions(){
 

  fetch('https://geo.api.gouv.fr/regions',{method: 'get'})
  .then( res => res.json())
  .then( (res) => {
    res.forEach(element => {
      // console.log(element.code);
      let result = document.createElement('option');
      result.textContent = element.nom;
      result.value = element.code;
      regions.appendChild(result);
    })
  })
  .catch( (err) => {
    return console.log(err);
  })
}

/**
 * Fonction qui permet d'afficher les départements de la région 
 * @param {String} regCode 
 */
function getDeparts(){
  clearTableau();
  let regCode = document.getElementById('regions').value;
  const departements = document.getElementById('departs');
    departements.textContent =  "";
  // const defaultValue = document.createElement('option');
  //   defaultValue.textContent = "---Choisissez un département---";
  //   departements.appendChild(defaultValue);

  fetch('https://geo.api.gouv.fr/regions/'+ regCode +'/departements',{method: 'get'})
  .then( res => res.json())
  .then( (res) => {
    res.forEach(departs => {
      // console.log(region.nom);
      let result = document.createElement('option');
      result.textContent = departs.nom;
      result.value = departs.code;
      departements.appendChild(result);
    })   
  })
  .catch( (err) => {
    return console.log(err);
  })
}

/**
 * Fonction qui permet d'afficher les villes en fonction du département selectionnés
 * @param {String} villeCode 
 */
function getVilles(){
  let departCode = document.getElementById('departs').value;
  let villes = document.getElementById('villes');
    villes.textContent = "";
   
  fetch('https://geo.api.gouv.fr/departements/'+ departCode +'/communes',{method: 'get'})
  .then( res => res.json())
  .then( (res) => {
    res.forEach(ville => {
      // console.log(region.nom);
      let result = document.createElement('option');
      result.textContent = ville.nom;
      result.value = ville.code;
      villes.appendChild(result);

    })   
  })
  .catch( (err) => {
    return console.log(err);
  })
}



function getInfosVille(){
  clearTableau();

  let departCode = document.getElementById('departs').value;
  let codeVille = document.getElementById('villes').value;
  let population = document.getElementById('population');

  fetch('https://geo.api.gouv.fr/departements/'+ departCode +'/communes',{method: 'get'})
  .then( res => res.json())
  .then( (res) => {
    let villeSelectionne;

    //On récupère l'objet complet de la ville selectionné dans l'input et on affiche son nom et sa population
    for(let i = 0; i < res.length; i++){
      if(res[i].code == codeVille){
        villeSelectionne = res[i];
        population.textContent = "La population de '" + villeSelectionne.nom + "' est de " + villeSelectionne.population;
      }
    // Pour chaques villes du département
    }
    res.forEach(ville => {

      // Utilisation d'une fonction de filtrage qui vérifie les codesPostaux entre ceux de la ville selectionnée, et ceux des villes dans la liste
      if(filtre(villeSelectionne.codesPostaux, ville.codesPostaux) !== -1){

        //stockage du code postale qui a matché dans une variable car on l'a en retour de fonction
        const cp = filtre(villeSelectionne.codesPostaux, ville.codesPostaux);

        //Ajout d'une ligne pour la ville et 3 colonnes avec les informations demandées
        let ligne = tabVilles.insertRow();
        let colNom = ligne.insertCell();
        let colCp = ligne.insertCell();
        let colPop = ligne.insertCell();
        let colMeteo = ligne.insertCell();

        //Ajout du contenu qui se trouve dans notre objet, et dans la variable
        colNom.textContent = ville.nom;
        colCp.textContent = cp;
        colPop.textContent = ville.population;
        colMeteo.innerHTML = '<button class="btn btn-dark" onclick="meteo(`'+ ville.nom + '`)">Voir Météo</button>';

        tabVilles.appendChild(ligne);
        
      }else{
        console.log('Aucune commune éxistante dans la base de données');
      }      
      
    })
  }).catch( (err) => {
    return console.log(err);
  })

}


/**
 * Permet de vérifier si un des codePostaux entre la ville selectionné et ceux dans la liste Match, si oui on fait un retour de ce code, sinon renvoi -1
 * @param {Array} selectionne 
 * @param {Array} objetFiltre 
 * @returns 
 */
function filtre(selectionne, objetFiltre){
  for(let i = 0; i < selectionne.length; i++){
    for(let j = 0; j < objetFiltre.length; j++){
      if(selectionne[i] == objetFiltre[j]){
        return selectionne[i];
      }
    }
  }
  return -1;
}


function clearTableau(){
  const tabVilles = document.getElementById('tabVilles');
  while(tabVilles.firstChild){
    tabVilles.removeChild(tabVilles.firstChild);
  };
}

function meteo(villeCible){
  console.log(villeCible);
  console.log(typeof(villeCible));
  localStorage.setItem('ville', villeCible);
  window.open('./meteo.html');
}

// Lancement de la récupération de données via l'API
getRegions();








