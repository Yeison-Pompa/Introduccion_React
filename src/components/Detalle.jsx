import React, { useState, useEffect } from "react";
import CardPizza from "../pages/CardPizza";
import { useParams } from "react-router-dom";

const Detalle = () => {
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  console.log("ID recibido en Detalle:", id); // Log para depuración

  // Verificar que 'id' está definido antes de construir la URL
  if (!id) {
    console.error("ID no proporcionado en useParams.");
    return <div>Error: ID de la pizza no proporcionado.</div>;
  }

  const url = `http://localhost:5000/api/pizzas/${id}`;

  const obtenerInformacion = async () => {
    try {
      const respuesta = await fetch(url);
      console.log("Respuesta de la API:", respuesta);
      if (!respuesta.ok) {
        const errorDetails = await respuesta.text(); // Obtener detalles del error
        throw new Error(`Error ${respuesta.status}: ${respuesta.statusText} - ${errorDetails}`);
      }
      const data = await respuesta.json();
      console.log("Datos recibidos:", data);
      setPizza(data);
    } catch (error) {
      if (error.name !== 'AbortError') { // Ignorar errores de abortar
        console.error("There was a problem with the fetch operation:", error);
        setError(`Failed to fetch pizza data: ${error.message}`);
      }
    }
  };

  useEffect(() => {
    obtenerInformacion();
    // No es necesario pasar 'url' en las dependencias si 'id' no cambia
  }, [id]); // Mantener 'url' en las dependencias para re-fetch si cambia

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="detalle-pizza">
      {pizza ? <CardPizza pizza={pizza} /> : <p>Cargando...</p>}
    </div>
  );
};

export default Detalle;
