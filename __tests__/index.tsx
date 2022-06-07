import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
it('renders Hello World in the center of the page', () => {
  render(<Home />);
  expect(screen.getByText('Hello World')).toHaveClass(
    'grid place-items-center'
  );
});
