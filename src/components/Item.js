import React, { useState } from "react";
import ItemCount from "./ItemCount";


const Prod = ({producto}) => {
    const [message, setMessage] = useState (false)
    const {img, nombre, precio, stock} = producto

    const onAdd = (cantidad) => {
        setMessage ( `Se agregaron ${cantidad} productos`)
    } 

    // agregar una card para mostrar los productos 

}

