import "./Usuario.css";
export const Usuario= (props) => { /*Siempre los componentes tiene que empezar con mayuscula*/
    
    console.log(props.nacionalidad);
    const {nombre,edad,nacionalidad} = props; /*De esta forma no es necesario hacer props.Atributo en cada elemento de html que retornamos*/

    return (<div>
            <h1>Nombre:{nombre}</h1>
            <p>Edad:{edad}</p>
            <p>Nacionalidad:{nacionalidad}</p>
            <hr/>
          </div>) /*es de buena practica cada vez que retornamos un objeto colocar un parentesis*/
  }
  
/*Siempre que se utilice JavaScript dentro de jsx se tiene que utilizar llaves*/
/*El props. se utiliza siempre donde estemos utilizandolas, en este caso es en este componente*/
/*SOLO SE PUEDE RETORNAR UN SOLO ELEMENTO HTML POR LO CUAL NO SE PUEDEN RETORNAR DOS DIV*/