import styled from 'styled-components';
import Likes from '@/components/likes/Likes';
import Stars from '@/components/stars/Stars';
import { GoHeartFill } from 'react-icons/go';

export const PagebarContentsStyle = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 7px;
  cursor: pointer;
`;

export const ContentTitle = styled.h2`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  align-items: flex-end;
  color: ${({ theme }) => theme.color.title};

  .type {
    font-size: 16px;
    font-weight: normal;
    margin-left: 5px;
    color: ${({ theme }) => theme.color.darkGray};
  }

  .like_btn {
    margin-left: auto;
    align-items: center;
    cursor: pointer;
  }
`;

export const ContentSummary = styled.summary`
  display: -webkit-box;
  width: 100%;
  font-size: 14px;
  font-weight: 300;
  line-height: 1.2;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const StarHeartWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  gap: 2px;
  span {
    color: ${({ theme }) => theme.color.bkTitle};
  }

  .line {
    font-size: 10px;
  }
`;

export const HeartIcon = styled(GoHeartFill)`
  color: ${({ theme }) => theme.color.heartR};
`;

export const PhotoWrapper = styled.div`
  width: 100%;
  height: 180px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

// 이미지, 컨텐츠 연결
// 클릭시 사이드바 옆에 페널 생성해야함

export const PagebarContents = () => {
  const imgUrl =
    'https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/04/a0004023/img/basic/a0004023_main.jpg';

  return (
    <PagebarContentsStyle role="button">
      <ContentTitle>
        식당 이름이 길게 설정
        <span className="type">식당 종류 어쩌구</span>
        <div role="button" className="like_btn">
          <Likes width="24px" height="24px" />
        </div>
      </ContentTitle>
      <ContentSummary>
        간단한 설명이 여기에 있으면 좋겠어요 한줄로 할까 두줄로 할까 몇줄까지 허용할까 간단한 설명이
        여기에 있으면 좋겠어요 한줄로 할까 두줄로 할까 몇줄까지 허용할까 간단한 설명이 여기에 있으면
        좋겠어요 한줄로 할까 두줄로 할까 몇줄까지 허용할까
      </ContentSummary>
      <StarHeartWrapper>
        <Stars />
        <span className="line">|</span>
        <HeartIcon />
        <span>100개</span>
      </StarHeartWrapper>
      <PhotoWrapper>
        <Image src={imgUrl} alt="식당 이미지" />
      </PhotoWrapper>
    </PagebarContentsStyle>
  );
};
