// AutoComplete Para cidade chamada via API nominatim

$(document).ready(function () {
  var nominatimEndpoint = 'https://nominatim.openstreetmap.org/search';
  var inputOrigin = $('#origin');

  inputOrigin.autocomplete({
    source: function (request, response) {
      var origin = request.term.trim();
      var url = `${nominatimEndpoint}?q=${origin}+airport&format=json`;
      $.get(url).done(function (data) {
        var options = [];

        if (data.length > 0) {
          for (var i = 0; i < data.length; i++) {
            var result = data[i];
            var address = result.display_name.split(', ');
            var cityName = address[address.length - 4];
            var airportName = address[0];
            var optionValue = `${cityName}, ${airportName}`;
            options.push(optionValue);
          }
        }

        response(options);
      })
        .fail(function (error) {
          console.error('Erro ao pesquisar a origem:', error);
        });
    }
  });
});


$(document).ready(function () {
  var nominatimEndpoint = 'https://nominatim.openstreetmap.org/search';
  var inputOrigin = $('#partida');

  inputOrigin.autocomplete({
    source: function (request, response) {
      var origin = request.term.trim();
      var url = `${nominatimEndpoint}?q=${origin}+airport&format=json`;
      $.get(url).done(function (data) {
        var options = [];

        if (data.length > 0) {
          for (var i = 0; i < data.length; i++) {
            var result = data[i];
            var address = result.display_name.split(', ');
            var cityName = address[address.length - 4];
            var airportName = address[0];
            var optionValue = `${cityName}, ${airportName}`;
            options.push(optionValue);
          }
        }

        response(options);
      })
        .fail(function (error) {
          console.error('Erro ao pesquisar a origem:', error);
        });
    }
  });
});

// fim AutoComplete Cidades

// Calendario mas inserção da data atual no calendario se não ouver click
var DataPartida = document.querySelector('#data-partida');
var DataRetorno = document.querySelector('#data-retorno');
var today = new Date();

DataPartida.value = today.toISOString().slice(0, 10);
DataRetorno.value = today.toISOString().slice(0, 10);

flatpickr(DataPartida, {
  dateFormat: 'd-m-Y',
  locale: 'pt'
});

flatpickr(DataRetorno, {
  dateFormat: 'd-m-Y',
  locale: 'pt'
});



document.getElementById("searchBtn").addEventListener("click", function (event) {
  event.preventDefault(); // Evita que o formulário seja enviado

  // Obter os valores dos campos de formulário
  var origin = document.getElementById("origin").value;
  var destination = document.getElementById("partida").value;
  var departureDate = document.getElementById("data-partida").value;
  var returnDate = document.getElementById("data-retorno").value;
  var adults = document.getElementById("adultos").value;
  var children = document.getElementById("criancas").value;
  var infants = document.getElementById("bebes").value;
  var cabin = document.getElementById("cabine").value;
  var directFlights = document.getElementById("vooDireto").checked;

  axios.get('https://cors-anywhere.herokuapp.com/https://api.skypicker.com/flights', {
    params: {
      fly_from: origin,
      fly_to: destination,
      date_from: departureDate,
      date_to: returnDate,
      adults: adults,
      children: children,
      infants: infants,
      cabin_class: cabin,
      direct_flights: directFlights ? 1 : 0,
      apikey: 'UqMmCsWaHLIwdYMC0oFDTMaVzprpz4AH'
    }
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});