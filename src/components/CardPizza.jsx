import React from "react";

const CardPizza = ({ pizza }) => {
  // Enviando los valores por medio de la propiedad pizza
  return (
    <>
      {/* Dando estilos a la card */}
      <div className="card mx-2 my-3" style={{ width: "18rem" }}>
        {/* Imágenes de la pizza */}
        <img src={pizza.img} className="card-img-top" alt={pizza.name} />
        <div className="card-body">
          {/* Nombre de la pizza */}
          <h5 className="card-title fw-light mb-3">{pizza.name}</h5>

          {/* Lista de ingredientes */}
          <ul>
            {pizza.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li> // Usar index como key
            ))}
          </ul>

          <p className="fw-light">
            <i className="fas fa-map-marker-alt fa-xs"></i>
          </p>
          <hr />
          <ul className="list-group list-group-flush text-right">
            <li className="list-group-item ms-auto fw-light">
              {/* Precio de la pizza */}
              <span className="h5 fw-bold green ms-3">
                Precio: ${pizza.price}
              </span>
            </li>
          </ul>
          {/* Agregando botones */}
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-primary">Ver más</button>
            <button className="btn btn-secondary">Añadir</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPizza;
