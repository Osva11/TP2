import React, { useState } from 'react';
import ItemList from '../ItemList/ItemList';
import DeleteAllButton from '../DeleteAllButton/DeleteAllButton';
import '../../App.css';



const Productos = () => {

  
  // Estado para el input y la lista de items
  const [item, setItem] = useState('');
  const [items, setItems] = useState([]);
  const [cantidad, setCantidad] = useState(1);
  const [isEditing, setIsEditing] = useState(false); // Para controlar si estamos editando
  const [currentItemIndex, setCurrentItemIndex] = useState(null); // Para saber qué ítem se está editando, guardando el index.
 



  // Función para manejar el cambio en el input
  const handleInputChange = (e) => {
    setItem(e.target.value);
  };

  const handleCantidadChange = (e) => {
    setCantidad(e.target.value);
  };




  // Función para agregar el item a la lista
  const addItem = () => {
    if (item.trim() !== '') {
      if (isEditing) {
        // Editar el ítem existente
        const updatedItems = items.map((it, index) =>
          index === currentItemIndex ? { nombre: item, cantidad } : it //Busca en todo el arreglo el valor de indice que coincide con el que pasamos y lo reemplaza por nuestro nuevo valor.
        );
        setItems(updatedItems);
        setIsEditing(false);
        setCurrentItemIndex(null);
      } 
      else
      {
        // Agregar un nuevo ítem
        setItems([...items, { nombre: item, cantidad }]);
      }
      setItem(''); // Limpiar el input
      setCantidad(1); //Resetear la cantidad a 1
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
      
      setItem(items[index].nombre); //carga en el campo de entrada el valor del arreglo que coincida con ese vector. Después cuando lo editas pasa la función de hanlde y finalmente 
                          // cuando aceptas presionando el boton va hacia addItem.
      setCantidad(items[index].cantidad);
      setIsEditing(true);
      setCurrentItemIndex(index);
    };

    const deleteAllItems = () => {
      setItems([]); // Vaciamos el array de items
    };



  return (

    <div className="container">

      <h1>Carrito de Compras</h1>
      <input
        type="text"
        value={item}
        onChange={handleInputChange}
        placeholder="Ingrese un ítem"
      />
        <input
          type="number"
          value={cantidad}
          onChange={handleCantidadChange}
          placeholder="Cantidad"
          min="1" 
        />
      <button
        onClick={addItem}>
        {isEditing ? 'Guardar Cambios' : 'Agregar a la lista'}
      </button>

      {items.length > 0 && <h2>Lista de Compras</h2>}

      {items.length > 0 && (
        <DeleteAllButton onDeleteAll={deleteAllItems} />
      )}
      
      <ItemList items={items} onDeleteItem={deleteItem} onEditItem={editItem} //pasamos como propiedad la funcion onDeleteItem
      />
    </div>
  );
};


export default Productos;