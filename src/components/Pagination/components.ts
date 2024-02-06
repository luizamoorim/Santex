import styled from 'styled-components';

export const PaginationWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

export const PageItem = styled.li`
  margin: 0 5px;
`;

type PageButtonProps = {
  active: boolean;
}

export const PageButton = styled.button<PageButtonProps>`
  text-decoration: none;
  padding: 5px 10px;
  border: 1px solid #ccc;
  color: ${({ active }) => (active ? '#fff' : '#333')};
  background-color: ${({ active }) => (active ? '#007bff' : 'transparent')};
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? '#007bff' : '#f0f0f0')};
  }
`;