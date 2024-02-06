import React, { createContext, useContext, useState } from 'react';
import { Product } from '../../models/Product';
import { ProductVariant } from '../../models/ProductVariant';

type Order = {
  id: string,
  subTotal: number,
}

type ContextData ={
  order?: Order,
  productList: Product[],
  addItemToOrder: (productVariant: ProductVariant) => void
}

const CommerceContext = createContext<ContextData>({} as ContextData);

export const OrderProvider = ({ children }: {children: React.ReactNode}) => {
  const [order, setOrder] = useState({ subTotal: 10000 } as Order);
  const productList: Product[] = [];

  const addItemToOrder = ( productVariant:ProductVariant)=>{
    setOrder({id: '1', subTotal: productVariant.price})
  }; 

  const contextValue = {
    order,
    productList,
    addItemToOrder
  };

  return <CommerceContext.Provider value={contextValue}>{children}</CommerceContext.Provider>;
};

export const useCommerceContext = () => {
  const context = useContext(CommerceContext);
  return context;
};
