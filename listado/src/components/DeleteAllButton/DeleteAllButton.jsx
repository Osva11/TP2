import React from 'react';

const DeleteAllButton = ({ onDeleteAll }) => {
  return (
    <button onClick={onDeleteAll}>
      Borrar todos los ítems
    </button>
  );
};

export default DeleteAllButton;