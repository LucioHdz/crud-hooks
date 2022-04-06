import React from "react";

const Lista = () => {
  return (
    <div className="col Tareas">
        <h2>Lista de tareas</h2>
      <ul className="Lista">
        <li class="alert alert-light lista-item" role="alert">
          <p>Nombre de la tarea</p>
          <div>
            <button type="button" class="btn btn-warning lib">
              Editar
            </button>
            <button type="button" class="btn btn-danger lib">
              Eliminar
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Lista;
