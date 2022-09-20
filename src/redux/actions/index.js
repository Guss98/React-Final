// Agregar al carrito

export const AgregarCarrito = (product) => {
  return {
    type: "AGREGAR_CARRITO",
    payload: product,
  };
};

//Borrar del carrito
export const BorrarCarrito = (product) => {
  return {
    type: "BORRAR_CARRITO",
    payload: product,
  };
};
