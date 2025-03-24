import styled from 'styled-components';

export const PageHeader = styled.header`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

interface PageHeaderWrapperProps {
  isNarrow: boolean;
}

export const PageHeaderWrapper = styled.div<PageHeaderWrapperProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ isNarrow }) => (isNarrow ? '100%' : '1200px')};
  height: 100%;

  .logo {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const SideMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 50px;
  color: ${({ theme }) => theme.color.bkTitle};
`;
