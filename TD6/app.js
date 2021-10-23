// Créer trois liste déroulantes contenant régions, départements de la région sélectionnée,

// récupérer le Json des region de france et l'afficher dans le premier <select>


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
      document.getElementById('regions').appendChild(result);
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
  let regCode = document.getElementById('regions').value;
  let departements = document.getElementById('departs');
      departements.textContent =  "";

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
  let departCode = document.getElementById('departs').value;
  let codeVille = document.getElementById('villes').value;
  let population = document.getElementById('population');
  let tabVilles = document.getElementById('tabVilles');
      tabVilles.insertRow();
      tabVilles.firstChild.insertCell(3);

  console.log(codeVille);

  fetch('https://geo.api.gouv.fr/departements/'+ departCode +'/communes',{method: 'get'})
  .then( res => res.json())
  .then( (res) => {
    res.forEach(ville => {
      

      if(ville.code === codeVille){
        population.textContent = "La population de '" + ville.nom + "' est de " + ville.code;
        }
    })
  });



}

getRegions();








