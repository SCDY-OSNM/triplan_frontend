import styled from 'styled-components';
import HomeStayContents from '@/components/contents/stayContents/HomeStayContents';
import HomeLeisureContents from '@/components/contents/leisureContents/HomeLeisureContents';
import HomePopularityTravels from '@/components/contents/popularityTravels/HomePopularityTravels';
import TravelogContents from '@/components/contents/travelogContents/TravelogContents';
import { useNavigate } from 'react-router';
import Navbar from '@/components/layout/navbar/Navbar';

export const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  width: 1200px;
`;

export const ContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TMWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  display: flex;
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.title};
`;

export const More = styled.button`
  display: flex;
  font-size: 20px;
  color: ${({ theme }) => theme.color.point};
  border: none;
  background-color: inherit;
  align-items: end;
  cursor: pointer;
`;

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <HomeStyle>
      <Navbar />
      <ContentsWrapper role="region" aria-label="국내 인기 여행지">
        <Title>🔥인기 급상승 국내 여행지 Best 10🔥</Title>
        <HomePopularityTravels />
      </ContentsWrapper>
      <ContentsWrapper>
        <TMWrapper>
          <Title>많이 찾는 즐길거리</Title>
          <More onClick={() => navigate('/leisure')}>더보기</More>
        </TMWrapper>
        <HomeLeisureContents />
      </ContentsWrapper>
      <ContentsWrapper>
        <TMWrapper>
          <Title>이번주 인기 숙소</Title>
          <More onClick={() => navigate('/stay')}>더보기</More>
        </TMWrapper>
        <HomeStayContents />
      </ContentsWrapper>
      <ContentsWrapper>
        <TMWrapper>
          <Title>Triplan 인기 여행기</Title>
          <More onClick={() => navigate('/travelog')}>더보기</More>
        </TMWrapper>
        <TravelogContents />
      </ContentsWrapper>
    </HomeStyle>
  );
};

export default HomePage;
