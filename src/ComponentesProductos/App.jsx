import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Card } from './card2';
import { Cuadro } from './cuadro';


const productos = [
  {
    id: 1,
    nick: 'Pera',
    precio: '$1.500',
    cantidad: '5',
    categoria: 'Frutas',
  },
  {
    id: 2,
    nick: 'Fresa',
    precio: '$4.000',
    cantidad: '10',
    categoria: 'Frutas',
  },
  {
    id: 3,
    nick: 'Zanahoria',
    precio: '$2.500',
    cantidad: '7',
    categoria: 'Vegetales',
  },
  {
    id: 4,
    nick: 'Pollo',
    precio: '$15.000',
    cantidad: '3',
    categoria: 'Carnes',
  },
  /* {
    id: 5,
    nick: 'Lechuga',
    precio: '$1.200',
    cantidad: '6',
    categoria: 'Vegetales',
  },
  {
    id: 6,
    nick: 'Res',
    precio: '$20.000',
    cantidad: '2',
    categoria: 'Carnes',
  },
  {
    id: 7,
    nick: 'Uva',
    precio: '$5.000',
    cantidad: '8',
    categoria: 'Frutas',
  },
  {
    id: 8,
    nick: 'Pescado',
    precio: '$18.000',
    cantidad: '4',
    categoria: 'Carnes',
  }
 */
];

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <div>
          {productos.map(({ id, nick, precio, cantidad, categoria }) => (
            <Card key={id} id={id} nick={nick} precio={precio} cantidad={cantidad} categoria={categoria} />
          ))}
        </div>
        <Cuadro />
      </div>
    </Provider>
  );
}
