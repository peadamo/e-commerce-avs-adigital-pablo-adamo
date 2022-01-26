import React from 'react';

const Item = ({name,price}) => {
  return <div>
      <h2>Nombre Producto: {name} </h2>
      <h2>Precio Producto: {price} </h2>
      <hr/>
  </div>;
};

export default Item;
  