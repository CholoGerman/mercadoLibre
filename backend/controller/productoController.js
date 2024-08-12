 
export default class ProductosController{

    productoDAO;

    constructor(){
        this.productoDAO = new ProductosDAO();
    }
    async  obtenerProductos(){
        return await this.productoDAO.obtenerProductos();
    }
}
