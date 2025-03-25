import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';
import React from 'react';

export const StarsStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const StarIcon = styled(FaStar)<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ theme }) => theme.color.star};
`;

export const SRating = styled.span<{ size: string }>`
  font-size: ${({ size }) => size};
  font-weight: 500;
  color: ${({ theme }) => theme.color.bkTitle};
`;

export const SCount = styled.span<{ size: string }>`
  font-size: ${({ size }) => size};
  color: ${({ theme }) => theme.color.darkGray};
`;

// 별점 api 가져오기

interface StarsProps {
  width?: string;
  height?: string;
  size?: string;
}

const Stars: React.FC<StarsProps> = ({ width = '15px', height = '15px', size = '12px' }) => {
  return (
    <StarsStyle>
      <StarIcon width={width} height={height} />
      <SRating size={size}>4.8</SRating>
      <SCount size={size}>(169) </SCount>
    </StarsStyle>
  );
};

export default Stars;
