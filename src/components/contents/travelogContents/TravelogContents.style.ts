import styled from 'styled-components';

export const TravelogContentsStyle = styled.article`
  display: flex;
  flex-direction: column;
  width: 580px;
  gap: 20px;
  cursor: pointer;
`;

export const TopContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PTWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const TIWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.bkTitle};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Info = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.color.gray};
  gap: 2px;
`;

// export const NickName = styled.span``;
//
// export const Dot = styled.span``;
//
// export const Period = styled.span``;

export const ITWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const IContents = styled.div`
  width: 580px;
  height: 340px;
`;

interface ImageProps {
  $isDefaultImage: boolean;
}

export const Image = styled.img<ImageProps>`
  width: 100%;
  height: 100%;
  object-fit: ${({ $isDefaultImage }) => ($isDefaultImage ? 'contain' : 'cover')};
  background-color: ${({ theme }) => theme.color.loading};
  border-radius: 20px;
`;

export const HTWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 5px;
  gap: 13px;
  font-size: 20px;
`;

export const Hashtags = styled.div`
  display: flex;
  width: 100%;
`;

export const Hashtag = styled.span`
  color: ${({ theme }) => theme.color.point};
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.color.bkBody};
  font-weight: 300;
  overflow: hidden;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
