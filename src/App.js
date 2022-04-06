import { useState } from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

function App() {
  const [todos,setTodos] = useState([]);
  const [editar,setEditar] = useState(false);
  const [id,setId] = useState();
  

  return (
    <div className="App container-fluid">
      <Formulario setTodos={setTodos} todos = {todos} editar = {editar} id = {id} setEditar={setEditar} />
      <Lista todos={todos} setTodos={setTodos} setEditar={setEditar} setId = {setId}/>
    </div>
  );
}

export default App;
