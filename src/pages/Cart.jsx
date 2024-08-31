import React from "react";
import { useState } from "react";

const Cart = ({ producto }) => {
  const [carrito, setCarrito] = useState([]);
  let total = carrito.reduce(
    (acumulador, producto) => (acumulador += producto.count),
    0
  );
  let totalPagar = carrito.reduce(
    (acumulador, producto) => (acumulador += producto.price * producto.count),
    0
  );
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
    <div>
      <h5>Detalles del pedido</h5>
      <h2>Cantidad de productos {total}</h2>
      <h3>Total a pagar {totalPagar}</h3>
      <div className="p3">
        {producto.map((producto) => (
          <div className="d-flex" key={producto.id}>
            <div>
              <img src={producto.img} className="w-25" alt={producto.name} />
              <p>{producto.name}</p>
            </div>
            <div>
              <button onClick={() => incrementar(producto)}>+</button>
              <button onClick={() => decrementar(producto)}>-</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
