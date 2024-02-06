import { render,  } from '@testing-library/react';
import ProductCard  from '../ProductCard';
import { Product } from 'models/Product';
import { formatPrice } from 'utils/formatPrice';

jest.mock('../../context/CommerceContext');

const mockProduct = {
  name: 'Test Product',
  description: 'Test Description',
  variants: [
    { name: 'Variant 1', price: 10000},
    { name: 'Variant 2', price: 20000 }
  ],
  featuredAsset: { preview: 'test.jpg' }
} as Product;

describe('ProductCard', () => {
  it('renders product details correctly', () => {
    const { getByText } = render(<ProductCard product={mockProduct} />);
    const formattedSubTotal = formatPrice(10000)

    expect(getByText('Variant 1')).toBeInTheDocument();
    expect(getByText('Test Description')).toBeInTheDocument();
    expect(getByText(formattedSubTotal)).toBeInTheDocument();
  });
});
