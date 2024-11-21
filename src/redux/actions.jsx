
export const DELETE_CART = 'DELETE_CART';
export const ADD_CART = 'ADD_CART';

export const add = (product) => ({ 
  type: ADD_CART,
  payload: product
});

export const eliminar= (product) => ({
  type: DELETE_CART,
  payload: product
});
