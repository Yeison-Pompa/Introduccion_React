import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";
function App() {
  return (
    /* Renderizando los componentes */
    <>
      <Navbar />
      {/*  <Home /> */}
      <Login />

      {/*      <Register/> */}
      <Footer />
    </>
  );
}

export default App;
