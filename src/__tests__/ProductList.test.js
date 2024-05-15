import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from '../components/ProductList';

test('renders product list', () => {
  render(<ProductList />);
  const linkElement = screen.getByText(/View Details/i);
  expect(linkElement).toBeInTheDocument();
});
