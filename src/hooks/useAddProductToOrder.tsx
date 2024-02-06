import { useMutation } from '@apollo/client';
import { ADD_TO_ORDER } from '../graphql/mutations';


export function UseAddProductToOrder() {
  const [addProductToOrder, { data, loading, error }] = useMutation(ADD_TO_ORDER);

  return {
    addProductToOrder,
    data,
    loading,
    error
  };
}