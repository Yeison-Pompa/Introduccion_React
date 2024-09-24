import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    carrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad,
    total,
  } = useContext(CartContext);

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        carrito.map((producto) => (
          <div key={producto.id} className="cart-item">
            <img src={producto.img} alt={producto.nombre} width="100" />
            <h5>{producto.title}</h5>
            <p>Precio unitario: ${producto.price.toFixed(2)}</p>
            <p>Cantidad: {producto.cant}</p>
            <div>
              <button
                onClick={() => disminuirCantidad(producto)}
                disabled={producto.cant === 1}
              >
                -
              </button>
              <button onClick={() => aumentarCantidad(producto)}>+</button>
              <button onClick={() => eliminarDelCarrito(producto.id)}>
                Eliminar
              </button>
            </div>
            <p>Subtotal: ${(producto.price * producto.cant).toFixed(2)}</p>
          </div>
        ))
      )}
      <h3>Total a pagar: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
