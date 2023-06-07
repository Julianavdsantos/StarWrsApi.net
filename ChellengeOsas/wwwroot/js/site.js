
function atualizarTable(data, menu) {
  const CorpoTabela = document.querySelector('#data-table tbody');
  const tableHeader = document.querySelector('#data-table thead tr');
  
 
  CorpoTabela.innerHTML = '';
  tableHeader.innerHTML = '';
  
  if (data.length === 0) {
    const row = CorpoTabela.insertRow();
    const cell = row.insertCell();
    cell.textContent = 'Nenhum resultado encontrado.';
  } else {
    menu.forEach(header => {
      const th = document.createElement('th');
      th.textContent = header;
      tableHeader.appendChild(th);
    });
    
    data.forEach(item => {
      const row = CorpoTabela.insertRow();
      
      menu.forEach(header => {
        const cell = row.insertCell();
        cell.textContent = item[header.toLowerCase()];
      });
  
      row.addEventListener('click', function() {
        mostrarDetalhes(item);
      });
    });
  }
}

function mostrarDetalhes(item) {
  const modaltitulo = document.getElementById('details-modal-label');
  const modalContent = document.getElementById('details-content');

  modaltitulo.textContent = item.name || item.title; 
  modalContent.innerHTML = ''; 

  const listardetalhes = document.createElement('ul');
  Object.entries(item).forEach(([key, value]) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${key}:</strong> ${value}`;
    listardetalhes.appendChild(listItem);
  });

  modalContent.appendChild(listardetalhes);

  $('#details-modal').modal('show'); 
}
//mostrar menu correspondente
function buscarNaApi(url, headers) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      atualizarTable(data.results, headers);
    })
    .catch(error => {
      console.log('Erro ao obter os dados da API:', error);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  const url = 'https://swapi.dev/api/films/';
  const headers = ['Title', 'Director', 'Producer'];
  buscarNaApi(url, headers);
});

document.getElementById('people-link').addEventListener('click', function() {
  const url = 'https://swapi.dev/api/people/';
  const headers = ['Name', 'Height', 'Mass'];
  buscarNaApi(url, headers);
});

document.getElementById('planets-link').addEventListener('click', function() {
  const url = 'https://swapi.dev/api/planets/';
  const headers = ['Name', 'Population', 'Gravity'];
  buscarNaApi(url, headers);
});

document.getElementById('species-link').addEventListener('click', function() {
  const url = 'https://swapi.dev/api/species/';
  const headers = ['Name', 'Classification', 'Designation'];
  buscarNaApi(url, headers);
});

document.getElementById('starships-link').addEventListener('click', function() {
  const url = 'https://swapi.dev/api/starships/';
  const headers = ['Name', 'Model', 'Passengers'];
  buscarNaApi(url, headers);
});

document.getElementById('vehicles-link').addEventListener('click', function() {
  const url = 'https://swapi.dev/api/vehicles/';
  const headers = ['Name', 'Model', 'Passengers'];
  buscarNaApi(url, headers);
});
