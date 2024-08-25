import React from "react";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmar, setConfirmar] = useState("");

  //Estado para los errores
  const [error, setError] = useState(false);
  //Función antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();
    //Validación;
    if (!email || !contraseña || !confirmar) {
      alert("Debe llenar todos los campos");
    } else if (contraseña.length < 6 || confirmar.length < 6) {
      alert("La contraseña debe tener más de 6 caracteres");
    } else if (contraseña !== confirmar) {
      alert("Las contraseñas no coinciden");
    } else {
      alert("Registrado correctamente");
    }
    {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <div className="container">
      <h1>Register</h1>
      <form className="formulario" onSubmit={validarDatos}>
        {error ? <p>Todos los campos son obligatorios</p> : null}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="contraseña"
            className="form-control"
            onChange={(e) => setContraseña(e.target.value)}
            value={contraseña}
          />
        </div>

        <div className="form-group">
          <label>Confirmar</label>
          <input
            type="password"
            name="confirmar"
            className="form-control"
            onChange={(e) => setConfirmar(e.target.value)}
            value={confirmar}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      <hr />
      <h1>Datos ingresados</h1>
      {email} - {contraseña} - {confirmar}
    </div>
  );
};

export default Register;