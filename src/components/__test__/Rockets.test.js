import { render, screen } from '../../test.utilis';
import Rockets from '../Home/Mission/Rockets';

test('launch card', () => {
    render(<Rockets />);
    const linkElement = screen.getByText(/launch/i);
    expect(linkElement).toBeInTheDocument();
});
