import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { contador } from "../utils/contador"; // direccionando ruta utils
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // dev de fontawesome
import { faHouse, faCartShopping } from "@fortawesome/free-solid-svg-icons"; // dev de fontawesome Solid
import { NavLink } from "react-router-dom"; // Asegúrate de que la importación de Link es correcta
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  /* retornando hacia la vista  */
  const { logout, token } = useContext(UserContext);
  return (
    <>
      {/* creando el Navbar con bootstrap */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black text-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            Pizzería Mamma Mia
          </a>
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
                  <i className="bi bi-house-door"></i>{" "}
                  <FontAwesomeIcon icon={faHouse} />
                  Home
                </NavLink>
              </li>
              {/* Operador ternario expresión 1 True */}
              {token ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/profile" className="nav-link active">
                      <i className="bi bi-person"></i> Profile
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/logout" className="nav-link active">
                      {/*  <i className="bi bi-box-arrow-right"></i> Logout */}
                      <button onClick={logout}>Logout</button>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {/* Operador ternario expresión 2 False */}
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link active">
                      <i className="bi bi-box-arrow-in-right"></i> Login
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/register" className="nav-link active">
                      <i className="bi bi-person-plus"></i> Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>

            {/* a Funcion toLocaleString */}
            <span className="navbar-text ms-auto">
              <NavLink to="/cart">
                <button className="btn btn-secondary">
                  {/* agregando iconos con font awesome */}
                  <i className="bi bi-cash">
                    <FontAwesomeIcon icon={faCartShopping} />{" "}
                  </i>
                  Total: ${total.toFixed(2)}
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
