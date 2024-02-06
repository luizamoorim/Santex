
import { formatPrice } from '../../utils/formatPrice';
import { useCommerceContext } from '../../context/CommerceContext';
import { Product } from '../../models/Product';
import { ProductVariant } from '../../models/ProductVariant';
import { PreviewDescription, ProductCard, ProductPicture, ProductTitle, ProductPrice, BuyButton } from './components';

export function ProductContainer({product}: {product: Product}) {
  const { addItemToOrder } = useCommerceContext();

  function addToOrder(product: ProductVariant) {
    addItemToOrder(product)
  }
  
  function findCheapestVariant(product: Product) {
    const cheapestVariant = product.variants.reduce((prev, current) => {
        return current.price < prev.price ? current : prev;
    }, product.variants[0]);

    return cheapestVariant;
  }

  const cheapestVariant = findCheapestVariant(product);

  return ( 
    <ProductCard >
      <ProductTitle>{cheapestVariant?.name}</ProductTitle>
      <ProductPicture src={product?.featuredAsset?.preview} />
      <PreviewDescription>{product?.description}</PreviewDescription>
      <ProductPrice>{formatPrice(cheapestVariant?.price)}</ProductPrice>
      <BuyButton onClick={()=>{
        addToOrder(cheapestVariant)
      }}>Buy</BuyButton>
    </ProductCard>
  )
}

export default ProductContainer;