import { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = (greeting) => {

    const [listaProductos, setListaProductos] = useState ([])

    const onAdd = (cantidad ) => {
        console.log (`agregaste ${cantidad} productos al carrito`)
    }

    const productos = [  
        {id: '01', name: 'Termo Stanley', price: '$10000', description:'lorem', img: 'https://www.carrefour.com.ar/termo-stanley-adventure-blanco-1-l-1-u/p'},
        {id: '02', name: 'Apple Iphone', price: '$300000', description:'lorem', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1645036276543'},
        {id: '03', name: 'Apple AirPods', price: '$60000', description:'lorem', img: 'https://www.apple.com/v/airpods-pro/f/images/meta/og__ch3csr9zmviq_overview.png?202205060638'},
        {id: '04', name: 'Apple MabBook', price: '$400000', description:'lorem', img: 'https://www.macstation.com.ar/img/productos/small/2212-2134-8.jpg'}
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