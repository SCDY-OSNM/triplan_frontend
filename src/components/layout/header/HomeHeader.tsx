import Triplan_w from '@/assets/images/logos/Triplan_w.svg';
import * as S from './HomeHeader.style';

import ProfileImageBox from '@/components/profile/ProfileImageBox';
import Search from '@/components/search/Search';

export default function HomeHeader() {
  return (
    <S.HomeHeader>
      <S.HeaderWrapper>
        <S.LogoWrapper>
          <img src={Triplan_w} alt="흰색 로고" className="logo" />
          <Search />
        </S.LogoWrapper>
        <ProfileImageBox className="profile" width="50px" height="50px" />
      </S.HeaderWrapper>
    </S.HomeHeader>
  );
}
