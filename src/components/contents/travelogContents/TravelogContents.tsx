import * as S from './TravelogContents.style';
import ProfileImageBox from '@/components/profile/ProfileImageBox';
import Likes from '@/components/likes/Likes';
import { useEffect, useState } from 'react';
// import axios from 'axios';

const TravelogContents = () => {
  const [imgError, setImgError] = useState(false);
  const [imgUrl, setImgUrl] = useState('src/components/contents/travelogContents/travel.png');
  // const [imgUrl, setImgUrl] = useState('');

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

  // JWT로 프로필 사진, 닉네임, 찜 여부 & 제목, 기간, 해시태그, 개요글 가져오기

  // 해시태그 옆으로 넘길 수 있게 할지 말지 고민중

  return (
    <S.TravelogContentsStyle>
      <S.TopContents>
        <S.PTWrapper>
          <ProfileImageBox width="60px" height="60px" />
          <S.TIWrapper>
            <S.Title>12월 2박3일 강릉 여행❄️겁나 길게 쓸꺼임 </S.Title>
            <S.Info>
              선찌님의 일정 · 2박 3일
              {/*<S.NickName>선찌님의 일정</S.NickName>*/}
              {/*<S.Dot>·</S.Dot>*/}
              {/*<S.Period>2박 3일</S.Period>*/}
            </S.Info>
          </S.TIWrapper>
        </S.PTWrapper>
        <Likes />
      </S.TopContents>
      <S.ITWrapper>
        <S.IContents>
          <S.Image
            src={imgError ? './errImg.png' : imgUrl}
            onError={handleImgError}
            alt="즐길거리 이미지"
            $isDefaultImage={imgError}
          />
        </S.IContents>
        <S.HTWrapper>
          <S.Hashtags>
            <S.Hashtag>
              #해시태그 #강릉 여행 #남자친구 #2024년 #어쩌구저쩌구 #소ㅑㄹ라소ㅑㄹ라
            </S.Hashtag>
          </S.Hashtags>
          <S.Text>
            2024년 마지막 12월을 강릉에서 보냈다. 남자친구랑 같이 놀았다. 재미있었다 어쩌고 저쩌고
            이러쿠ㅠㅇ 저러쿵 수수수수퍼노바 사건은 다가와아 오에 거세게 커져가 아 오에 질문은 계속
            되아오 우린 어디서 왔나 오에
          </S.Text>
        </S.HTWrapper>
      </S.ITWrapper>
    </S.TravelogContentsStyle>
  );
};

export default TravelogContents;
