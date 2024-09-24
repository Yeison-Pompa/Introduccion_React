import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Empezamos con null (no se ha comprobado aún)
  const [user, setUser] = useState(null); // Maneja el estado del usuario

  // Simulación de autenticación al cargar la app (puedes usar localStorage o cookies)
  useEffect(() => {
    // Aquí puedes verificar si el token existe en el localStorage o hacer una llamada para verificar si el usuario sigue autenticado.
    const savedToken = localStorage.getItem("token"); // ejemplo con localStorage
    if (savedToken) {
      setToken(true); // Si hay token, el usuario está autenticado
      setUser({ name: "Usuario Ejemplo" }); // Simulando un usuario
    } else {
      setToken(false); // No autenticado
    }
  }, []);

  const logout = () => {
    setToken(false);
    setUser(null);
    localStorage.removeItem("token"); // Eliminamos el token del almacenamiento
  };

  return (
    <UserContext.Provider value={{ token, setToken, logout, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


