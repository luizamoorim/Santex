import { formatPrice } from './formatPrice';

describe('formatPrice', () => {
  test('formats price', () => {
    const price = 1000;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('$10.00');
  });

  test('handles zero', () => {
    const price = 0;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('$0.00');
  });

  test('handles negative', () => {
    const price = -1000;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('-$10.00');
  });

  test('handles large numbers', () => {
    const price = 1000000;
    const formattedPrice = formatPrice(price);
    expect(formattedPrice).toBe('$10,000.00');
  });
});
