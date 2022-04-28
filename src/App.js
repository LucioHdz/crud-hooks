

/*Importando Desde React para usar hooks en la pagina */
import { useState } from 'react';

/*Agregando Los componentes JSX al proyecto*/
import Formulario from './components/Formulario';
import Lista from './components/Lista';


/*Generando el componente App para mostrar en pantalla */
function App() {

  /*Hook donde se almacenan los datos de las tareas */
  const [todos,setTodos] = useState([]);
  
  /*Hook donde se establece el tipo de escritura */
  const [editar,setEditar] = useState(false);

  /*Hook donde se establece el id de la tarea a editar */
  const [id,setId] = useState();
  
  /*Retornando el cuerpo del componente */
  return (
    <div className="App container-fluid">

      {/* Mostrando elemento del formulario  */}
      <Formulario setTodos={setTodos} todos = {todos} editar = {editar} id = {id} setEditar={setEditar} />
      
      
      {/* Mostrando elemento de la lista de tareas  */}
      <Lista todos={todos} editar={editar} setTodos={setTodos} setEditar={setEditar} setId = {setId}/>
    </div>
  );
}

export default App;
