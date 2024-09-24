
import { Usuario } from './components/Usuario/Usuario'; /*Se declara como un objeto para poder traer varios componentes si es necesario*/
import { Card } from './components/Card/Card';

function App() {

/*Las propiedades se pasan desde aca hacia donde las estemos utilizando, el orden da igual de los objetos*/
  return (
    <div > 
      <Usuario nombre="Osvaldo" edad={20} nacionalidad="Argentina"/>
      <Usuario nombre="Maria" edad={30} nacionalidad="Uruguay"/>
      <Card/>
    </div>
  );
}


export default App;
