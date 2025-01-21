import { useNavigate } from 'react-router';
import Triplan_w from '@/assets/images/logos/Triplan_w.svg';
import * as S from './HomeHeader.style';
import ProfileImageBox from '@/components/profile/ProfileImageBox';
import Search from '@/components/search/Search';

export default function HomeHeader() {
  const navigate = useNavigate();

  return (
    <S.HomeHeader>
      <S.HeaderWrapper>
        <S.LogoSearchWrapper>
          <img src={Triplan_w} alt="흰색 로고" className="logo" onClick={() => navigate('/')} />
          <Search />
        </S.LogoSearchWrapper>
        <ProfileImageBox className="profile" width="50px" height="50px" />
      </S.HeaderWrapper>
    </S.HomeHeader>
  );
}
