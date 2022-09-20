import React from "react";
import { Link } from "react-router-dom";

export const Info = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">Nuestra Info</h1>
            <p className="lead">
              Somos REACT.IND, una empresa dedicada a la importación de todo
              tipo de productos, desde vestimenta hasta electronica. Si buscas
              un producto que no aparece en la tienda online podes comunicarte
              con nosotros y te lo traemos
            </p>
            <Link to="/contacto" className="btn btn-outline-dark px-3">
              Contactanos
            </Link>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://kinsta.com/es/wp-content/uploads/sites/8/2022/07/que-es-react-js-1024x512.png"
              alt="logo"
              height="400px"
              width="600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
