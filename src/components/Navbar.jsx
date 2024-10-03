import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // dev de fontawesome
import { faHouse, faCartShopping } from "@fortawesome/free-solid-svg-icons"; // dev de fontawesome Solid
import { NavLink } from "react-router-dom"; // Asegúrate de que la importación de Link es correcta
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { logout, token } = useContext(UserContext);

  return (
    <>
      {/* creando el Navbar con bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black text-white">
        <div className="container">
          {/* Usamos NavLink en lugar de href="#" */}
          <NavLink to="/" className="navbar-brand">
            Pizzería Mamma Mia
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active" aria-current="page">
                  <FontAwesomeIcon icon={faHouse} /> Home
                </NavLink>
              </li>

              {/* Operador ternario para mostrar rutas dependiendo del estado del token */}
              {token ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/profile" className="nav-link active">
                      Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                 
                  <button onClick={logout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link active">
                      Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link active">
                      Register
                    </NavLink>
                  </li>
                 
                </>
              )}
            </ul>

            {/* Total del carrito */}
            <span className="navbar-text ms-auto">
              <NavLink to="/cart">
                <button className="btn btn-secondary">
                  <FontAwesomeIcon icon={faCartShopping} /> Total: ${total.toFixed(2)}
                </button>
              </NavLink>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
