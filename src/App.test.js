import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import axios from 'axios';

jest.mock('axios');

test('renders Fabric Interface heading', () => {
  render(<App />);
  const heading = screen.getByText(/Fabric Interface/i);
  expect(heading).toBeInTheDocument();
});
