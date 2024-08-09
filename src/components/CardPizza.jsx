import React from 'react';

const CardPizza = (props) => { // enviando los valores por medio de la popiedad props
  return (
    <>
    {/* Dando estilos a la card */}
      <div className="card mx-2 my-3" style={{ width: "18rem" }}>
        {/* ingresando los valores por medio de las props */}
        <img src={props.img} className="card-img-top" alt={props.name} />
        <div className="card-body">
          {/* ingresando los valores por medio de las props */}
          <h5 className="card-title fw-light mb-3">{props.name}</h5>
          {/* ingresando los valores por medio de las props */}
          <p className="card-text h6 fw-light">
            Ingredientes: {props.ingredients.join(", ")}
          </p>
          <p className="fw-light">
            <i className="fas fa-map-marker-alt fa-xs"></i>
          </p>
          <hr />
          <ul className="list-group list-group-flush text-right">
            <li className="list-group-item ms-auto fw-light">
             {/* ingresando los valores por medio de las props */}
              <span className="h5 fw-bold green ms-3">Precio: ${props.price}</span>
            </li>
          </ul>
          {/* Agregando botones */}
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-primary">Ver mas</button>
            <button className="btn btn-secondary">Añadir</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPizza;