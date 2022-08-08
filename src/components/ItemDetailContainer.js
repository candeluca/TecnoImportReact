import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import productos from "../productos";


const ItemDetailContainer = () => {
    const [details, setDetails] = useState ({})
    const {loading, setLoading} = useState (true)

    const data = new Promise ((resolve, reject) => {

        setTimeout (()=> {
            if (true) {
                resolve (productos)
            }
            else {
                reject ('No se puede agregar, stock insuficiente')
            }
        }, 3000) 
    
    })
    
    useEffect (()=> {
        data
        .then((res)=> setDetails (res))
    }, []
    )    

    return (

    <div> 
        <ItemDetail details = {details} />
    </div>
)

}

export default ItemDetailContainer;