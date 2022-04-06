import React from 'react'
import './Formulario.css'
const Vista = () => {
  return (
    <form className="col-4 formulario">
  <div className="form-group">
    <label for="Formulario">Formulario</label>
    <input type="text" className="form-control" id="Formulario" placeholder='Ingresar Tarea'/>
  </div>
  <button type="submit" className="btn btn-dark">Agregar</button>
</form>
  )
}

export default Vista