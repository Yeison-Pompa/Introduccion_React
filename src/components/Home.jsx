import React from 'react'
import Header from './Header' // importando el Header
import CardPizza from './CardPizza' // importando la cardPizza
import { pizzas } from "../pizzas"; // importando el js que contiene el array de objetos

const Home = () => {
  return (
    /* renderizacion dionamica */
    <div className="row">
      {pizzas.map((pizza, index) => (
        <div className="col-md-4" key={index}>
          <CardPizza pizza={pizza} /> 
        </div>
      ))}
    </div>
  );
};

export default Home;



