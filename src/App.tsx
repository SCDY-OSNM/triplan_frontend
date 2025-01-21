import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from '@/styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
          <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
