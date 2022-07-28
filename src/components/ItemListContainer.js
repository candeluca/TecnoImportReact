import ItemCount from "./ItemCount";

    const ItemListContainer = (greeting) => {


    const onAdd = (cantidad ) => {
        console.log (`agregaste ${cantidad} productos al carrito`)
    }

    const productos = [ 
        {id: '01', name: 'Termo Stanley', precio: '$10000', }
    ]


    const data = new Promise ((resolve, reject) => {

        let condition = true

        setTimeout (()=> {
            if (condition) {
                resolve ('Hay stock, su producto fue agregado')
            }
            else {
                reject ('No se puede agregar, stock insuficiente')
            }
        }, 3000)

    })

    console.log (data)

    return (
        <div>
            <h3> {greeting} </h3>
            <ItemCount initial = {1} stock = {10} agregarCarrito = {onAdd}/>
        </div>
    )
}



export default ItemListContainer;