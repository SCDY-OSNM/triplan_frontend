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
import { useAtomValue, useSetAtom } from 'jotai';
import { isLoggedInAtom, tokenAtom, userAtom } from '@/atoms/auth.atom';
import { logout } from '@/apis/auth.api';
import { toast } from 'react-toastify';

const HeaderStyle = styled.header.withConfig({
  shouldForwardProp: prop => !['isHome', 'isLogSign'].includes(prop),
})<{ isHome: boolean; isLogSign: boolean }>`
  display: flex;
  position: fixed;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background: ${({ isHome, theme }) =>
    isHome ? `linear-gradient(to right, ${theme.color.rgb1}, ${theme.color.rgb2})` : 'white'};
  box-shadow: ${({ isLogSign, theme }) => (isLogSign ? 'none' : theme.shadow.bottom)};
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

const AuthButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const AuthButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
`;

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
  border-radius: ${({ theme }) => theme.borderRadius.xs};
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
  // padding 이랑 갭을 같이 줄꺼면 magin으로 수정 필요
  border-bottom: 1px solid lightgray; // lightgray -> theme 파일에 넣어버리기
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
    background-color: ${({ theme }) => theme.color.hwhite};
  }
`;

export const DropdownText = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.title};
`;

export default function Header({ isHome, hasMap, isLogSign }) {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const profileRef = useRef<HTMLDivElement | null>(null);

  const isLoggedIn = useAtomValue(isLoggedInAtom);
  const user = useAtomValue(userAtom);
  const setToken = useSetAtom(tokenAtom);
  const setUser = useSetAtom(userAtom);

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

  // --- 로그아웃 ---
  const handleLogout = async () => {
    try {
      await logout();
      setToken(null);
      setUser(null);
      setIsProfileOpen(false);

      // 로그아웃 시 일단 메인페이지로 이동
      navigate('/');
      toast.success('성공적으로 로그아웃 되었습니다.');
    } catch (error) {
      console.log('로그아웃 실패: ', error);

      setToken(null);
      setUser(null);
    }
  };

  const renderProfileImage = () => {
    return <ProfileImageBox className="profile" width="42px" height="42px" />;
  };

  const renderDropdown = () => {
    return (
      <DropdownWrapper ref={dropdownRef} $isProfileOpen={isProfileOpen}>
        <UserInfo>
          <ProfileImageBox width="32px" height="32px" />
          <DropdownText>{user ? `${user.nickname}님` : '사용자님'}</DropdownText>
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
        <DropdownItems onClick={() => navigate('/mypage')}>
          <IoSettingsOutline /> 프로필 수정
        </DropdownItems>
        <DropdownItems onClick={handleLogout}>
          <IoLogOutOutline /> 로그아웃
        </DropdownItems>
      </DropdownWrapper>
    );
  };

  return (
    <>
      <HeaderStyle isHome={isHome} isLogSign={isLogSign}>
        <HeaderWrapper hasMap={hasMap}>
          {isLogSign ? (
            // 로그인 및 회원가입 페이지일 때 로고만 표시
            <img
              src={Triplan_r}
              alt="rgb 로고"
              onClick={() => navigate('/')}
              style={{ marginLeft: '20px', height: '30px' }}
            />
          ) : isHome ? (
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
                style={{ marginLeft: '78px', cursor: 'pointer' }}
              />
            </>
          )}
          {/*---- 로그인 상태에 따른 조건부 랜더링 -----*/}
          <ButtonWrapper isHome={isHome}>
            {isLoggedIn ? (
              // 로그인 상태일 때 : 프로필 이미지와 드롭다운 표시
              <>
                <ProfileImgWrapper ref={profileRef} onClick={toggleDropdown}>
                  {renderProfileImage()}
                </ProfileImgWrapper>
                {renderDropdown()}
              </>
            ) : (
              // 로그아웃 상태일 떄 : 로그인/회원가입 버튼 표시 (로그인/회원가입 페이지 아닐 경우만)
              !isLogSign && (
                <AuthButtonWrapper>
                  <AuthButton onClick={() => navigate('/login')}>로그인</AuthButton>
                  <AuthButton onClick={() => navigate('/signup')}>회원가입</AuthButton>
                </AuthButtonWrapper>
              )
            )}
          </ButtonWrapper>
        </HeaderWrapper>
      </HeaderStyle>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
