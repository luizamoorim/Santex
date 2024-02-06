import { gql } from '@apollo/client';


const GET_PRODUCTS = gql`
  query ListProducts($skip: Int, $take: Int){
    products(options : {take: $take, skip: $skip}) {
      items {
        id
        name
        description
        featuredAsset {
          id 
          source
          preview
        }
        assets {
          id
          name
          source
          preview
        }
        variants {
          id
          name
          sku
          price
          priceWithTax
        }
      }
      totalItems
    }
  }
`;

const GET_ORDERS = gql`
query getOrder($code: String!) {
  orderByCode(code: $code) {
    id
    subTotal
  }
}
`;

export {
  GET_PRODUCTS,
  GET_ORDERS
};
