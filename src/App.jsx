import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./App.css";
import Cart from "./pages/Cart";
import { producto } from "./assets/pizzas";
import { Route, Routes, Navigate } from "react-router-dom"; // Se añade Navigate
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
import Detalle from "./components/Detalle";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {
  // Reemplazamos logout por user o token para indicar autenticación
  const { user } = useContext(UserContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Redirigir a home si el usuario está autenticado */}
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />

        {/* Ruta para el carrito */}
        <Route path="/cart" element={<Cart producto={producto} />} />

        {/* Ruta protegida para perfil */}
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />

        {/* Detalle de producto, usando ID dinámico */}
        <Route path="/detalle/:id" element={<Detalle />} />

        {/* Ruta para páginas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
