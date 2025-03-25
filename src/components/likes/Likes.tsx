import styled from 'styled-components';
import { GoHeartFill } from 'react-icons/go';
import React, { useState } from 'react';

export const LikesBtn = styled.button<{
  width: string;
  height: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.color.heartBg};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  border: none;
`;

export const HeartIcon = styled(GoHeartFill)<{ liked: boolean }>`
  width: 60%;
  height: 60%;
  color: ${({ liked, theme }) => (liked ? theme.color.heartR : theme.color.heartG)};
`;

interface LikesProps {
  width?: string;
  height?: string;
}

const Likes: React.FC<LikesProps> = ({ width = '32px', height = '32px' }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(prevLiked => {
      const newLiked = !prevLiked;
      console.log(newLiked ? '좋아요를 눌렀습니다.' : '좋아요를 취소했습니다.');
      return newLiked;
    });
  };

  return (
    <LikesBtn role="button" width={width} height={height} onClick={toggleLike}>
      <HeartIcon liked={liked} />
    </LikesBtn>
  );
};

export default Likes;
