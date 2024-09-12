import React, { useContext } from "react";

import Header from "../components/Header"; // importando el Header
import CardPizza from "./CardPizza"; // importando la cardPizza
import { producto } from "../assets/pizzas"; // importando el js que contiene el array de objetos
import "bootstrap/dist/css/bootstrap.min.css";
import Detalle from "../components/Detalle";
import { ApiContext } from "../context/ApiContext";

const Home = () => {
  const {pizzas} = useContext(ApiContext)
  


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
