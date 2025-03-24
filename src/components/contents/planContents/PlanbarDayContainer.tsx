import styled from 'styled-components';
import React from 'react';

const DayContainerStyle = styled.div`
  display: flex;
  padding: 20px 0;
  position: sticky;
  background-color: white;
  top: 0;
`;

const DayCountBtn = styled.button`
  cursor: pointer;
  padding: 0 15px;
  align-items: center;

  .dayCount {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.bkTitle};
  }
`;

interface PlanbarDayContainerProps {
  num: number;
}

// 제일 상단에 있는 day에만 <IoIosArrowDown /> 표시
// 제일 상단에 있는 day누를 시 다른 day로 넘어갈 수 있게 모달 창 떠서 클릭하면 자동으로 옮기게 되어야함

export const PlanbarDayContainer: React.FC<PlanbarDayContainerProps> = ({ num }) => {
  return (
    <DayContainerStyle>
      <DayCountBtn>
        <span className="dayCount">day{num}</span>
      </DayCountBtn>
    </DayContainerStyle>
  );
};
