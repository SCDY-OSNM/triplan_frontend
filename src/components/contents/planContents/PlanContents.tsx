import styled from 'styled-components';
import Stars from '@/components/stars/Stars';

const PlanContentsStyle = styled.article`
  display: flex;
  gap: 13px;
`;

const Image = styled.img`
  width: 72px;
  height: 96px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  gap: 7px;

  .title {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.bkTitle};
  }

  .summary {
    font-size: 12px;
    color: ${({ theme }) => theme.color.darkGray};
  }

  .location {
    font-size: 12px;
    color: ${({ theme }) => theme.color.gray};
  }
`;

// map이 해당 컨텐츠 있는곳으로 고정되어야함
// DayButton에 따라서 Contents 내용도 나뉘어야함
// Day1에 있는 Content 내용은 Day1이 선택 되어있어야함.
// 옆으로 넘기는 버튼이 있는게 좋을지 아니면 슬라이드 해서 넘기는게 좋을지??

export const PlanContents = () => {
  const imgUrl = 'https://cdn.imweb.me/upload/S201701015868e87bb6cc8/59c7421236c2f.jpg';

  return (
    <PlanContentsStyle>
      <Image src={imgUrl} alt="일정 이미지" />
      <TextWrapper>
        <span className="title">오덴노 하치마루</span>
        <span className="summary">오꼬노미야끼 철판에 구워주는데 맛있겠다 (간단 설명)</span>
        <span className="location">술집/바(종류) · 난바(지역)</span>
        <Stars />
      </TextWrapper>
    </PlanContentsStyle>
  );
};
