import { DELETE_CART } from './actions';
import { ADD_CART} from './actions';

const initialState = {
  Arreglo: [] 
};

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART: {
      const Arti = state.Arreglo.findIndex(articulo => articulo.id === action.payload.id);

      if (Arti !== -1) {
        const Agregar = state.Arreglo.map((articulo, index) =>
          index === Arti
            ? { ...articulo, canti: articulo.canti + action.payload.canti }
            : articulo
        );
        return { ...state, Arreglo: Agregar };
      } else {
        return {
          ...state,
          Arreglo: [...state.Arreglo, { ...action.payload }]
        };
      }
    }

    case DELETE_CART: {
      const Arti = state.Arreglo.findIndex(articulo => articulo.id === action.payload.id);

      if (Arti !== -1) {
        const Agregar = state.Arreglo
          .map((articulo, index) => {
            if (index === Arti) {
              return { ...articulo, canti: articulo.canti - action.payload.canti };
            }
            return articulo;
          })
          .filter(articulo => articulo.canti > 0); 

        return { ...state, Arreglo: Agregar };
      }
      return state;
    }

    default:
      return state;
  }
}
