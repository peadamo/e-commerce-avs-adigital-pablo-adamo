import React from 'react';
import CartIcon from '../../icon/CartIcon';
import Item from '../item/Item';

const items = [
    { id: "1", name: "jorgito", price: "80" },
    { id: "2", name: "gualmayen", price: "30" },
    { id: "3", name: "aguila", price: "150" },
    { id: "4", name: "capitan del espacio", price: "10" }
]

const ItemListConteiner = () => {
    return <div>

<h1>Item List Container</h1>
<hr/>
        {items.map(({id,name,price}) => (
        <Item key={id} name={name} price={price}/>
        ))}
    </div>;
};

export default ItemListConteiner;
 