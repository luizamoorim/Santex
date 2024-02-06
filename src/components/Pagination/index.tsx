import { PageItem, PageButton, PaginationWrapper } from "./components";

type Props = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void; 
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  function paginate(page: number){
    if(page !== 0 && page <= totalPages){ 
      onPageChange(page)
    }
  }

  return (
    <PaginationWrapper>
      <PageItem>
        <PageButton onClick={() => paginate(currentPage - 1)} active={false}>
          &laquo;
        </PageButton>
      </PageItem>
      {pages.map((page) => (
        <PageItem key={page}>
          <PageButton
            active={page === currentPage}
            onClick={() => paginate(page)}
          >
            {page}
          </PageButton>
        </PageItem>
      ))}
      <PageItem>
        <PageButton onClick={() => paginate(currentPage + 1)} active={false}>
          &raquo;
        </PageButton>
      </PageItem>
    </PaginationWrapper>
  );
};

export default Pagination;
