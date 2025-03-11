import * as S from './HomeLeisureContents.style';
import { useEffect, useState } from 'react';
import Likes from '@/components/likes/Likes';
// import axios from 'axios';

const HomeLeisureContents = () => {
  const [imgError, setImgError] = useState(false);
  const [imgUrl, setImgUrl] = useState('src/components/contents/leisureContents/image.png');

  const handleImgError = () => {
    setImgError(true);
  };

  // 이미지 URL API
  useEffect(() => {
    const fetchImage = async () => {
      try {
        // API 엔드포인트
        // const response = await axios.get('');
        // setImgUrl(response.data.imageUrl);
        const response = await fetch('');
        const data = await response.json();
        setImgUrl(data.imageUrl);
      } catch (error) {
        console.error('이미지 URL을 가져오는 중 오류 발생:', error);
      }
    };

    fetchImage();
  }, []);

  // 티켓 & 레저 API 불러오기

  // 무료 && 매진일 경우

  return (
    <S.HomeLeisureContentsStyle>
      <S.IContents>
        <S.Image
          src={imgError ? './errImg.png' : imgUrl}
          onError={handleImgError}
          alt="즐길거리 이미지"
          $isDefaultImage={imgError}
        />
      </S.IContents>
      <S.TContents>
        <S.HeartWrapper>
          <S.LTWrapper>
            <S.LocationWrapper>
              <S.Location>경기</S.Location>
              <S.Dot>·</S.Dot>
              <S.LocationEtc>곤지암</S.LocationEtc>
            </S.LocationWrapper>
            <S.Title>곤지암리조트 동계 리프트 안녕</S.Title>
          </S.LTWrapper>
          <Likes width="36px" height="36px" />
        </S.HeartWrapper>
        <S.PriceWrapper>
          <S.DiscountRate>
            24
            <span className="percentage">%</span>
          </S.DiscountRate>
          <S.PayPrice>
            56,000
            <span className="won">원~</span>
          </S.PayPrice>
        </S.PriceWrapper>
      </S.TContents>
    </S.HomeLeisureContentsStyle>
  );
};

export default HomeLeisureContents;
