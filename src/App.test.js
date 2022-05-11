import App from './App';
import { render, screen } from './test.utilis';

test('home page renders', () => {
    render(<App />);
    const linkElement = screen.getByText(/Launch/i);
    expect(linkElement).toBeInTheDocument();
});
