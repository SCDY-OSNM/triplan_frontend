import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';

export const HomeStayContentsStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 375px;
  gap: 10px;
`;

interface ImageProps {
  $isDefaultImage: boolean;
}

export const Image = styled.img<ImageProps>`
  width: 375px;
  height: 235px;
  object-fit: ${({ $isDefaultImage }) => ($isDefaultImage ? 'contain' : 'cover')};
  background-color: ${({ theme }) => theme.color.loading};
  border-radius: 15px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  gap: 12px;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const HeartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TTWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const Type = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.bkTitle};
`;

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const Dot = styled.span`
  font-size: 15px;
  color: ${({ theme }) => theme.color.gray};
`;

export const Location = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const LocationEtc = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.color.gray};
`;

export const StarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

export const StarIcon = styled(FaStar)`
  width: 15px;
  height: 15px;
  color: ${({ theme }) => theme.color.star};
`;

export const SRating = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.bkTitle};
`;

export const SCount = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const CPWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Coupon = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.color.gray};
  // 쿠폰 없을 경우
  // color: transparent;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: end;
  color: ${({ theme }) => theme.color.bkTitle};
  gap: 6px;
  // 숙박 매진일 경우
  //color: transparent;
`;

export const DiscountRate = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 20px;
  font-weight: 550;
  color: ${({ theme }) => theme.color.point};
  // 숙박 매진일 경우
  // color: transparent;

  .percentage {
    font-weight: bold;
    padding-top: 3px;
  }
`;

export const PayPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 3px;

  .won {
    font-size: 14px;
    font-weight: normal;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  font-size: 12px;
  font-weight: lighter;
  text-decoration: line-through;
  padding-bottom: 3px;

  .won {
    font-size: 10px;
  }
`;
