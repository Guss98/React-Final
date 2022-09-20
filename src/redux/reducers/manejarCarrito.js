const carrito = [];

export const manejarCarrito = (state = carrito, action) => {
  const product = action.payload;
  switch (action.type) {
    case "AGREGAR_CARRITO":
      const existe = state.find((x) => x.id === product.id);
      if (existe) {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;

    case "BORRAR_CARRITO":
      const existe1 = state.find((x) => x.id === product.id);
      if (existe1.qty === 1) {
        return state.filter((x) => x.id !== existe1.id);
      } else {
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
      return state;
      break;
  }
};
