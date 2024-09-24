import React, { useState } from 'react';
import ListaCompras from '../ListCompras/ListaCompras';
const Productos = () => {
    // 1. Declaración del estado

const[newItem,setNewItem]=useState(""); //inicializa una variable estado la cual contiene un valor inicial en este caso es un string vacio.
const[items,setItems]=useState([]);



const handleInputChange = (e) => {
    setNewItem(e.target.value); //* Esta función llama a la función setNewItem y le pasa el nuevo valor escrito la cual actualiza el estado.
    console.log(e.target.value)
}

const handleAddItem = () => {
    if (newItem.trim() !== "") { // Se asegura de que no sea una cadena vacía
      setItems([
        ...items, //Agrega los ítems existentes
        { id: Date.now(), name: newItem.trim() }, //Crea un nuevo objeto ítem y trim se encarga de borrar los espacios innecesarios
      ]);
      setNewItem(""); // Limpia el campo 
    }
  };


return (
        <div>
            <h1>Productos</h1>
            <input type="text"
            value={newItem} //se muestra la variable que creamos con el estado.
            onChange={handleInputChange}//Al cambiar el valor este va a llamar a la función handleInputChange*
            />
            <button onClick={handleAddItem}>Agregar</button>
            <ListaCompras items={items} />
        </div>
            //Se repite lo del input con el boton
)  
}

export default Productos;

