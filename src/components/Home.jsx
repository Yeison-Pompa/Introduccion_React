import React from "react";
import Header from './Header.jsx';
import CardPizza from './CardPizza.jsx'

const Home = () => {
  return (
    <>

      <Header />
<div className="container">
  <div className="row">

    <div className="col-md-4">
      < CardPizza/>
    </div>

    <div className="col-md-4">
      < CardPizza/>
    </div>
    <div className="col-md-4">
      < CardPizza/>
    </div>
  </div>
</div>

      
    </>
  );
};

export default Home;
