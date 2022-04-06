import React from "react";

const Lista = ({setTodos,todos,setId, setEditar}) => {
  const eliminar = (id) =>{
    var lista = []  
    todos.map(tarea => {
        if(tarea.id!==id){
          lista = [...lista,tarea]
        }
      })
      setTodos(lista)
  }

  const editar = (id) => {
    setId(id)
    setEditar(true)
  }

  return (
    <div className="col Tareas">
        <h2>Lista de tareas</h2>
      {
        todos.map(tarea => {
          console.log(todos)
          return(
            <ul key={tarea.id} className="Lista">
            <li class="alert alert-light lista-item" role="alert">
              <p>{tarea.todo}</p>
              <div>
                <button type="button" onClick={()=>editar(tarea.id)} className="btn btn-warning lib">
                  Editar
                </button>
                <button type="button" onClick={()=>eliminar(tarea.id)} className="btn btn-danger lib">
                  Eliminar
                </button>
              </div>
            </li>
          </ul>
          )
        })
      }
    </div>
  );
};

export default Lista;
