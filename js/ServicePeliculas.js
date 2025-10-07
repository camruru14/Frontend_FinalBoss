const URL_API_PELICULAS = "http://localhost:8080/apiPeliculas";

export async function CargarTodo() {
    const res = await fetch(`${URL_API_PELICULAS}/getAll`)
    return res.json;
}

export async function GetById(id) {
    const res = await fetch(`${URL_API_PELICULAS}/getById/${id}`)
    return res.json;
}

export async function Agregar(json) {
    const res = await fetch(`${URL_API_PELICULAS}/postPelicula`, {
        headers: 'Content-Type'
    })
    return res.json;
}

export async function Actualizar(id, json) {
    const res = await fetch(`${URL_API_PELICULAS}`)
    return res.json;
}

export async function Eliminar(id) {
    const res = await fetch(`${URL_API_PELICULAS}`)
    return res.json;
}