import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
const Productos = () => {
  // Estado para el input y la lista de items
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false); // Para controlar si estamos editando
  const [currentItemIndex, setCurrentItemIndex] = useState(null); // Para saber qué ítem se está editando
 
  // Función para manejar el cambio en el input
  const handleInputChange = (e) => {
    setItem(e.target.value);
  };


  // Función para agregar el item a la lista
  const addItem = () => {
    if (item.trim() !== '') {
      if (isEditing) {
        // Editar el ítem existente
        const updatedItems = items.map((it, index) =>
          index === currentItemIndex ? item : it  //Busca en todo el arreglo el valor de indice que coincide con el que pasamos y lo reemplaza por nuestro nuevo valor.
        );
        setItems(updatedItems);
        setIsEditing(false);
        setCurrentItemIndex(null);
      } 
      else
      {
        // Agregar un nuevo ítem
        setItems([...items, item]);
      }
      setItem(''); // Limpiar el input
    }
     else 
     {
      alert('No se puede agregar un ítem vacío');
    }
  };
  //Función para eliminar elementos de la lista
  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };
 
    // Función para editar un ítem
    const editItem = (index) => {
      setItem(items[index]); //carga en el campo de entrada el valor del arreglo que coincida con ese vector. Después cuando lo editas pasa la función de hanlde y finalmente 
                            // cuando aceptas presionando el boton va hacia addItem.
      setIsEditing(true);
      setCurrentItemIndex(index);
    };




  return (
    <div>
      <h2>Carrito de Compras</h2>
      <input
        type="text"
        value={item}
        onChange={handleInputChange}
        placeholder="Ingrese un ítem"
      />
      <button onClick={addItem}>Agregar a la lista</button>


      <ItemList items={items} onDeleteItem={deleteItem} onEditItem={editItem} //pasamos como propiedad la funcion onDeleteItem
      />
    </div>
  );
};


export default Productos;