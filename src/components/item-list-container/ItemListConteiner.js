import React, { useState } from 'react';
import Item from '../item/Item';

const items = [
    { id: "1", name: "jorgito", price: "80" },
    { id: "2", name: "gualmayen", price: "30" },
    { id: "3", name: "aguila", price: "150" },
    { id: "4", name: "capitan del espacio", price: "10" }
]

const ItemListConteiner = () => {

const [selectedItem,setSelectedItem]=useState(null)

    return <div>

        <h1>Item List Container</h1>
        <h3>Producto Seleccionado</h3>
        <p>{selectedItem ? selectedItem.id:"ninguno"}</p>
        <p>{selectedItem ? selectedItem.name:"ninguno"}</p>
        <p>{selectedItem ? selectedItem.price:"ninguno"}</p>

        <hr />
        {items.map(({ id, name, price }) => (
            <Item 
            key={id} 
            name={name} 
            price={price}
            id={id}
            setSelectedItem={setSelectedItem} 
            />
        ))}
    </div>;
};

export default ItemListConteiner;
