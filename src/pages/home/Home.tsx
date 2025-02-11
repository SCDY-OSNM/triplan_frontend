import * as S from './Home.style';
import HomeStayContents from '@/components/contents/stayContents/HomeStayContents';
import HomeLeisureContents from '@/components/contents/leisureContents/HomeLeisureContents';
import HomePopularityTravels from '@/components/contents/popularityTravels/HomePopularityTravels';
import TravelogContents from '@/components/contents/travelogContents/TravelogContents';
import { useNavigate } from 'react-router';
import { TMWrapper } from './Home.style';

const Home = () => {
  const navigate = useNavigate();

  return (
    <S.HomeStyle>
      <S.ContentsWrapper role="region" aria-label="국내 인기 여행지">
        <S.Title>🔥인기 급상승 국내 여행지 Best 10🔥</S.Title>
        <HomePopularityTravels />
      </S.ContentsWrapper>
      <S.ContentsWrapper>
        <TMWrapper>
          <S.Title>많이 찾는 즐길거리</S.Title>
          <S.More onClick={() => navigate('/leisure')}>더보기</S.More>
        </TMWrapper>
        <HomeLeisureContents />
      </S.ContentsWrapper>
      <S.ContentsWrapper>
        <TMWrapper>
          <S.Title>이번주 인기 숙소</S.Title>
          <S.More onClick={() => navigate('/stay')}>더보기</S.More>
        </TMWrapper>
        <HomeStayContents />
      </S.ContentsWrapper>
      <S.ContentsWrapper>
        <TMWrapper>
          <S.Title>Triplan 인기 여행기</S.Title>
          <S.More onClick={() => navigate('/travelog')}>더보기</S.More>
        </TMWrapper>
        <TravelogContents />
      </S.ContentsWrapper>
    </S.HomeStyle>
  );
};

export default Home;
