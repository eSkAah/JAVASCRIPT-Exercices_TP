let dataCities;
$('#details').css('display', 'none');

const selRegions = $('#regions');
const selDepts = $('#departments');
const selCities = $('#cities');

selRegions.on('change', function () {
  getDepartments($(this));
});
selDepts.on('change', function () {
  getCities($(this));
});
selCities.on('change', function () {
  citySelected($(this));
});

$('#btn-weather').on('click', function () {
  location.href = './td6_meteo.html';
});

getRegions();

/**
 * Appel de l'API gouvernementale
 *
 * @param url : l'url, selon le cas, pour les données de régions/départements/communes
 * @param oneSelect : la balise select à remplir
 * @param callbackFunction : la fonction à appeler suite à la mise à jour du select ( = le select suivant)
 */
function fetchGeoApi(url, oneSelect, callbackFunction) {
  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function (json) {
      if (url.endsWith('communes')) {
        dataCities = json;
      }
      let options = '';
      for (const oneData of json) {
        options +=
          "<option value='" + oneData.code + "'>" + oneData.nom + '</option>';
      }
      oneSelect.html(options);
      callbackFunction(oneSelect);
    },
    error: function (object, status, error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch : " + error.message
      );
    },
  });
}

function getRegions() {
  fetchGeoApi('https://geo.api.gouv.fr/regions', $('#regions'), getDepartments);
}

function getDepartments(regionSelect) {
  fetchGeoApi(
    'https://geo.api.gouv.fr/regions/' + regionSelect.val() + '/departements',
    $('#departments'),
    getCities
  );
}

function getCities(dptSelect) {
  fetchGeoApi(
    'https://geo.api.gouv.fr/departements/' + dptSelect.val() + '/communes',
    $('#cities'),
    citySelected
  );
}

function citySelected(citySelect) {
  // Exercice 1.2
  $('#details').css('display', 'inline');
  let population = dataCities[citySelect.prop('selectedIndex')].population;
  $('#population').text(
    population === undefined ? '[Donnée non disponible]' : population
  );

  // Exercice 1.3 FOREACH, FILTER, MAP, REDUCE, INCLUDES
  let tableCities = $('#tdata');
  tableCities.html('');

  let arrayCPReference =
    dataCities[citySelect.prop('selectedIndex')].codesPostaux;
  let filteredArray = dataCities.filter((value) =>
    arrayCPReference.includes(value.codesPostaux[0])
  );
  let data = '';
  filteredArray.forEach((element) => {
    let population =
      element.population === undefined ? '--' : element.population;
    data += `<tr><td>${element.nom}</td><td>${element.codesPostaux[0]}</td><td>${population}</td></tr>`;
  });
  tableCities.html(data);
  let total = filteredArray
    .map((element) => element.population)
    .reduce((elt1, elt2) => elt1 + elt2);

  $('#total').text(isNaN(total) ? '[Donnée non disponible]' : total);

  // Preparation Exercice 2
  sessionStorage.setItem(
    'cityName',
    dataCities[citySelect.prop('selectedIndex')].nom
  );
}
