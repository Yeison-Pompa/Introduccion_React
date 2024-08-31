import React, { useState, useEffect } from "react";
import CardPizza from "../pages/CardPizza";

const Detalle = () => {
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  const obtenerInformacion = async () => {
    try {
      const respuesta = await fetch("http://localhost:5000/api/pizzas/p001");
      if (!respuesta.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await respuesta.json();
      setPizza(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError("Failed to fetch pizza data");
    }
  };

  useEffect(() => {
    obtenerInformacion();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return <>{pizza ? <CardPizza pizza={pizza} /> : <p>Loading...</p>}</>;
};

export default Detalle;
