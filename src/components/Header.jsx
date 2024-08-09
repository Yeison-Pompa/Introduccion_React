import React from "react";
import logo from "../assets/img/pizza.jpg"; // Direccionando al img pizza.jpg

const Header = () => {
  // Creando una variable para los estilos css dentro de la variable Header
  const headerStyle = {
    position: "relative",
    backgroundImage: `url(${logo}), linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
    backgroundSize: "cover",
   
    height: "300px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    textAlign: "center",
  };

  return (

  // Enviando la variable entre{} con los estilos dentro de la etiqueta Div
    <div style={headerStyle}>
      {/* Titulo */}
      <h1>Pizzería Mamma Mia!</h1>
      {/* sub  titulo */}
      <p>Tenemos las mejores pizzas que podrás encontrar</p>
    </div>
  );
};

export default Header;

