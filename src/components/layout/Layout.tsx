import styled from 'styled-components';
import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 80px; // header 크기
  padding-bottom: 50px;
  flex-grow: 1;
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <LayoutContainer>
      <Header isHome={isHomePage} />
      <MainStyle>{children}</MainStyle>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
