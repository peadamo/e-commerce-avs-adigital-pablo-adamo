import React from 'react';

const Item = ({name,price,id,setSelectedItem}) => {
const selectItem=()=>{setSelectedItem({name,price,id})}

  return <div>
      <h2>Nombre Producto: {name} </h2>
      <h2>Precio Producto: {price} </h2>
      <button onClick={selectItem}>Seleccionar Producto</button>
      <hr/>
  </div>;
};

export default Item;
  