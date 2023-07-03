import { ThemeProvider } from '@mui/material';
import Router from './assets/router';
import { mainTheme } from './assets/themes/theme';

export const App: React.FC = () => (
    <ThemeProvider theme={mainTheme}>
        <Router />
    </ThemeProvider>
);

export default App;
