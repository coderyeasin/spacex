import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './redux/store';

function ReduxProvider({ children }) {
    return <Provider store={store}>{children}</Provider>;
}
const reduxRender = (ui) => render(ui, { wrapper: ReduxProvider });
export * from '@testing-library/react';
export { reduxRender as render };
