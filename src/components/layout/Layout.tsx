import * as S from './Layout.style';
import React, { ReactNode } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HomeHeader from '@/components/layout/header/HomeHeader';
import PageHeader from '@/components/layout/header/PageHeader';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  // map이 있을 경우 true(100%) 없을 경우 false(1200px)
  const isNarrow = false;

  const isHomePage = location.pathname === '/';

  return (
    <>
      <S.Header>{isHomePage ? <HomeHeader /> : <PageHeader isNarrow={isNarrow} />}</S.Header>
      <S.Main>{children}</S.Main>
    </>
  );
};

export default Layout;
