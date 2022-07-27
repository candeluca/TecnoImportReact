import React, { useState } from "react";

const ItemCount = ({initial, stock}) => {
    const [contador, setContador] = useState (initial)
    console.log('me renderice')
    const sumar = () => {
        setContador(contador + 1)
    }
    return (
        <div> 
            <span> {contador} </span>
            <button onClick={sumar}> + </button>
        </div>
    )
}

export default ItemCount; 