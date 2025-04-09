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

export const MainStyle = styled.main.withConfig({
  shouldForwardProp: prop => !['hasHeader', 'hasFooter'].includes(prop),
})<{ hasFooter: boolean; hasHeader: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: ${({ hasHeader }) => (hasHeader ? '80px' : '0')}; // header 크기
  padding-bottom: ${({ hasFooter }) => (hasFooter ? '50px' : '0')}; // footer가 있을 경우 필요
  flex-grow: 1;
`;

interface LayoutProps {
  children: ReactNode;
}

// 지도가 포함될 경우 Footer 안보여야함
// 일정, 내주변, 또 있남

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const loginPath = location.pathname === '/login';
  const signupPath = location.pathname === '/signup';
  const nearbyPagePath = location.pathname === '/nearby';
  const planPagePath = location.pathname === '/plan';

  // 로그인 및 회원가입 페이지에서는 헤더와 푸터가 없음
  const hasHeader = !(loginPath || signupPath);
  const hasFooter = !(nearbyPagePath || planPagePath || loginPath || signupPath);

  return (
    <LayoutContainer>
      {hasHeader && <Header isHome={isHomePage} hasMap={!hasFooter} />}
      <MainStyle hasHeader={hasHeader} hasFooter={hasFooter}>
        {children}
      </MainStyle>
      {hasHeader && hasFooter && <Footer />}
    </LayoutContainer>
  );
};

export default Layout;
