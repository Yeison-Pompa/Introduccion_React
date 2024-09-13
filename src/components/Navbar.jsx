import React from "react";
import {useContext} from "react";
import { CartContext } from "../context/CartContext";
import { contador } from "../utils/contador"; // direccionando ruta utils
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // dev de fontawesome
import { faHouse, faCartShopping } from "@fortawesome/free-solid-svg-icons"; // dev de fontawesome Solid
import { Link } from "react-router-dom"; // Asegúrate de que la importación de Link es correcta

const Navbar = () => {
  const { total } = useContext(CartContext);
  /* retornando hacia la vista  */
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
                <Link to="/" className="nav-link active" aria-current="page">
                  <i className="bi bi-house-door"></i>{" "}
                  <FontAwesomeIcon icon={faHouse} />
                  Home
                </Link>
              </li>
              {/* Operador ternario expresión 1 True */}
              {/* {token ? ( */}
              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link active">
                    <i className="bi bi-person"></i> Profile
                  </Link>
                </li>
                {/*   <li className="nav-item">
                    <Link to="/logout" className="nav-link active">
                      <i className="bi bi-box-arrow-right"></i> Logout
                    </Link>
                  </li> */}
              </>
              {/*          ) : ( */}
              <>
                {/* Operador ternario expresión 2 False */}
                <li className="nav-item">
                  <Link to="/login" className="nav-link active">
                    <i className="bi bi-box-arrow-in-right"></i> Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link active">
                    <i className="bi bi-person-plus"></i> Register
                  </Link>
                </li>
              </>
              {/*     )} */}
            </ul>

            {/* a Funcion toLocaleString */}
            <span className="navbar-text ms-auto">
              <Link to="/cart">
                <button className="btn btn-secondary">
                  {/* agregando iconos con font awesome */}
                  <i className="bi bi-cash">
                    <FontAwesomeIcon icon={faCartShopping} />{" "}
                  </i>
                  Total: ${total.toFixed(2)}
                </button>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
