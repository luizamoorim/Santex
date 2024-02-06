import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries';
import { Product } from 'models/Product';

type Props = { 
  skip?: number, 
  take?: number
}

type Result = {
  data: {
    items: Product[], 
    totalItems: number,
  },
  loading: boolean,
  error?: any
};

export function UseListProducts({skip = 0, take = 10} : Props): Result {
  const { data, loading, error } = useQuery(GET_PRODUCTS, {
    variables: {
      skip, 
      take
    }
  });
  return {
    data: {items: data?.products?.items || [], totalItems: data?.products?.totalItems || 0},
    loading,
    error
  };
}