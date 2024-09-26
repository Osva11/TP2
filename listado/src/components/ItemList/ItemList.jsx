import React from 'react';
import '../../App.css';
const ItemList = ({ items, onDeleteItem, onEditItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} className="lista-item">
          <span className="item-nombre">{item.nombre} (Cantidad: {item.cantidad})</span>
          <div className="botones">
            <button onClick={() => onEditItem(index)} className="btn editar">Editar</button>
            <button onClick={() => onDeleteItem(index)} className="btn eliminar">Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
  );
};


export default ItemList;