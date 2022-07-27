import ItemCount from "./ItemCount";

const ItemListContainer = (greeting) => {
    const onAdd = () => {
        console.log ('producto agregado al carrito')
    }


    return (
        <div>
            <h3> {greeting} </h3>
            <ItemCount initial = {1} stock = {10} agregarCarrito = {onAdd}/>
        </div>
    )
}



export default ItemListContainer;