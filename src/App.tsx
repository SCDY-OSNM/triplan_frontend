import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from '@/styles/GlobalStyles';
import Layout from '@/components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Router />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}
export default App;
