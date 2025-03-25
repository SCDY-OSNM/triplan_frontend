import * as S from './HomeStayContents.style';
import Likes from '@/components/likes/Likes';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Stars from '@/components/stars/Stars';

const HomeStayContents = () => {
  const [imgError, setImgError] = useState(false);
  const [imgUrl, setImgUrl] = useState('');

  const handleImgError = () => {
    setImgError(true);
  };

  // 이미지 URL API
  useEffect(() => {
    const fetchImage = async () => {
      try {
        // API 엔드포인트
        const response = await axios.get('');
        setImgUrl(response.data.imageUrl);
      } catch (error) {
        console.error('이미지 URL을 가져오는 중 오류 발생 HomePage 숙박:', error);
      }
    };

    fetchImage();
  }, []);

  // 숙박 데이터 API

  // JWT 정보 확인 && 쿠폰 확인

  return (
    <S.HomeStayContentsStyle>
      <S.IContents>
        <S.Image
          src={imgError ? './errImg.png' : imgUrl}
          onError={handleImgError}
          alt="숙소 이미지"
          $isDefaultImage={imgError}
        />
      </S.IContents>
      <S.TContents>
        <S.TextContent>
          <S.HeartWrapper>
            <S.TTWrapper>
              <S.Type>펜션 (숙소-타입)</S.Type>
              <S.Title>태안 청포대 수펜션 (숙소 이름) 어쩌구 저쩌구</S.Title>
            </S.TTWrapper>
            <Likes />
          </S.HeartWrapper>
          <S.LocationWrapper>
            <S.Location>화천군(장소)</S.Location>
            <S.Dot>·</S.Dot>
            <S.LocationEtc>청포대 해수욕장 차량 3분 (기타 장소?)</S.LocationEtc>
          </S.LocationWrapper>
          <Stars />
        </S.TextContent>
        <S.CPWrapper>
          <S.Coupon>쿠폰 적용 시</S.Coupon>
          <S.PriceWrapper>
            <S.DiscountRate>
              24
              <span className="percentage">%</span>
            </S.DiscountRate>
            <S.PayPrice>
              120,000
              <span className="won">원</span>
            </S.PayPrice>
            <S.Price>
              51,000
              <span className="won">원</span>
            </S.Price>
          </S.PriceWrapper>
        </S.CPWrapper>
      </S.TContents>
    </S.HomeStayContentsStyle>
  );
};

export default HomeStayContents;
