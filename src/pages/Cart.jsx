import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = ({ producto }) => {
const { carrito, incrementar, decrementar } = useContext(CartContext)
let total = carrito.reduce(
  (acumulador, producto) => (acumulador += producto.count),
  0
);
let totalPagar = carrito.reduce(
  (acumulador, producto) => (acumulador += producto.price * producto.count),
  0
);

  return (
    <div className="container">
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
