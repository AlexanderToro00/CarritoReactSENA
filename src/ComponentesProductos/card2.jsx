import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, eliminar} from '../redux/actions';
import '../index.css';


export function Card({ id, nick, precio, categoria }) {
  const dispatch = useDispatch();
  const [canti] = useState(1);

  const handleAddCart = () => {
    dispatch(add({ id, nick, precio, canti, categoria }));
  };

  const handleDelete = () => {
    dispatch(eliminar({id, nick, precio, canti, categoria}));
  };
  
  return (
    <div className="card">
      <div className="card-body">
        <h3 className='card-title'>{nick}</h3>
        <p className="card-text">
            <strong>Precio:</strong>{precio} <br />
            <strong>Categoria:</strong>{categoria} <br />
        </p>
        <button onClick={handleAddCart} className='add'>Add</button>
        <button onClick={handleDelete} className='remove'>Remove</button>

      </div>
    </div>
  );
}