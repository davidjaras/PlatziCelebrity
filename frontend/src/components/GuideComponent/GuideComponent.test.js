import { render, screen } from '@testing-library/react';
import GuideComponent from './GuideComponent';

test('renders learn react link', () => {
  render(<GuideComponent />);
  const linkElement = screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
});
