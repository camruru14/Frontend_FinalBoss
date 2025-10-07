import{
    CargarTodo,
    GetById,
    Agregar,
    Actualizar,
    Eliminar
}from "../js/ServicePeliculas.js"

const div_cards = document.getElementById("div_cards");


    //Funciones Service
    async function CargarTodasPeliculas() {
        try {
            const res = await CargarTodo();
            LlenarTarjetas(res);
        } catch (err) {
            console.error("Hubo problemas cargando las peliculas", err);
            Swal.fire({
                icon: "error",
                title: "Hubo problemas cargando las peliculas",
                position: "top-end",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    async function BuscarPorID(id) {
        try {
            const res = await BuscarPorID(id);
            console.log(res);
            return res;
        } catch (err) {
            console.error("Hubo problemas cargando la pelicula", err);
            Swal.fire({
                icon: "error",
                title: "Hubo problemas cargando la pelicula",
                position: "top-end",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
    async function EliminarPelicula(id) {
        try {
            const res = await Eliminar(id);
            console.log(res);
            if(res.ok){
                
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Hubo problemas cargando las peliculas",
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (err) {
            console.error("Hubo problemas cargando las peliculas", err);
            Swal.fire({
                icon: "error",
                title: "Hubo problemas cargando las peliculas",
                position: "top-end",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    async function LlenarTarjetas(Peliculas) {
        if(Peliculas.lenght == 0){
            div_cards.innerHTML = '';
            return
        }

        div_cards.innerHTML = '';
        Peliculas.forEach(pelicula => {
            div_cards.innerHTML += `
                <div class="cards">
                    <div class="card_Header">
                        <h2>${pelicula.titulo}</h2>
                    </div>
                    <div class="card_details">
                        <div>
                            <h4>Director:</h4>
                            <h3>${pelicula.director}</h3>
                        </div>
                        <div>
                            <h4>Genero:</h4>
                            <h3>${pelicula.genero}</h3>
                        </div>
                        <div>
                            <h4>Año de Esteno:</h4>
                            <h3>${pelicula.anio_estreno}</h3>
                        </div>
                        <div>
                            <h4>Duracion en Minutos:</h4>
                            <h3>${pelicula.duracion_min}</h3>
                        </div>
                        <div>
                            <h4>Fecha de Creacion:</h4>
                            <h3>${pelicula.fecha_creacion}</h3>
                        </div>
                    </div>
                    <div class="btnCenter">
                        <button type="button" onclick="ActualizarPelicula(${pelicula.id})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Actualizar</button>
                        <button type="button" onclick="EliminarPelicula(${pelicula.id})" class="btn btn-danger">Borrar</button>
                    </div>
                </div>
            `;
        });
    }

    function CargaInicial(){
        CargarTodasPeliculas();
    }

document.addEventListener('DOMContentLoaded', CargaInicial);
