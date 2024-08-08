import React from 'react'

const Header = () => {
  const estilosContenedor = {
    position: "relative",
    width: "100%",
   
    overflow: "hidden",
  };

  const estilosImagen = {
    width: "100%",
    
    objectFit: "cover",
    display: "block",
  };

  const estilosTexto = {
   
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white", // Puedes ajustar el color según sea necesario
    textAlign: "center",
  };

  return (
    <div style={estilosContenedor}>
      <img
        src="http://www.downtownmakeover.com/images/news/pizza-lg.jpg"
        alt="Imagen de pizza"
        style={estilosImagen}
      />
      <div style={estilosTexto}>
        <h1 style={{ fontFamily: "fantasy",  fontSize: "40px"}}>¡Pizzería Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podras encontrar!</p>
      </div>
    </div>
  );
};


export default Header