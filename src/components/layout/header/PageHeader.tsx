import { useNavigate } from 'react-router';
import Triplan_r from '@/assets/images/logos/Triplan_r.svg';
import * as S from './PageHeader.style';
import ProfileImageBox from '@/components/profile/ProfileImageBox';
import { IoMdMenu } from 'react-icons/io';

export default function PageHeader({ isNarrow }) {
  const navigate = useNavigate();

  return (
    <S.PageHeader>
      <S.PageHeaderWrapper isNarrow={isNarrow}>
        <S.SideMenu>
          <IoMdMenu />
        </S.SideMenu>
        <img src={Triplan_r} alt="rgb 로고" className="logo" onClick={() => navigate('/')} />
        <ProfileImageBox className="profile" width="50px" height="50px" />
      </S.PageHeaderWrapper>
    </S.PageHeader>
  );
}
