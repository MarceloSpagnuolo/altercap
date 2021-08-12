import React, { useState } from "react";
import "./form.css";

function Formulario() {
  const [datos, setDatos] = useState({
    Nombre: "",
    Apellido: "",
    Email: "",
    RUT: "",
    Pais: "",
    Comentario: "",
  });

  function handleInput(e) {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
    e.target.setCustomValidity("");
  }

  function handleSubmit(e) {
    let domNombre = document.getElementById("Nombre");
    let domApellido = document.getElementById("Apellido");
    let domEmail = document.getElementById("Email");
    let domRut = document.getElementById("RUT");
    let domPais = document.getElementById("Pais");

    if (datos.Nombre.length === 0) {
      domNombre.setCustomValidity("Debe ingresar su nombre");
      return false;
    }
    if (datos.Apellido.length === 0) {
      domApellido.setCustomValidity("Debe ingresar su apellido");
      return false;
    }
    if (datos.Email.length === 0) {
      domEmail.setCustomValidity(
        "Debe ingresar su dirección de correo electrónico"
      );
    } else {
      if (
        !/^([a-zA-Z0-9._+-]+)(@[a-zA-Z0-9-.]+)(\.)+(.[a-zA-Z]{2,4}){1,2}$/gm.test(
          datos.Email
        )
      ) {
        domEmail.setCustomValidity("Formato de Email incorrecto");
        return false;
      }
    }
    if (datos.RUT.length === 0) {
      domRut.setCustomValidity("Debe ingresar su RUT");
      return false;
    } else {
      if (!/^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/.test(datos.RUT)) {
        domRut.setCustomValidity("Formato de RUT incorrecto");
        return false;
      }
    }
    if (datos.Pais.length === 0) {
      domPais.setCustomValidity("Debe indicar su país de residencia");
      return false;
    }
    e.preventDefault();
    console.log(datos);
  }

  return (
    <div className="Container">
      <h2 className="Title">Datos Personales</h2>
      <form className="Form-Container">
        <div className="Nombre">
          <div>
            <label htmlFor="Nombre">Nombre </label>
            <br />
            <input
              autoFocus={true}
              type="text"
              name="Nombre"
              onChange={(e) => handleInput(e)}
              title="Requerido"
              required
              id="Nombre"
            />
          </div>
          <div>
            <label htmlFor="Apellido">Apellido </label>
            <br />
            <input
              type="text"
              name="Apellido"
              onChange={(e) => handleInput(e)}
              id="Apellido"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="Email">Email </label>
          <br />
          <input
            type="text"
            name="Email"
            onChange={(e) => handleInput(e)}
            id="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="RUT">RUT </label>
          <br />
          <input
            type="text"
            name="RUT"
            onChange={(e) => handleInput(e)}
            id="RUT"
            placeholder="9.999.999-X"
            required
          />
        </div>
        <div>
          <label htmlFor="Pais">País de Residencia</label>
          <br />
          <input
            type="text"
            name="Pais"
            onChange={(e) => handleInput(e)}
            id="Pais"
            required
          />
        </div>
        <div>
          <label htmlFor="Comentario">Dejenos un comentario</label>
          <br />
          <textarea
            rows="8"
            cols="40"
            type="textarea"
            name="Comentario"
            onChange={(e) => handleInput(e)}
          />
        </div>
        <div>
          <button
            className="Submit"
            onClick={(e) => handleSubmit(e)}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
