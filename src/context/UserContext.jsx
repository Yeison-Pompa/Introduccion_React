import { createContext, useState } from "react";

export const UserContext = createContext();

const validarToken = localStorage.getItem("token") || null;

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(validarToken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  // Función que permite iniciar sesión
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json(); // Obtener detalles del error
        throw new Error(errorData.message || `Error: ${response.status}`);
      }

      const data = await response.json();
      alert("Authentication successful!");
      localStorage.setItem("token", data.token); // Almacenar token en localStorage
      setToken(data.token); // Establecer token en el estado
      setUser(data.email); // Suponiendo que el servidor devuelve el email del usuario
    } catch (error) {
      console.error("Error during login:", error.message);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  // Función para traer los datos del usuario
  const validar = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`); // Manejo de error
      }

      const data = await response.json();
      setUser(data.email);
      return data;
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      alert("Failed to fetch user data.");
    }
  };

  // Función para cerrar la sesión
  const logout = () => {
    localStorage.removeItem("token"); // Limpiar solo el token
    setUser(null);
    setToken(null);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        logout,
        validar,
        setEmail,
        user,
        setPassword,
        handleSubmit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
