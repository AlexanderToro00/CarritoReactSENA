import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export function Cuadro() {
  const Arreglo = useSelector(state => state.storeCart.Arreglo);

  const cartaaa = Arreglo.length === 0;

return (
  <div className="cuadro">
    <h2 className='tit'>Tienda</h2>
    {cartaaa ? (
      <p>¡Bienvendi@ a SUPERMECADO LA 80!</p>
    ) : (
      <ul>
        {Arreglo.map((articulo) => (
          <li key={articulo.id} className='princi'>
            <span className='nom'>{articulo.nick}<nbsp /> <nbsp /> <nbsp /></span>
            <span className='canti'><strong> Cantidad</strong>: {articulo.canti}</span>
            <span className='cate'><strong>{articulo.categoria}</strong> </span>
          </li>
        ))}
      </ul>
    )}
  </div>
);
}
