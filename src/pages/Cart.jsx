import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const {
    carrito,
    eliminarDelCarrito,
    aumentarCantidad,
    disminuirCantidad,
    total,
  } = useContext(CartContext);
  
  const [mensaje, setMensaje] = useState("");
  const [esExito, setEsExito] = useState(false); // Estado para manejar si es un mensaje de éxito

  const handleEliminar = (id) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      eliminarDelCarrito(id);
    }
  };

  const enviarCarrito = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token_jwt}`, // Asegúrate de usar un token válido
        },
        body: JSON.stringify({ cart: carrito }),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el carrito");
      }

      const data = await response.json();
      setMensaje(`Compra exitosa: ${data.message}`); // Asegúrate de que la respuesta tenga un mensaje
      setEsExito(true); // Marca que es un mensaje de éxito

      // Mostrar un alert en caso de éxito
      alert("¡Compra realizada con éxito!"); // Alert de compra exitosa
    } catch (error) {
      setMensaje(`Error: ${error.message}`);
      setEsExito(false); // Marca que es un mensaje de error
    }
  };

  return (
    <div className="container">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          {carrito.map((producto) => (
            <div key={producto.id} className="cart-item">
              <img src={producto.img} alt={producto.nombre} width="100" />
              <h5>{producto.title}</h5>
              <p>Precio unitario: ${producto.price.toFixed(2)}</p>
              <p>Cantidad: {producto.cant}</p>
              <div>
                <button
                  onClick={() => disminuirCantidad(producto)}
                  disabled={producto.cant === 1}
                  className="cart-button"
                  aria-label={`Disminuir cantidad de ${producto.title}`}
                >
                  -
                </button>
                <button
                  onClick={() => aumentarCantidad(producto)}
                  className="cart-button"
                  aria-label={`Aumentar cantidad de ${producto.title}`}
                >
                  +
                </button>
                <button
                  onClick={() => handleEliminar(producto.id)}
                  className="cart-button"
                  aria-label={`Eliminar ${producto.title} del carrito`}
                >
                  Eliminar
                </button>
              </div>
              <p>Subtotal: ${(producto.price * producto.cant).toFixed(2)}</p>
            </div>
          ))}
          <button onClick={enviarCarrito} className="checkout-button">
            Proceder al pago
          </button>
        </>
      )}
      <h3>Total a pagar: ${total.toFixed(2)}</h3>
      {mensaje && (
        <p style={{ color: esExito ? 'green' : 'red', fontWeight: 'bold' }}>
          {mensaje}
        </p>
      )}
    </div>
  );
};

export default Cart;
