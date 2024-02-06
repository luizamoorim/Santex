import { useQuery } from '@apollo/client';
import { GET_ORDERS } from '../graphql/queries';


export function UseGetActiveOrder({code}:{code:string}) {
  const { data, loading, error } = useQuery(GET_ORDERS,{
    variables: { code },
  });

  return {
    data: data?.products?.items || [],
    loading,
    error
  };
}