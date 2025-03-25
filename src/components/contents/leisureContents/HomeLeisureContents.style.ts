import styled from 'styled-components';

export const HomeLeisureContentsStyle = styled.article`
  display: flex;
  flex-direction: column;
  width: 380px;
  gap: 15px;
  cursor: pointer;
`;

export const IContents = styled.div`
  width: 380px;
  height: 490px;
`;

export interface ImageProps {
  $isDefaultImage: boolean;
}

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${({ $isDefaultImage }) => ($isDefaultImage ? 'contain' : 'cover')};
  background-color: ${({ theme }) => theme.color.loading};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
`;

export const TContents = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  gap: 12px;
`;

export const HeartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LTWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 90%;
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Location = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const Dot = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const LocationEtc = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: bold;
  //width: 330px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: end;
  color: ${({ theme }) => theme.color.bkTitle};
  gap: 10px;
  // 무료 && 매진일 경우
  // color: transparent;
`;

export const DiscountRate = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 550;
  color: ${({ theme }) => theme.color.point};
  // 무료 && 매진일 경우
  // color: transparent;

  .percentage {
    font-weight: bold;
    padding-top: 3px;
  }
`;

export const PayPrice = styled.span`
  display: flex;
  flex-direction: row;
  align-items: end;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 3px;

  .won {
  }
`;
