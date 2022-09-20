import React from "react";
import { Productos } from "../Productos/Productos";

export const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark border-0">
        <img
          src="https://cdn.shopify.com/s/files/1/0824/1887/files/Mens-Fashion-Baseball-Cap_1400x.jpg?v=1661160397"
          className="card-img"
          alt="background"
          height="579px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-4 fw-bolder mb-0">
              NUEVA TEMPORADA
            </h5>
            <p className="card-text lead fs-2">DESCUBRI LAS TENDENCIAS</p>
          </div>
        </div>
      </div>
      <Productos />
    </div>
  );
};
