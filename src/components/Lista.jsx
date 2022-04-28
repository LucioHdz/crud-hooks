import React from "react";
import Swal from "sweetalert2";

const Lista = ({ setTodos, todos, setId, setEditar, editarH }) => {
  const eliminar = (id) => {

    Swal.fire({
      title: 'Estas seguro?',
      text: "No podras recuperar esta tarea!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        var lista = []
        todos.map(tarea => {
          if (tarea.id !== id) {
            lista = [...lista, tarea]
          }
        })
        setTodos(lista)
        Swal.fire(
          'Eliminado!',
          'La tarea fue eliminada.',
          'success'
        )
      }
    })
  }

  const editar = (id) => {
    setId(id)
    setEditar(!editarH)
  }

  return (
    <div className="col Tareas">
      <h2>Lista de tareas</h2>
      {todos.length == 0 ? (<div class="alert alert-secondary" role="alert">
        No tienes tareas, te puedes relajar ahora
      </div>) :
        todos.map(tarea => {
          console.log(todos)
          return (
            <ul key={tarea.id} className="Lista">
              <li class="alert alert-light lista-item" role="alert">
                <p>{tarea.todo}</p>
                <div>
                  <button type="button" onClick={() => editar(tarea.id)} className="btn btn-warning lib">
                    Editar
                  </button>
                  <button type="button" onClick={() => eliminar(tarea.id)} className="btn btn-danger lib">
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
