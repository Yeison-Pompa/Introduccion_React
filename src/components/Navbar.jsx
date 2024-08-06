import React from 'react'


const Navbar = () => {
  const total = 25000;
  const token = true;



  return (
    <div>
        <nav  id='bgNav' className="navbar navbar-expand-lg bg-dark-subtle text-emphasis-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Pizzeria</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>

{
  token ? (
    <>  <li className="nav-item">
    <a className="nav-link" href="#">Profile</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Logout</a>
  </li> </>
  ) :(
    <>      <li className="nav-item">
    <a className="nav-link" href="#">Login</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Register</a>
  </li></>
  )
}

  
      
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar