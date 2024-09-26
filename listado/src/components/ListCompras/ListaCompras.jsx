import React from 'react';


const ItemList = ({ items, onDeleteItem, onEditItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => onDeleteItem(index)}>Eliminar</button>
          <button onClick={() => onEditItem(index)}>Editar</button>
        </li>
      ))}
    </ul>
  );
};


export default ItemList;