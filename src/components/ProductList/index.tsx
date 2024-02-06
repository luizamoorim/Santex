import { ProductContainer } from '../ProductCard';
import { useCommerceContext } from '../../context/CommerceContext';
import { GridContainer } from './components';
import Pagination from 'components/Pagination';

export function ProductList() {
  const { productList, refetchProductList } = useCommerceContext();
  
  function paginate(page: number){
    refetchProductList(page)
  }

  return (
    <>
      <GridContainer >
        {productList?.items.map((product) => (
          <ProductContainer key={product.id} product={product} />
        ))}
      </GridContainer>
      {productList?.items.length > 0 && (
        <Pagination 
          currentPage={productList.paginationData.currentPage} 
          totalPages= {productList.paginationData.totalPages} 
          onPageChange = {(page: number) => paginate(page)}  
        />
      )}
    </>
  );
}