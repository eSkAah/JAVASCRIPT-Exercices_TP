$('#btn-back').on('click', function () {
  location.href = 'td6_geo.html';
});

let cityName = sessionStorage.getItem('cityName');
$('#cityName').text(cityName);
weather(cityName);

function weather(cityName) {
  let appid = '01cd2a43a52ecaee81d9f9b7af4fa448';

  $.ajax({
    url:
      'http://api.openweathermap.org/data/2.5/weather?q=' +
      cityName +
      ',fr&units=metric&lang=fr&appid=' +
      appid,
    type: 'GET',
    dataType: 'json',
    success: function (json) {
      displayData(json);
    },
    error: function (object, status, error) {
      console.log(
        "Il y a eu un problème avec l'opération fetch : " + error.message
      );
      displayData(null);
    },
  });
}

function displayData(json) {
  if (json && json.weather) {
    $('#weather').text(json.weather[0].description);
    $('#pct').text(json.main.humidity + '%');
    $('#felt').text(json.main.feels_like + '°C');
    $('#temperature').text(json.main.temp + '°C');
    $('#min').text(json.main.temp_min + '°C');
    $('#max').text(json.main.temp_max + '°C');
  } else {
    $('#details').css('display', 'none');
    $('#error').css('display', 'block');
  }
}
