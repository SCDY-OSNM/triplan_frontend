import styled from 'styled-components';

export const PlanbarContentsStyle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  gap: 10px;
`;

export const NCWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const NumberBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ theme }) => theme.color.yellow};

  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.heartBg};
`;

export const ContentsWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  padding: 15px 17px;
  border-radius: ${({ theme }) => theme.borderRadius.xs};
  box-shadow: ${({ theme }) => theme.shadow.boxShadow};
  gap: 10px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .contentsName {
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.bkTitle};
    word-break: break-all;
  }

  .location {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.gray};
    word-break: break-all;
  }

  .time {
    font-size: 10px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.darkGray};
  }

  .memo {
    font-size: 10px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.gray};
  }
`;

// 숫자 인덱스로 받아오고 제목이랑 위치 받아오면 될듯

const PlanbarContents = ({ onClick }) => {
  return (
    <PlanbarContentsStyle role="button" onClick={onClick}>
      <NCWrapper>
        <NumberBadge>1</NumberBadge>
        <ContentsWapper>
          <div>
            <span className="contentsName">도톤보리</span>
            <span className="location">관광명소 · 난바</span>
          </div>
          <div>
            <span className="time">12:00 ~ 13:00</span>
            <span className="memo">메모 어쩌구 저쩌구 블라블라 오코노미야끼가 맛있겠지 야호</span>
          </div>
        </ContentsWapper>
      </NCWrapper>
    </PlanbarContentsStyle>
  );
};

export default PlanbarContents;
