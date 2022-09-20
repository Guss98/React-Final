import React from "react";

export const Registro = () => {
  return (
    <div>
      <div className="container my-5">
        <form class="card p-2 ">
          <div class="col-md-4 ">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-4">
            <label for="inputPassword4" class="form-label">
              Contraseña
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-md-4">
            <label for="inputAddress" class="form-label">
              Dirección
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder=""
            />
          </div>

          <div class="col-md-4">
            <label for="inputCity" class="form-label">
              Pais
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>

          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Recibir notificaciones sobre novedades
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Registrarme
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
