import { render, screen } from '@testing-library/react';
import { ProductList } from '../ProductList';
import { useCommerceContext, OrderProvider } from 'context/CommerceContext';
import { Product } from 'models/Product';

jest.mock('../../context/CommerceContext', () => ({
  ...jest.requireActual('../../context/__mocks__/CommerceContext.tsx'),
  useCommerceContext: jest.fn(),
}));

describe('ProductList', () => {
  test('renders product list', () => {
    const productList = [
      {
        id: 1,
        name: 'Test Product',
        description: 'Test Description',
        variants: [
          { name: 'Variant 1', price: 10000},
          { name: 'Variant 2', price: 20000 }
        ],
        featuredAsset: { preview: 'test.jpg' }
      }
    ];

    (useCommerceContext as jest.Mock).mockReturnValue({ productList });

    render(<OrderProvider><ProductList /></OrderProvider>);

    expect(screen.getByText('Variant 1')).toBeInTheDocument();
  });

  test('renders empty product list', () => {
    const productList: Product[] = [];

    (useCommerceContext as jest.Mock).mockReturnValue({ productList });

    render(<ProductList />);

    expect(screen.queryByText('Variant 1')).not.toBeInTheDocument();
  });
});