import React from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './src/routes';
import { store } from './src/store/root/config.store';

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
}

export default App;
