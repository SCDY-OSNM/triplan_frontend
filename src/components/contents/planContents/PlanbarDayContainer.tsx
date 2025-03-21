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

  .dayCount {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.bkTitle};
  }
`;

interface DayContainerProps {
  num: number;
}

export const DayContainer: React.FC<DayContainerProps> = ({ num }) => {
  return (
    <DayContainerStyle>
      <DayCountBtn>
        <span className="dayCount">day{num}</span>
      </DayCountBtn>
    </DayContainerStyle>
  );
};
