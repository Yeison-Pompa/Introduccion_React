import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from "./context/CartContext.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from './context/ApiContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider>
     <CartProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </CartProvider>
    </ApiProvider>
  </React.StrictMode>,
)
