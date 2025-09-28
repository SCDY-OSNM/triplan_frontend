import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from '@/styles/GlobalStyles';
import Layout from '@/components/layout/Layout';
import CustomToastContainer from '@/components/toast/Toast';
import AuthLoader from './components/auth/AuthLoader';

function App() {
  return (
    <BrowserRouter>
      <AuthLoader />
      <CustomToastContainer />
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
