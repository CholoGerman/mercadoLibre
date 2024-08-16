<?php
class productos{
function almacenarProductos($id, $title, $permalink, $thumbnail,$price){
        $sql = "INSERT INTO productos(id, title, permalink, thumbnail, price ) VALUES('$id', '$title','$permalink', '$thumbnail', '$price');";
        $connection = connection();
        $respuesta = $connection->query($sql);
        if($respuesta==false){
                echo "Error al almacenar el producto";
                return false;
        }
        if($connection->errno==1060){
                $respuesta=$this->actualizarProductos($id, $title, $permalink, $thumbnail,$price);
        }
        return $respuesta;
}

function actualizarProductos($id, $title, $permalink, $thumbnail,$price){
        $sql = "INSERT INTO productos(id, title, permalink, thumbnail, price ) VALUES('$id', '$title','$permalink', '$thumbnail', '$price');";
        $connection = connection();
        $respuesta = $connection->query($sql);
        return $respuesta;
}


}

?>