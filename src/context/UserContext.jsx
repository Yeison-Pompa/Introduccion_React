import { createContext, useState } from "react";


export const UserContext = createContext();

 export const UserProvider = ({ children }) => {
 
const [token, setToken] =useState(true)
const [user, setUser] = useState(null)
    
  

 
 const logout = ()=>{
  setToken(false)
 }
  return (
    <UserContext.Provider value={{ token, setToken, logout, user, setUser}}>
      {children}
    </UserContext.Provider>
  );
};


