
window.onload = async () => {
    let productos = await obtenerProductos();
    console.log(productos);
    verProductos();
    Mostrar(productos);

}
async function verProductos() {
    let url = "../../../backend/controller/productoController.php?funcion=obtener";
    let respuesta = await fetch(url);
    let datos = await respuesta.json()
    console.log(datos);

}

function Mostrar(productos) {
    let tbodyElement = document.querySelector("#datos");
    productos.forEach((producto) => {
        tbodyElement.innerHTML += `

    <tr>
      <td>${producto.title}</td>
      <td>${producto.permalink}</td>
      <td>${producto.thumbnail}</td>
      <td>${producto.price}</td>
      <td><input type="submit" value="Guardar en MySql"></td>
    </tr>
   
 `;
    }
    )
}

async function obtenerProductos() {
    let url = `https://api.mercadolibre.com/sites/MLU/search?category=MLU1144`;
    let consulta = await fetch(url);
    let datos = await consulta.json();
    let productos = datos.results;
    return productos;


}
