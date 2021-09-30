import React, { useContext } from 'react';
import CartContext from './CartContext';

const AppContext: React.FC = () => {

  const { products } = useContext(CartContext);


  return (
    <div>
      <ul>
        {products.map(product => (
          <li>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default AppContext;