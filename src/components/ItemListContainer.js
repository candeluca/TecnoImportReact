import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import productos from "../productos";

const ItemListContainer = () => {

    const [listaProductos, setListaProductos] = useState ([])

    const onAdd = (cantidad ) => {
        console.log (`agregaste ${cantidad} productos al carrito`)
    }


    const data = new Promise ((resolve, reject) => {

        let condition = true

        setTimeout (()=> {
            if (condition) {
                resolve (productos)
            }
            else {
                reject ('No se puede agregar, stock insuficiente')
            }
        }, 3000) 

    })


    useEffect (()=> {
        data
        .then((res)=> setListaProductos (res))
    }, [])

    console.log (listaProductos)

    return (
        <div>
            <ItemCount initial = {1} stock = {10} agregarCarrito = {onAdd}/>
            <ItemList listaProductos = {listaProductos}/> 
        </div>
    )
}



export default ItemListContainer;