import React, { useContext, useState } from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    const [count, setCount] = useState(0);
    const [carrito, setCarrito] = useState ();
    const {id, name, price, description, img} = producto;
    const {addToCart} = useContext ();
    const navigate = useNavigate ();

    const onAdd = () => {
        let productToBuy = { id, name, price, description, img, quantityToAdd: count}; setCarrito (true); addToCart (productToBuy)
    }

return (
    <div style = {{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
    {producto.map ((producto)=> <Item key = {producto.id} producto = {producto}/>)}

    <div> 
        <button onClick={ () => navigate ('../productos')}>
            Seguir comprando
        </button>
    </div>
    
    <ItemCount stock={10} initial={1} />
    </div>
)
}


export default ItemDetail;