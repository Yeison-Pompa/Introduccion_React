import React from 'react'
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
        <center className='pt-5'>
            <h1 className='mb-4'>Esta pagina no existe</h1>
         <Link to="/">Volver al Home</Link>


        </center>


    </div>
  )
}

export default NotFound