import App from './App';
import { render, screen } from '@testing-library/react';

describe('App component', () => {
  it('renders landing page', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
