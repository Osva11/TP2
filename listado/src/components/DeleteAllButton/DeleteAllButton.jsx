import React from 'react';
import '../../App.css';

const DeleteAllButton = ({ onDeleteAll }) => {
  return (
    <button className="delete-all-btn" onClick={onDeleteAll}>
      Borrar todos los ítems
    </button>
  );
};

export default DeleteAllButton;