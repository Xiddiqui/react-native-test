import React from 'react';
import App from './src/route';
import { Provider as StoreProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper';
import store from './src/redux/store'

const AppScreen = () => {
    return (
        <StoreProvider store={store}>
            <PaperProvider>
                <App />
            </PaperProvider>
        </StoreProvider>

    )
}
export default AppScreen;