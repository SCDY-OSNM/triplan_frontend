import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { IoMdMenu } from 'react-icons/io';
import Sidebar from '@/components/layout/sidebar/Sidebar';

// 이미지
import calender from '../../../../public/navbars/calender.png';
import location from '../../../../public/navbars/location.png';
import lodging from '../../../../public/navbars/lodging.png';
import food from '../../../../public/navbars/food.png';
import leisure from '../../../../public/navbars/leisure.png';
import traffic from '../../../../public/navbars/traffic.png';
import chat from '../../../../public/navbars/chat.png';

const navItems = [
  { src: calender, alt: '일정 짜기', title: '일정 짜기', route: '/plan' },
  { src: location, alt: '내 주변', title: '내 주변', route: '/nearby' },
  { src: lodging, alt: '숙소', title: '숙소', route: '/stay' },
  { src: food, alt: '맛집', title: '맛집', route: '/food' },
  { src: leisure, alt: '놀거리', title: '놀거리', route: '/leisure' },
  { src: traffic, alt: '교통', title: '교통', route: '/traffic' },
  { src: chat, alt: '채팅', title: '채팅', route: '/chat' },
];

export const NavbarStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;

export const ContentWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const SidebarBtn = styled.button`
  display: flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadow.boxShadow};
  color: ${({ theme }) => theme.color.bkTitle};
  cursor: pointer;
`;

export const ButtonWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

export const NavIcon = styled.span`
  display: flex;
  width: 70px;
  height: 70px;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
    height: 80%;
  }
`;

export const NavTitle = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.color.title};
  font-size: 20px;
  font-weight: 500;
`;

const Line = styled.line`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 2px;
  background-color: lightgray;
`;

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <NavbarStyle>
      <ContentWrapper>
        <SidebarBtn role="button" onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <IoMdMenu style={{ width: '50%', height: '50%' }} />
        </SidebarBtn>
        <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
        {/* 첫 번째 ButtonWrapper */}
        <ButtonWrapper onClick={() => navigate(navItems[0].route)}>
          <NavIcon>
            <img src={navItems[0].src} alt={navItems[0].alt} />
          </NavIcon>
          <NavTitle>{navItems[0].title}</NavTitle>
        </ButtonWrapper>
        {/* Line을 첫 번째와 두 번째 ButtonWrapper 사이에 추가 */}
        <Line />
        {/* 두 번째 ButtonWrapper */}
        <ButtonWrapper onClick={() => navigate(navItems[1].route)}>
          <NavIcon>
            <img src={navItems[1].src} alt={navItems[1].alt} />
          </NavIcon>
          <NavTitle>{navItems[1].title}</NavTitle>
        </ButtonWrapper>
        {/* 나머지 ButtonWrapper들 */}
        {navItems.slice(2).map((item, index) => (
          <ButtonWrapper key={index + 2} onClick={() => navigate(item.route)}>
            <NavIcon>
              <img src={item.src} alt={item.alt} />
            </NavIcon>
            <NavTitle>{item.title}</NavTitle>
          </ButtonWrapper>
        ))}
      </ContentWrapper>
    </NavbarStyle>
  );
}
