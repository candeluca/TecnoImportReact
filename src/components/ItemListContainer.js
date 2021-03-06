import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (greeting) => {

    const [listaProductos, setListaProductos] = useState ([])

    const onAdd = (cantidad ) => {
        console.log (`agregaste ${cantidad} productos al carrito`)
    }

    const productos = [ 
        {id: '01', name: 'Termo Stanley', price: '$10000', description:'lorem'},
        {id: '02', name: 'Apple Iphone', price: '$300000', description:'lorem'},
        {id: '03', name: 'Apple AirPods', price: '$60000', description:'lorem'},
        {id: '04', name: 'Apple MabBook', price: '$400000', description:'lorem'}
    ]


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
            <h3> {greeting} </h3>
            <ItemCount initial = {1} stock = {10} agregarCarrito = {onAdd}/>
            <ItemList listaProductos = {listaProductos}/> 
        </div>
    )
}



export default ItemListContainer;