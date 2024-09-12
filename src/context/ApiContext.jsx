import { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
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
  <ApiContext.Provider value= {{pizzas}}>
    {children}
  </ApiContext.Provider> 
    )
};

export default ApiProvider