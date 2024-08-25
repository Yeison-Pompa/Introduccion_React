import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";
import Cart from "./components/Cart";
import { producto } from './assets/pizzas'
function App() {
  return (
    /* Renderizando los componentes */
    <>
      <Navbar />
      <Cart producto={producto}  />
{/*        <Home /> */}
{/*       <Login /> */}

      {/*      <Register/> */}
      <Footer />
    </>
  );
}

export default App;
