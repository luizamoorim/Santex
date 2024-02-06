import styled from 'styled-components';

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  min-height: 100px;
  gap: 10px;
  display: grid;
`;

export const ProductTitle = styled.h3`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

export const ProductPicture = styled.img`
  width: 100%;
  height: 150px; // Set a fixed height for standardization
  object-fit: cover;
  border-radius: 4px;
`;

export const PreviewDescription = styled.p`
  text-align: center;
  font-size: 12px;
  margin-top: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-height: 2rem;

`;

export const ProductPrice = styled.span`
  margin-left: auto;
  font-size: 16px;
  color: #007bff;
`;


export const BuyButton = styled.button`
  background-color: #28a745;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
