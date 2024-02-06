import { render } from '@testing-library/react';
  import Header from '../Header';
import { formatPrice } from 'utils/formatPrice';

import { OrderProvider } from '../../context/CommerceContext';
jest.mock('../../context/CommerceContext');

describe('Header component', () => {
  it('renders header with logo and subtotal', () => {
    const { getByAltText, getByText } = render(
      <OrderProvider>
        <Header />
      </OrderProvider>
    );

    const logo = getByAltText('logo');
    expect(logo).toBeInTheDocument();

    const formattedSubTotal = formatPrice(10000)

    const subtotalElement = getByText(formattedSubTotal);
    expect(subtotalElement).toBeInTheDocument();
  });
});