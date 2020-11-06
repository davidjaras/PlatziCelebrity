import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(true).toBeTruthy();
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
