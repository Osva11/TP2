
const ListaCompras = ({ items }) => {
    return (
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    );
  };

  export default ListaCompras;