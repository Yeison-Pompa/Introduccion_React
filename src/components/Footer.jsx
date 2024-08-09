import React from 'react';

const Footer = () => {
   // Creando una variable para los estilos css
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
   
    bottom: 0,
    width: '100%',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.3)',
  };

  return (
    /* Enviando la variable a las etiquetas */
    <footer style={footerStyle}>
      <p>© 2021 - Pizzería Mamma Mia! - Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;