import { createContext, useEffect, useState } from "react";

//Paso 1: Creamos un contexto
export const CartContext = createContext();

//Paso 2: Proveer un contexto
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);

  //Función que se ejecuta cuando hacemos click en agregar a carrito,
  const agregarAlCarrito = (producto) => {
    //verificar si el producto ya esta en el carrito
    const itemEnCarrito = carrito.find((item) => item.id === producto.id);

    //si ya esta, vamos a disminuir o aumentar la cantidad
    if (itemEnCarrito) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cant: item.cant + 1 } : item
        )
      );
      //sino agregamos al carrito una propiedad cant: 1
    } else {
      setCarrito([...carrito, { ...producto, cant: 1 }]);
    }
  };

  //función que nos permite eliminar un producto del carrito, la condición es item.id !== id. Esto significa que se mantendrán en el array todos los elementos cuyo id no sea igual al id pasado como argumento a la función.
  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const aumentarCantidad = (producto) => {
    setCarrito(
      carrito.map((item) =>
        item.id === producto.id ? { ...item, cant: item.cant + 1 } : item
      )
    );
  };

  const disminuirCantidad = (producto) => {
    if (producto.cant === 1) {
      eliminarDelCarrito(producto.id);
    } else {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id ? { ...item, cant: item.cant - 1 } : item
        )
      );
    }
  };
  useEffect(() => {
    const nuevoTotal = carrito.reduce(
      (acc, item) => acc + item.cant * item.price,
      0
    );
    console.log(nuevoTotal);
    setTotal(nuevoTotal);
    console.log(total);
  }, [carrito]); // El efecto depende del carrito
  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        aumentarCantidad,
        disminuirCantidad,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
