import React, { useContext, useState } from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const [count, setCount] = useState(0);
    const [carrito, setCarrito] = useState (true);
    const {id, name, price, description, img} = producto;
    const {addToCart} = useContext ();

    const onAdd = () => {
        let productToBuy = { id, name, price, description, img}
    }

return (
    <div style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
    {producto.map ((producto)=> <Item key = {producto.id} producto = {producto}/>)}
    
    <ItemCount stock={10} initial={1} />
    </div>
)
}


export default ItemDetail;