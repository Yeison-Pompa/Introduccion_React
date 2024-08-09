import React from "react";
import { contador } from "../utils/contador"; // direccionando ruta utils

const Navbar = () => {
  const total = 25000; // creando una variable total 
  const token = true;  // creando variable token
  
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
                <a className="nav-link active" aria-current="page" href="#">
                  <i className="bi bi-house-door"></i> Home
                </a>
              </li>
              {/* Operador ternario expresion 1 True*/}
              {token ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <i className="bi bi-person"></i> Profile
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <i className="bi bi-box-arrow-right"></i> Logout
                    </a>
                  </li>
                </>
              ) : 
              
              {/* Operador ternario expresion 2 False*/}
              
              (
                <>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <i className="bi bi-box-arrow-in-right"></i> Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <i className="bi bi-person-plus"></i> Register
                    </a>
                  </li>
                </>
              )}
            </ul>

            {/* a Funcion toLocaleString */}
            <span className="navbar-text ms-auto">
              <button className="btn btn-secondary">
                <i className="bi bi-cash"></i> Total: ${contador(total)}
              </button>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
