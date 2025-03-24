import * as S from './Likes.style';
import React, { useState } from 'react';

interface LikesProps {
  width?: string;
  height?: string;
}

const Likes: React.FC<LikesProps> = ({ width = '32px', height = '32px' }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    // setLiked(!liked);
    setLiked(prevLiked => {
      const newLiked = !prevLiked;
      console.log(newLiked ? '좋아요를 눌렀습니다.' : '좋아요를 취소했습니다.');
      return newLiked;
    });
  };

  return (
    <S.LikesStyle width={width} height={height} onClick={toggleLike}>
      <S.HeartIcon liked={liked} />
    </S.LikesStyle>
  );
};

export default Likes;
