import { render, screen } from '@testing-library/react';
import RegisterPage from './RegisterPage';

test('renders learn react link', () => {
  render(<RegisterPage />);
  const linkElement = screen.getByText(/Register Page/i);
  expect(linkElement).toBeInTheDocument();
});
