<?php

function almacenarProductos(){
    $id = $_POST['id'];
    $title = $_POST['title'];
    $permalink = $_POST['permalink'];
    $thumbnail = $_POST['thumbnail'];
    $price = $_POST['price'];
    $resultado = (new Productos())->almacenarProductos($id, $title, $permalink, $thumbnail,$price);
    echo json_encode($resultado);
}



function actualizarProductos(){
    
}


?>