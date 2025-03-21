import styled from 'styled-components';
import Sign from '@/components/contents/sidebarContents/Sign.svg';

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

// 앞 뒤 사이 거리 계산하거나 받아와야함.

export function RoadSign() {
  return (
    <RoadSignWrapper>
      <img src={Sign} alt="이정표"></img>
      <span>300m</span>
    </RoadSignWrapper>
  );
}
