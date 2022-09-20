import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BorrarCarrito } from "../../redux/actions";
import { manejarCarrito } from "../../redux/reducers/manejarCarrito";

const Carrito = () => {
  const state = useSelector((state) => state.manejarCarrito);
  const dispatch = useDispatch();
  const borrarCarrito = (item) => {
    dispatch(BorrarCarrito(item));
  };

  const itemsCarrito = (itemCarrito) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={itemCarrito.id}>
        <div className="container py-4">
          <button
            onClick={() => borrarCarrito(itemCarrito)}
            className="btn-close float-end"
            aria-label="Close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="col-md-4">
                <img
                  src={itemCarrito.image}
                  alt={itemCarrito.title}
                  height="200px"
                  width="180px"
                />
              </div>
              <h3>{itemCarrito.title}</h3>
              <p className="lead fw-bold">$ {itemCarrito.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const carritoVacio = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Tu carrito esta vacío 😔</h3>
          </div>
        </div>
      </div>
    );
  };

  const button = () => {
    return (
      <div className="container">
        <div className="row">
          <Link to="pagar" className="btn btn-outline-dark mb-5">
            Pagar
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      {state.length === 0 && carritoVacio()}
      {state.length !== 0 && state.map(itemsCarrito)}
      {state.length !== 0 && button()}
    </div>
  );
};

export default Carrito;
