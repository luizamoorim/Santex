import React, { createContext, useContext, useState } from 'react';
import { UseAddProductToOrder } from '../hooks/useAddProductToOrder';
import { UseListProducts } from '../hooks/useListProducts';
import useStateWithStorage from '../hooks/useStateWithStorage';
import { Product } from '../models/Product';
import { ProductVariant } from '../models/ProductVariant';

type ContextData ={
  order?: {
    id: string,
    subTotal: number,
  }
  productList: {items: Product[], paginationData: {skip: number, take: number, totalPages: number, currentPage: number}},
  addItemToOrder: (productVariant: ProductVariant) => void
  refetchProductList: (page: number) => void
}

const CommerceContext = createContext<ContextData>({} as ContextData);

export const OrderProvider = ({ children }: {children: React.ReactNode}) => {
  const [pageData, setPageData] = useState<{skip:number, take:number}>({skip: 0, take: 10});
  const [order, setOrder] = useStateWithStorage('order', {subTotal: 0});
  
  const {addProductToOrder} = UseAddProductToOrder();
  
  const { data: productList } = UseListProducts(pageData);

  async function addItemToOrder(productVariant: ProductVariant) {
    const {data} = await addProductToOrder({
      variables: {
        productVariantId: productVariant.id, 
        quantity: 1
      }
    })

    if(data.addItemToOrder){
      setOrder(data.addItemToOrder);
    }
  }

  function refetchProductList(page:  number) {
    const skip = (page * pageData.take) - pageData.take;
    const take = pageData.take;
    setPageData({skip: skip, take: take}); 
  }

  const contextValue = {
    order,
    productList: {
      items: productList.items || [],
      paginationData: {
        skip: pageData.skip || 0,
        take: pageData.take || 10,
        currentPage: (pageData.skip / pageData.take) + 1 || 0,
        totalPages: (Math.floor(productList.totalItems / pageData.take) + 1) || 0
      }
    },
    addItemToOrder,
    refetchProductList
  };

  return <CommerceContext.Provider value={contextValue}>{children}</CommerceContext.Provider>;
};

export const useCommerceContext = () => {
  const context = useContext(CommerceContext);
  return context;
};
