import React from 'react';


const ItemList = ({ items, onDeleteItem, onEditItem }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item.nombre}(Cantidad :{item.cantidad}) {/*muestra el nombre y la cantidad*/ }
          <button onClick={() => onDeleteItem(index)}>Eliminar</button>
          <button onClick={() => onEditItem(index)}>Editar</button>
        </li>
        //Cada vez que ItemList recibe un nuevo arreglo de items como propiedad (cuando el estado items cambia en el componente padre), vuelve a renderizar la lista.
        //React utiliza virtual DOM,  React compara el nuevo Virtual DOM con el anterior, y solo agrega el nuevo <li> en el DOM real sin afectar los otros elementos.
        ))}
    </ul>
  );
};


export default ItemList;