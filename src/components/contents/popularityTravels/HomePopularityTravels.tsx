import * as S from './HomePopularityTravels.style';
import { useEffect, useState } from 'react';
// import axios from 'axios';

const HomePopularityTravels = () => {
  const [imageUrl, setImageUrl] = useState(
    'src/components/contents/popularityTravels/popimage.png'
  );
  //const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // api 연결 할 떄는 axios 사용
        // const response = await axios.get('');
        // setImageUrl(response.data.imageUrl);

        const response = await fetch('');
        const data = await response.json();
        setImageUrl(data.imageUrl);
      } catch (error) {
        console.error('이미지 URL을 가져오는 중 오류 발생 Top10:', error);
      }
    };

    fetchImage();
  }, []);

  return (
    <S.HomePopularityTravelsStyle>
      <S.Image imageUrl={imageUrl}>
        <S.TContents>
          <S.Ranking>1</S.Ranking>
          <S.TLWrapper>
            <S.Title>서귀포 매일 올레 시장 어쩌구 저쩌구</S.Title>
            <S.Location>제주</S.Location>
          </S.TLWrapper>
        </S.TContents>
      </S.Image>
    </S.HomePopularityTravelsStyle>
  );
};

export default HomePopularityTravels;
