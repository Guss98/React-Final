import React from "react";

export const Login = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Iniciar sesión</h1>
            <hr />
          </div>
        </div>
        <div className="row ">
          <div className="col-md 5 d-flex justify-content-center">
            <div className="col-md-3 ">
              <form>
                <div className="mb-3 ">
                  <label htmlFor="exampleForm" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleForm"
                    placeholder="augusto@ejemplo.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Contraseña"
                  />
                </div>

                <button type="submit" className="btn btn-outline-dark">
                  Ingresar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
