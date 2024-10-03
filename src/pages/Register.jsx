import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const { handleSubmit, setEmail, setPassword } = useContext(UserContext);

  // Estado para los errores
  const [error, setError] = useState(null);
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState(""); // Nuevo estado para la confirmación de contraseña

  // Función para validar los datos antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();

    // Validación de los campos
    if (!emailState || !passwordState || !confirmPasswordState) {
      setError("Debe llenar todos los campos");
      return;
    } else if (passwordState.length < 6) {
      setError("La contraseña debe tener más de 6 caracteres");
      return;
    } else if (passwordState !== confirmPasswordState) {
      setError("Las contraseñas no coinciden");
      return;
    } else {
      setError(null); // Limpiamos el error si todo está bien
    }

    // Si la validación pasa, enviamos los datos
    setEmail(emailState);
    setPassword(passwordState);
    handleSubmit(e); // Llama a la función handleSubmit para iniciar sesión
  };

  return (
    <div className="container">
      <h1>Registro</h1>
      <form className="formulario" onSubmit={validarDatos}>
        {error && <p>{error}</p>}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmailState(e.target.value)}
            value={emailState}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="contraseña"
            className="form-control"
            onChange={(e) => setPasswordState(e.target.value)}
            value={passwordState}
          />
        </div>
        <div className="form-group">
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="confirmarContraseña"
            className="form-control"
            onChange={(e) => setConfirmPasswordState(e.target.value)} // Cambiado a setConfirmPasswordState
            value={confirmPasswordState} // Cambiado a confirmPasswordState
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={
            !emailState ||
            !passwordState ||
            !confirmPasswordState ||
            passwordState.length < 6
          }
        >
          Enviar
        </button>
      </form>
      <hr />
      <h1>Datos ingresados</h1>
      <p>Email: {emailState}</p>
      <p>Contraseña: {passwordState ? "******" : ""}</p>
    </div>
  );
};

export default Register;
