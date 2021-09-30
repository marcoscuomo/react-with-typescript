import React, { useReducer } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Cart {
  products: string[],
  shipping_value?: number;
}

type CartActionType = {
  type: 'ADD_PRODUCT' | 'REMOVE_PRODUCT'
}

const AppReducer: React.FC = () => {

  const cart = useReducer(
    (state: Cart, action: CartActionType) => {
      switch(action.type) {
        case 'ADD_PRODUCT':
          return {
            ...state,
            products: [...state.products, 'new product']
          }
        default: 
        return state;
      }
    },
    {
      products: [],
      shipping_value: 0
    },
  )

  return (
    <h1>Reducer</h1>
  )
}

export default AppReducer