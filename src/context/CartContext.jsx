import React, { createContext, useState } from "react"; // importamos con createContext y useState

// Crear el contexto
export const CartContext = createContext();

// CartProvider con manejo de total y productos en el carrito
export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);


  const incrementar = (producto) => {
    let comparacion = carrito.findIndex((item) => item.id === producto.id);
    let nuevoProducto = {
      id: producto.id,
      name: producto.name,
      img: producto.img,
      price: producto.price,
      count: 1,
    };
    if (comparacion >= 0) {
      carrito[comparacion].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, nuevoProducto]);
    }
  };

  const decrementar = (producto) => {
    // Encuentra el índice del producto en el carrito
    let comparacion = carrito.findIndex((item) => item.id === producto.id);

    if (comparacion >= 0) {
      // Crea una copia del carrito para trabajar con él
      let nuevoCarrito = [...carrito];

      // Decrementa la cantidad del producto en el carrito
      nuevoCarrito[comparacion].count--;

      // Si la cantidad llega a cero, elimina el producto del carrito
      if (nuevoCarrito[comparacion].count <= 0) {
        nuevoCarrito.splice(comparacion, 1);
      }

      // Actualiza el estado del carrito con el nuevo carrito
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <CartContext.Provider
      value={{ carrito,incrementar, decrementar }}
    >
      {children}
    </CartContext.Provider>
  );
};
