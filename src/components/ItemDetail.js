import React from "react";
import ItemCount from "./ItemCount";



const ItemDetail = ({details}) => {
    const {description} = details

    console.log (description)

return (
    <div className="list-group-item">
        {description}
    </div>
)
}


export default ItemDetail;