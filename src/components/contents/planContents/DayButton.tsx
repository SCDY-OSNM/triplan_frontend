import styled from 'styled-components';

const DayButtonStyle = styled.button`
  display: flex;
  width: 65px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  // 선택 되었을 경우 배경 색상
  background-color: ${({ theme }) => theme.color.point};

  // 선택 X 벼튼 스타일
  // background-color: white;
  // border-style: solid;
  // border-color: ${({ theme }) => theme.color.line};

  span {
    font-size: 13px;
    font-weight: 500;
    // 선택 되었을 경우의 폰트 색상
    color: white;

    // 비선택시 폰트 스타일
    //color: ${({ theme }) => theme.color.gray};
  }
`;

export const DayButton = () => {
  return (
    <DayButtonStyle>
      <span>day1</span>
    </DayButtonStyle>
  );
};
