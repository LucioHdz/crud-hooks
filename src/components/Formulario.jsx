
// Agregando Dependencias de react y hooks
import React, { useState } from 'react'

// Agregando los estilos del componente
import './Formulario.css'

//Agregando generador de contraseñas automaticas 
const { v4: uuid } = require('uuid')


// Componente Vista para mostrarlo en pantalla con props establecidos para la comunicacion con el sector padre
const Vista = ({ setTodos, todos, editar, id, setEditar }) => {

  /*Hook para almacenar la tarea nueva de manera temporal */
  const [tarea, setTarea] = useState("");
  const [error, setError] = useState(false);


  // Funcion para agregar/editar una tarea
  const fetchTodos = (e) => {

    /*Evitar el refresh provocado por el submit */
    e.preventDefault();

    // si esta vacio
    if (!tarea.trim()) {
      setError('Necesitas llenar este campo')
      return
    }


    /*Si es nuevo usuario */
    if (!editar) {
      // nueva tarea

      setTodos([...todos, {
        id: uuid(),
        todo: tarea
      }])

    } else {
      //Editar tarea
      var lista = []
      todos.map(tar => {
        if (tar.id === id) {
          lista = [...lista, {
            id: id,
            todo: tarea
          }]
        } else {
          lista = [...lista, tar]
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
        <h2 >
          {
            editar ? 'Editar' : 'Agregar'
          }
        </h2>
        {error?<small className='text-danger' >{error}</small>:null}
        <input type="text" value={tarea} className="form-control" id="Formulario" placeholder='Ingresar Tarea' onChange={(e) => {
          setError(null);
          setTarea(e.target.value)
        }
        } required />

      </div>
      <button type="submit" className={editar ? "btn btn-info" : "btn btn-dark"}>{editar ? 'Editar' : 'Agregar'}</button>
    </form>
  )
}

export default Vista