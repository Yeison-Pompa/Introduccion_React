import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/Header"; // importando el Header
import CardPizza from "./CardPizza"; // importando la cardPizza
import { producto } from "../assets/pizzas"; // importando el js que contiene el array de objetos
import "bootstrap/dist/css/bootstrap.min.css";
import Detalle from "../components/Detalle";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  const obtenerInformacion = async () => {
    const respuesta = await fetch("http://localhost:5000/api/pizzas");
    console.log(respuesta);
    const data = await respuesta.json();
    setPizzas(data);
  };

  useEffect(() => {
    obtenerInformacion();
  }, []);
  return (
    /* renderizacion dionamica */
    <div className="container">
      <div className="row">
        {pizzas.map(
          (
            pizza,
            index // cambiando nombre "producto por pizzas"
          ) => (
            <div className="col-md-4" key={index}>
              <CardPizza pizza={pizza} />
            </div>
          )
        )}

        <Detalle />
      </div>
    </div>
  );
};

export default Home;
