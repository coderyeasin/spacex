import { render, screen } from '../../test.utilis';
import Mission from '../Home/Mission/Mission';

test('Launch info', () => {
    render(<Mission />);
    const linkElement = screen.getByText(/rocket/i);
    expect(linkElement).toBeInTheDocument();
});
