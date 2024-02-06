import { gql } from '@apollo/client';

const ORDER_FRAGMENT = gql`
  fragment OrderFields on Order {
    id
    subTotal
    code
  }
`;

const ORDER_MODIFICATION_ERROR_FRAGMENT = gql`
  fragment OrderModificationErrorFields on OrderModificationError {
    errorCode 
    message
  }
`;

const ORDER_LIMIT_ERROR_FRAGMENT = gql`
  fragment OrderLimitErrorFields on OrderLimitError {
    errorCode
    message
    maxItems
  }
`;

const NEGATIVE_QUANTITY_ERROR_FRAGMENT = gql`
  fragment NegativeQuantityErrorFields on NegativeQuantityError {
    errorCode
    message
  }
`;

const INSUFFICIENT_STOCK_ERROR_FRAGMENT = gql`
  fragment InsufficientStockErrorFields on InsufficientStockError {
    errorCode
    message
    quantityAvailable
    order {
      id
    }
  }
`;

const ADD_TO_ORDER = gql`
mutation AddItemToOrder($productVariantId: ID!, $quantity: Int!) {
    addItemToOrder(productVariantId: $productVariantId, quantity: $quantity) {
      ...OrderFields
      ...OrderModificationErrorFields
      ...OrderLimitErrorFields
      ...NegativeQuantityErrorFields
      ...InsufficientStockErrorFields
    }
  }
  ${ORDER_FRAGMENT}
  ${ORDER_MODIFICATION_ERROR_FRAGMENT}
  ${ORDER_LIMIT_ERROR_FRAGMENT}
  ${NEGATIVE_QUANTITY_ERROR_FRAGMENT}
  ${INSUFFICIENT_STOCK_ERROR_FRAGMENT}
`;

export {
  ADD_TO_ORDER
};
