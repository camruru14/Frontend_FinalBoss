const URL_API_PELICULAS = "http://localhost:8080/apiPeliculas";
 
export async function CargarTodo() {
    const res = await fetch(`${URL_API_PELICULAS}/getAll`);
    const data = await res.json();
    return data;
}
 
export async function GetById(id) {
    const res = await fetch(`${URL_API_PELICULAS}/getById/${id}`)
    const data = await res.json();
    return data;
}
 
export async function Agregar(json) {
    return await fetch(`${URL_API_PELICULAS}/postPelicula`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    });
}
 
 
export async function Actualizar(id, json) {
    return await fetch(`${URL_API_PELICULAS}/putPelicula/${id}`, {
        method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    });
}
 
export async function Eliminar(id) {
    return await fetch(`${URL_API_PELICULAS}/deletePelicula/${id}`, {
        method: "DELETE"
    })
}