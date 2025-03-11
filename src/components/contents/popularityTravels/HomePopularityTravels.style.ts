import styled from 'styled-components';

export const HomePopularityTravelsStyle = styled.article`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 320px;
  cursor: pointer;
`;

interface ImageProps {
  imageUrl: string;
}

export const Image = styled.div<ImageProps>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: ${({ imageUrl, theme }) => (imageUrl ? `url(${imageUrl})` : theme.color.loading)};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.1)
    );
  }
`;

export const TContents = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 20px;
  color: white;
  z-index: 1;
`;

export const Ranking = styled.span`
  font-size: 52px;
  font-weight: 550;
  font-style: italic;
`;

export const TLWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Location = styled.span`
  font-size: 18px;
`;
