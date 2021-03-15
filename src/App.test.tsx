import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders welcome message', () => {
  render(<Home />);
  const headerElement = screen.getByText(/Welcome to Our News Blog/i);
  expect(headerElement).toBeInTheDocument();
});
