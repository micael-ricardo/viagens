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