
function atualizarTable(data, headers) {
    const CorpoTable = document.querySelector('#data-table tbody');
    const tableHeader = document.querySelector('#data-table thead tr');


    CorpoTable.innerHTML = '';
    tableHeader.innerHTML = '';

    if (data.length === 0) {
        const row = CorpoTable.insertRow();
        const cell = row.insertCell();
        cell.textContent = 'Nenhum resultado encontrado.';
    } else {
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            tableHeader.appendChild(th);
        });

        data.forEach(item => {
            const row = CorpoTable.insertRow();

            headers.forEach(header => {
                const cell = row.insertCell();
                cell.textContent = item[header.toLowerCase()];
            });

            row.addEventListener('click', function () {
                showDetailsModal(item);
            });
        });
    }
}

function showDetailsModal(item) {
    const modaltitulo = document.getElementById('details-modal-label');
    const modalContent = document.getElementById('details-content');

    modaltitulo.textContent = item.name || item.title;
    modalContent.innerHTML = '';

    const detailsList = document.createElement('ul');
    Object.entries(item).forEach(([key, value]) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
        detailsList.appendChild(listItem);
    });

    modalContent.appendChild(detailsList);

    $('#details-modal').modal('show');
}

function fetchData(url, headers) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            atualizarTable(data.results, headers);
        })
        .catch(error => {
            console.log('Erro ao obter os dados da API:', error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    const url = 'https://swapi.dev/api/films/';
    const headers = ['Title', 'Director', 'Producer'];
    fetchData(url, headers);
});

document.getElementById('people-link').addEventListener('click', function () {
    const url = 'https://swapi.dev/api/people/';
    const headers = ['Name', 'Height', 'Mass'];
    fetchData(url, headers);
});

document.getElementById('planets-link').addEventListener('click', function () {
    const url = 'https://swapi.dev/api/planets/';
    const headers = ['Name', 'Population', 'Gravity'];
    fetchData(url, headers);
});

document.getElementById('species-link').addEventListener('click', function () {
    const url = 'https://swapi.dev/api/species/';
    const headers = ['Name', 'Classification', 'Designation'];
    fetchData(url, headers);
});

document.getElementById('starships-link').addEventListener('click', function () {
    const url = 'https://swapi.dev/api/starships/';
    const headers = ['Name', 'Model', 'Passengers'];
    fetchData(url, headers);
});

document.getElementById('vehicles-link').addEventListener('click', function () {
    const url = 'https://swapi.dev/api/vehicles/';
    const headers = ['Name', 'Model', 'Passengers'];
    fetchData(url, headers);
});
