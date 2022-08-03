import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import ItemListContainer from "./ItemListContainer";

const ItemDetailContainer = () => {
    const [details, setDetails] = useState ({})
    const {loading, setLoading} = useState (true)
}


const productos = [  
        {id: '01', name: 'Termo Stanley', price: '$10000', description:'lorem', img: 'https://www.carrefour.com.ar/termo-stanley-adventure-blanco-1-l-1-u/p'},
        {id: '02', name: 'Apple Iphone', price: '$300000', description:'lorem', img: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1645036276543'},
        {id: '03', name: 'Apple AirPods', price: '$60000', description:'lorem', img: 'https://www.apple.com/v/airpods-pro/f/images/meta/og__ch3csr9zmviq_overview.png?202205060638'},
        {id: '04', name: 'Apple MabBook', price: '$400000', description:'lorem', img: 'https://www.macstation.com.ar/img/productos/small/2212-2134-8.jpg'}
    ]

    return (

    <div> 
        <ItemDetail producto = {producto.description} />
    </div>
)

export default ItemDetailContainer;