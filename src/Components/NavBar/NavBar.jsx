import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavBar = () => {
  const state = useSelector((state) => state.manejarCarrito);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            REACT .IND
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/productos">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/info">
                  Info
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">
                  Contacto
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/login" className="btn btn-outline-dark ">
                <i className="fa fa-sign-in me-1"></i>
                Login
              </Link>
              <Link to="registro" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>
                Registrarse
              </Link>
              <Link to="carrito" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>
                Carrito ({state.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
