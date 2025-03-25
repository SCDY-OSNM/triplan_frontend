import styled from 'styled-components';
import { useNavigate } from 'react-router';
import Triplan_w from '../../../public/logos/Triplan_w.svg';
import Triplan_r from '../../../public/logos/Triplan_r.svg';
import ProfileImageBox from '@/components/profile/ProfileImageBox';
import Search from '@/components/search/Search';
import { IoIosCalendar, IoMdMenu } from 'react-icons/io';
import { useEffect, useState, useRef } from 'react';
import Sidebar from '@/components/layout/sidebar/Sidebar';
import { IoCartOutline, IoHeartOutline, IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';

const HeaderStyle = styled.header.withConfig({
  shouldForwardProp: prop => !['isHome'].includes(prop),
})<{ isHome: boolean }>`
  display: flex;
  position: fixed;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background: ${({ isHome, theme }) =>
    isHome ? `linear-gradient(to right, ${theme.color.rgb1}, ${theme.color.rgb2})` : 'white'};
  box-shadow: ${({ theme }) => theme.shadow.bottom};
  z-index: 50;
`;

const HeaderWrapper = styled.div.withConfig({
  shouldForwardProp: prop => !['hasMap'].includes(prop),
})<{ hasMap: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ hasMap }) => (hasMap ? '100%' : '1200px')};
  padding: ${({ hasMap }) => (hasMap ? '0 30px' : '0')};
  height: 100%;
  cursor: pointer;
`;

const LogoSearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const ButtonWrapper = styled.div.withConfig({
  shouldForwardProp: prop => !['isHome'].includes(prop),
})<{ isHome: boolean }>`
  display: flex;
  // 로그인 했을 경우 justify-content: end, 했을 경우 space-between
  //justify-content: space-between;
  justify-content: end;
  cursor: pointer;
  width: 120px;
  color: ${({ isHome, theme }) => (isHome ? 'white' : theme.color.title)};
`;

// const Button = styled.button`
//   font-size: 16px;
//   font-weight: 500;
// `;

const SideMenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  color: ${({ theme }) => theme.color.bkTitle};
`;

const SidebarIcon = styled(IoMdMenu)`
  width: 80%;
  height: 80%;
`;

const ProfileImgWrapper = styled.div`
  cursor: pointer;
  position: relative;
`;

export const DropdownWrapper = styled.div<{ $isProfileOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.xs}
  box-shadow: ${({ theme }) => theme.shadow.rb};
  opacity: ${({ $isProfileOpen }) => ($isProfileOpen ? 1 : 0)};
  transform: translateY(${({ $isProfileOpen }) => ($isProfileOpen ? '0' : '-10px')});
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
  z-index: 100;
  pointer-events: ${({ $isProfileOpen }) => ($isProfileOpen ? 'auto' : 'none')};
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  border-bottom: 1px solid lightgray;
  width: 100%;
`;

export const DropdownItems = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 8px;
  padding: 14px 20px;
  font-size: 15px;
  color: ${({ theme }) => theme.color.bkBody};

  &:hover {
    background-color: #f4f4f4;
  }
`;

export const DropdownText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.title};
`;

export default function Header({ isHome, hasMap }) {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        profileRef.current &&
        !profileRef.current.contains(e.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsProfileOpen(prev => !prev);

  const renderProfileImage = () => {
    return <ProfileImageBox className="profile" width="42px" height="42px" />;
  };

  const renderDropdown = () => {
    return (
      <DropdownWrapper ref={dropdownRef} $isProfileOpen={isProfileOpen}>
        <UserInfo>
          <ProfileImageBox width="32px" height="32px" />
          <DropdownText>선찌 님</DropdownText>
        </UserInfo>
        <DropdownItems onClick={() => navigate('/myplan')}>
          <IoIosCalendar /> 내 일정
        </DropdownItems>
        <DropdownItems onClick={() => navigate('/like')}>
          <IoHeartOutline /> 찜
        </DropdownItems>
        <DropdownItems onClick={() => navigate('/cart')}>
          <IoCartOutline /> 장바구니
        </DropdownItems>
        <DropdownItems onClick={() => navigate('/profile')}>
          <IoSettingsOutline /> 프로필 수정
        </DropdownItems>
        <DropdownItems>
          <IoLogOutOutline /> 로그아웃
        </DropdownItems>
      </DropdownWrapper>
    );
  };

  return (
    <>
      <HeaderStyle isHome={isHome}>
        <HeaderWrapper hasMap={hasMap}>
          {isHome ? (
            <LogoSearchWrapper>
              <img src={Triplan_w} alt="흰색 로고" onClick={() => navigate('/')} />
              <Search />
            </LogoSearchWrapper>
          ) : (
            <>
              <SideMenuBtn role="button" onClick={() => setSidebarOpen(!isSidebarOpen)}>
                <SidebarIcon />
              </SideMenuBtn>
              <img
                src={Triplan_r}
                alt="rgb 로고"
                onClick={() => navigate('/')}
                style={{ marginLeft: '78px' }}
              />
            </>
          )}
          <ButtonWrapper isHome={isHome}>
            {/* 로그인 O 프로필 이미지 가져오기 */}
            <>
              <ProfileImgWrapper ref={profileRef} onClick={toggleDropdown}>
                {renderProfileImage()}
              </ProfileImgWrapper>
              {renderDropdown()}
            </>

            {/* 로그인 X 경우 */}
            {/*<Button onClick={() => navigate('/login')}>로그인</Button>*/}
            {/*<Button onClick={() => navigate('/signup')}>회원가입</Button>*/}
          </ButtonWrapper>
        </HeaderWrapper>
      </HeaderStyle>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
