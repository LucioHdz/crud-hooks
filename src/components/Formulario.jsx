import React,{useState} from 'react'
import './Formulario.css'
const {v4:uuid} = require('uuid')

const Vista = ({setTodos,todos,editar,id, setEditar}) => {
  const [tarea,setTarea] = useState("");
  const [limpiar,setLimpiar] = useState("");

  const fetchTodos = (e) =>{
    e.preventDefault();
    if (!editar){
      // nueva tarea
    setTodos([...todos,{
      id:uuid(),
      todo:tarea
    }])
    }else{
      //Editar tarea
      var lista = []
      todos.map(tar => {
        if (tar.id === id){
        lista = [...lista,{
          id: id,
          todo: tarea
        }]
        }else{
          lista = [...lista,tar]
        }
      })
      setTodos(lista)
      setEditar(false)
    }
    setTarea("")
  }

  return (
    <form className="col-4 formulario" onSubmit={fetchTodos}>
  <div className="form-group">
    <label htmlFor="Formulario">Formulario</label>
    <input type="text" value={tarea} className="form-control" id="Formulario" placeholder='Ingresar Tarea' onChange={(e) => setTarea(e.target.value)} required/>
  </div>
  <button type="submit" className={editar?"btn btn-info":"btn btn-dark"}>{editar? 'Editar':'Agregar'}</button>
</form>
  )
}

export default Vista