
window.onload = async () => {
    let productos = await obtenerProductos();
    console.log(productos);
    Mostrar(productos);
 
}


function Mostrar(productos) {
    let tbodyElement = document.querySelector("#datos");
    productos.forEach((producto) => {
        let trELement = document.createElement("tr");
        trELement.innerHTML = `


      <td>${producto.title}</td>
      <td>${producto.permalink}</td>
      <td>${producto.thumbnail}</td>
      <td>${producto.price}</td>
   
 `;
        let buttonElement = document.createElement("button");
        buttonElement.onclick = () => {
            guardarProducto(producto)

        }
        trELement.appendChild(buttonElement);
        buttonElement.innerHTML = 'Guardar';

        tbodyElement.appendChild(trELement);
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


async function guardarProducto(producto) {
    console.log(producto);
    let formData = new FormData();
    formData.append("id", producto.id);
    formData.append("title", producto.title);
    formData.append("permalink", producto.permalink);
    formData.append("thumbnail", producto.thumbnail);
    formData.append("price", producto.price);

    let config = {
        method: 'POST',
        body: formData,
    }
    let url = '../../backend/controller/productoController.php';

    let respuesta = await fetch(url, config);
    let datos = await respuesta.json();
    console.log(datos);
}


