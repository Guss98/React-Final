import React from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import "./App.css";
import { Home } from "./Components/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Productos } from "./Components/Productos/Productos";
import { Producto } from "./Components/Producto/Producto";
import Carrito from "./Components/Carrito/Carrito";
import { Pagar } from "./Components/Pago/Pagar";
import { Info } from "./Components/Info/Info";
import { Contacto } from "./Components/Contacto/Contacto";
import { Login } from "./Components/Login/Login";
import { Registro } from "./Components/Registro/Registro";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<Producto />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/carrito/pagar" element={<Pagar />} />
        <Route path="/info" element={<Info />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  );
}

export default App;
