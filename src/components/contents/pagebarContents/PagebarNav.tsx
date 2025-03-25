import styled from 'styled-components';

const PagebarNavStyle = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
`;

const NavBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 20px;
  padding: 5px;
  cursor: pointer;

  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  //버튼 선택이 된 경우
  border: 1px solid transparent;
  background:
    linear-gradient(white, white) padding-box,
    ${({ theme }) => `linear-gradient(to right, ${theme.color.rgb1}, ${theme.color.rgb2})`}
      border-box;

  span {
    color: ${({ theme }) => theme.color.bkTitle};
    font-size: 14px;
    font-weight: 500;
  }
`;

// 버튼 누르는것에 따라서 지도 및 컨텐츠 내용이 바뀌어야함

export const PagebarNav = () => {
  return (
    <PagebarNavStyle>
      <NavBtn>
        <span>전체</span>
      </NavBtn>
      <NavBtn>
        <span>맛집</span>
      </NavBtn>
      <NavBtn>
        <span>놀거리</span>
      </NavBtn>
      <NavBtn>
        <span>숙소</span>
      </NavBtn>
    </PagebarNavStyle>
  );
};
