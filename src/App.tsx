import { ThemeProvider } from '@mui/material';
import Router from './assets/router';
import { mainTheme } from './assets/themes/theme';

import { Provider } from 'react-redux';
import store from './store/store';

export const App: React.FC = () => (
    <ThemeProvider theme={mainTheme}>
        <Provider store={store}>
            <Router />
        </Provider>
    </ThemeProvider>
);

export default App;
