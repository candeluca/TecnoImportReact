import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import productos from "../productos";


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState ({})
    const {loading, setLoading} = useState (true)


    const getOneProduct = (id) => {

        resolve (productos)
        .then ((res) =>setProduct (res.find((item)=> item.id ==id)))
        .finally (()=> setLoading (false));
        
    }, [id]) ;

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
        .then((res)=> setProduct (res))
    }, []
    )    

    return (

    <div>
        {details && 
        <ItemDetail product={product} />
        }
    </div>
 
)

}

export default ItemDetailContainer; 