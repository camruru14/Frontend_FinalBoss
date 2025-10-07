import{
    CargarTodo,
    GetById,
    Agregar,
    Actualizar,
    Eliminar
}from "../js/ServicePeliculas.js"

document.addEventListener('DOMContentLoaded', cargarDatosDeAPI);

function cargarDatosDeAPI() {
}

function cargarDatosDeAPI() {
    const API_URL = '';
 
    const tbody = document.getElementById('cuerpoTablaPeliculas');
    
    if (API_URL === '') {
        tbody.innerHTML = '<tr><td colspan="6" class="text-danger">❌ Error: Por favor, reemplaza "TU_URL_DE_API_AQUI" con la URL real de tu API.</td></tr>';
        return;
    }
 
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la red: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            data.forEach(item => {
                const row = tbody.insertRow();
                
                
                row.insertCell().textContent = item.id;
                row.insertCell().textContent = item.titulo;
                row.insertCell().textContent = item.genero;
                row.insertCell().textContent = item.director;
                row.insertCell().textContent = item.anio_estreno;
                const fecha = new Date(item.fecha_creacion).toLocaleDateString();
                row.insertCell().textContent = fecha;
            });
        })
        .catch(error => {
            console.error('Hubo un problema al cargar los datos:', error);
            tbody.innerHTML = `<tr><td colspan="6" class="text-danger">Error al cargar datos: ${error.message}</td></tr>`;
        });
}
