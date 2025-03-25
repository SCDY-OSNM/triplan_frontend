import styled from 'styled-components';
import Sign from '@/components/contents/planContents/Sign.svg';

export const RoadSignWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  left: 10px;

  img {
    width: 100%;
    height: 100%;
  }

  span {
    position: absolute;
    top: 50%;
    left: calc(50% - 1px);
    transform: translate(-50%, -50%);
    font-size: 12px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.bkTitle};
  }
`;

// 놔두는 위치 : 오른쪽 삼각형이 앞뒤 컴포넌트 중간에 위치해야함

// 앞 뒤 사이 거리(직선 or 걷는) 계산하거나 받아와야함.

export function RoadSign() {
  return (
    <RoadSignWrapper>
      <img src={Sign} alt="이정표"></img>
      <span>300m</span>
    </RoadSignWrapper>
  );
}
