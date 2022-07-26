import ItemCount from "./ItemCount";

const ItemListContainer = (greeting) => {

    return (
        <div>
            <h3> {greeting} </h3>
            <ItemCount/>
        </div>
    )
}



export default ItemListContainer;