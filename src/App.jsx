import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import Cart from "./pages/Cart";
import { producto } from "./assets/pizzas";
import { Route, Routes } from "react-router-dom"; // importando las rutas, ruta
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Detalle from "./components/Detalle";

function App() {
  return (
    /* Renderizando los componentes */
    <>
      <Navbar />
      <Routes>
        {" "}
        {/* Envolviendo los componentes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart producto={producto} />} />
        <Route path="/pizza/p001" element={<Home />} />
        <Route path="/profile" element={<Profile />} />{" "}
        {/* Crear nuevos componentes */}
        <Route path="*" element={<NotFound />} /> {/* Crear nuevo componente */}
        <Route path="/detalle/:id" element={<Detalle/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
