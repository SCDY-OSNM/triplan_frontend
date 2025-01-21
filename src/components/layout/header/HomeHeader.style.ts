import styled from 'styled-components';

export const HomeHeader = styled.header`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.rgb1},
    ${({ theme }) => theme.color.rgb2}
  );
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  height: 100%;

  .logo {
    padding-left: 10px;

    &:hover {
      cursor: pointer;
    }
  }

  .profile {
    padding-right: 10px;
  }
`;

export const LogoSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
