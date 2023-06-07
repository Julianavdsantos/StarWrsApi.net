let films, people, planets;

$(document).ready(function () {
    
    $('#films').click(function () {
        $.ajax({
            url: 'https://swapi.dev/api/films/',
            type: 'GET',
            success: function (data) {
                films = data.results;
                var html = '<table>';
                html += '<tr>';
                html += '<th>Name</th>';
                html += '<th>director</th>';
                html += '<th>producer</th>';
                html += '<th>data</th>';
                html += '</tr>';

                for (var i = 0; i < films.length; i++) {
                    var film = films[i];
                    html += '<tr>';
                    html += '<td class="modal-link" data-json="' + i + '">' + film.title + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + film.director + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + film.producer + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + film.release_date + '</td>';
                    html += '</tr>';
                }

                html += '</table>';

                $('#table').html(html);
            },
            error: function () {
                console.log('Erro ao obter os dados da API.');
            }
        });
    });

    $('#people').click(function () {
        $.ajax({
            url: 'https://swapi.dev/api/people/',
            type: 'GET',
            success: function (data) {
                people = data.results;
                var html = '<table>';
                html += '<tr>';
                html += '<th>Name</th>';
                html += '<th>Birth Year</th>';
                html += '<th>Films</th>';
                html += '<th>Homeworld</th>';
                html += '</tr>';

                for (var i = 0; i < people.length; i++) {
                    var person = people[i];
                    html += '<tr>';
                    html += '<td class="modal-link" data-json="' + i + '">' + person.name + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + person.birth_year + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + person.films.length + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + person.homeworld + '</td>';
                    html += '</tr>';
                }

                html += '</table>';

                $('#table').html(html);
            },
            error: function () {
                console.log('Erro ao obter os dados da API.');
            }
        });
    });

    $('#planets').click(function () {
        $.ajax({
            url: 'https://swapi.dev/api/planets/',
            type: 'GET',
            success: function (data) {
                planets = data.results;
                var html = '<table>';
                html += '<tr>';
                html += '<th>Name</th>';
                html += '<th>Population</th>';
                html += '<th>Gravity</th>';
                html += '<th>Films</th>';
                html += '</tr>';

                for (var i = 0; i < planets.length; i++) {
                    var planet = planets[i];
                    html += '<tr>';
                    html += '<td class="modal-link" data-json="' + i + '">' + planet.name + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + planet.population + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + planet.gravity + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + planet.films.length + '</td>';
                    html += '</tr>';
                }

                html += '</table>';

                $('#table').html(html);
            },
            error: function () {
                console.log('Erro ao obter os dados da API.');
            }
        });
    });

    $('#species').click(function () {
        $.ajax({
            url: 'https://swapi.dev/api/species/',
            type: 'GET',
            success: function (data) {
                species = data.results;
                var html = '<table>';
                html += '<tr>';
                html += '<th>Name</th>';
                html += '<th>classification</th>';
                html += '<th>language</th>';
                html += '<th>designation</th>';
                html += '</tr>';

                for (var i = 0; i < films.length; i++) {
                    var specie = species[i];
                    html += '<tr>';
                    html += '<td class="modal-link" data-json="' + i + '">' + specie.name + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + specie.classification + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + specie.language + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + specie.designation + '</td>';
                    html += '</tr>';
                }

                html += '</table>';

                $('#table').html(html);
            },
            error: function () {
                console.log('Erro ao obter os dados da API.');
            }
        });
    });
    $('#starships').click(function () {
        $.ajax({
            url: 'https://swapi.dev/api/starships/',
            type: 'GET',
            success: function (data) {
                starships = data.results;
                var html = '<table>';
                html += '<tr>';
                html += '<th>Name</th>';
                html += '<th>model</th>';
                html += '<th>passengers</th>';
                html += '<th>passengers</th>';
                html += '</tr>';

                for (var i = 0; i < starships.length; i++) {
                    var starship = starships[i];
                    html += '<tr>';
                    html += '<td class="modal-link" data-json="' + i + '">' + starship.name + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + starship.model + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + starship.passengers + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + starship.passengers + '</td>';
                    html += '</tr>';
                }

                html += '</table>';

                $('#table').html(html);
            },
            error: function () {
                console.log('Erro ao obter os dados da API.');
            }
        });
    });

    $('#vehicles').click(function () {
        $.ajax({
            url: 'https://swapi.dev/api/vehicles/',
            type: 'GET',
            success: function (data) {
                vehicles = data.results;
                var html = '<table>';
                html += '<tr>';
                html += '<th>Name</th>';
                html += '<th>model</th>';
                html += '<th>passengers</th>';
                html += '<th>length</th>';
                html += '</tr>';

                for (var i = 0; i < vehicles.length; i++) {
                    var vehicle = vehicles[i];
                    html += '<tr>';
                    html += '<td class="modal-link" data-json="' + i + '">' + vehicle.name + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + vehicle.model + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + vehicle.passengers + '</td>';
                    html += '<td class="modal-link" data-json="' + i + '">' + vehicle.length + '</td>';
                    html += '</tr>';
                }

                html += '</table>';

                $('#table').html(html);
            },
            error: function () {
                console.log('Erro ao obter os dados da API.');
            }
        });
    });

    $(document).on('click', '.modal-link', function () {
        var rowIndex = $(this).data('json');
        var jsonData;

        if ($('#films').hasClass('active')) {
            let teste = people;
           
            jsonData = films[rowIndex];
            console.log(teste);
            console.log(jsonData);
            var html = '<table>';
            html += '<tr><th>Name</th><th>Value</th></tr>';
            html += '<tr><td>Height</td><td>' + jsonData.title + '</td></tr>';
            html += '<tr><td>Homeworld</td><td>' + jsonData.episode + '</td></tr>';
            html += '<tr><td>Films</td><td>' + jsonData.director + '</td></tr>';
            html += '</table>';
            $('#modalData').html(html);
        } else if ($('#planets').hasClass('active')) {
            jsonData = planets[rowIndex];
            var html = '<table>';
            html += '<tr><th>Name</th><th>Value</th></tr>';
            html += '<tr><td>Population</td><td>' + jsonData.population + '</td></tr>';
            html += '<tr><td>Gravity</td><td>' + jsonData.gravity + '</td></tr>';
            html += '<tr><td>Films</td><td>' + jsonData.films.length + '</td></tr>';
            html += '</table>';
            $('#modalData').html(html);
        }

        $('#myModal').css('display', 'block');
    });

    // Fechar modal ao clicar no botão de fechar
    $(document).on('click', '.close', function () {
        $('#myModal').css('display', 'none');
    });
});
