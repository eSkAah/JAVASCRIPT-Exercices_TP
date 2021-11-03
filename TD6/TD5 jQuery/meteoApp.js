let ville = localStorage.getItem('ville');

meteo(ville);

function meteo(newVille) {

  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + newVille + '&appid=b30c2e6abe71d24e67bcaca91b3046c7&units=metric';
  let villeInput = document.getElementById('ville');
  let temperatureInput = document.getElementById('temperature')

  fetch(url, {method: 'get'})
  .then(res => res.json())
  .then( (res) => {

    villeInput.textContent       = res.name;
    temperatureInput.textContent = res.main.temp;

  })
  .catch((err) => {
    console.log(err);
  })
    
}
  