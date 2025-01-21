import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import HomeHeader from '@/components/layout/header/HomeHeader';
import PageHeader from '@/components/layout/header/PageHeader';

const Layout = () => {
  const location = useLocation();
  // map이 있을 경우 true(100%) 없을 경우 false(1200px)
  const isNarrow = false;

  const isHomePage = location.pathname === '/';

  return (
    <div>
      {isHomePage ? <HomeHeader /> : <PageHeader isNarrow={isNarrow} />}
      <Outlet /> {/* 하위 컴포넌트 렌더링 */}
    </div>
  );
};

export default Layout;
