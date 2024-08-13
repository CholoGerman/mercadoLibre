<?php
class productos{
function almacenarProductos($id, $title, $permalink, $thumbnail,$price){
        $sql = "INSERT INTO Productos(id, title, permalink, thumbnail, price ) VALUES('$id', '$title','$permalink', '$thumbnail', '$price');";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
}

function actualizarProductos(){
    
}


}

?>