import styled from 'styled-components';
import { GoHeartFill } from 'react-icons/go';

export const LikesStyle = styled.div<{
  width: string;
  height: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.color.heartBg};
  border-radius: 50%;
`;

export const HeartIcon = styled(GoHeartFill)<{ liked: boolean }>`
  width: 60%;
  height: 60%;
  color: ${({ liked, theme }) => (liked ? theme.color.heartR : theme.color.heartG)};
`;
