import React from 'react'

const CardPizza = () => {
  return (
    <div>
<div className="card mx-2 my-3" style={{ width: "18rem" }}>
        <img src={props.img} className="card-img-top" alt={props.name} />
        <div className="card-body">
          <h5 className="card-title fw-light mb-3">{props.name}</h5>
          <p className="card-text h6 fw-light">
            Ingredientes: {props.ingredients.join(", ")}
          </p>
          <p className="fw-light">
            <i className="fas fa-map-marker-alt fa-xs"></i>
           
          </p>
          <hr />
          <ul className="list-group list-group-flush text-right">
            <li className="list-group-item ms-auto fw-light">
              <span className="h5 fw-bold green ms-3">Precio: ${props.price}</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default CardPizza
