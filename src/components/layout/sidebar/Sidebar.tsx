import styled from 'styled-components';
import { useEffect, useRef } from 'react';
import { IoClose } from 'react-icons/io5';

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 900;
`;

export const SidebarStyle = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 400px;
  height: 100%;
  background-color: #f7f8fb;
  //background-color: white;
  z-index: 1000;
`;

export const SidebarHeader = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: white;
  align-items: center;
  padding: 0 10px;
  color: ${({ theme }) => theme.color.title};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: ${({ theme }) => theme.shadow.bottom};
`;

export const CloseIconBtn = styled.button`
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseIcon = styled(IoClose)`
  width: 80%;
  height: 80%;
`;

export const SidebarHeaderTitle = styled.h1`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  align-items: center;
  padding-right: 32px;
`;

export const SidebarContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 50px);
  padding: 5px 20px;
  gap: 10px;
  overflow-y: auto;
`;

export const CategoryWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CategoryTitle = styled.h2`
  padding: 15px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.color.title};
`;

export const ContentWrapper = styled.article`
  display: flex;
  border-radius: 10px;
  background-color: white;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow.boxShadow};
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  width: 100%;
`;

// 호텔 모텔 등 누를 수 있는 버튼
export const ContentBtn = styled.button`
  display: flex;
  padding: 12px 0;

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.color.bkTitle};
  }
`;

export default function Sidebar({ isOpen, onClose }) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // sidebar 밖에 있는 곳 클릭 시 창 닫김
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // API 연결해서 카테고리 제목 및 내용 불러오기

  // ContentBtn 클릭시 각각 navigate 적용 필요

  return (
    <>
      <SidebarOverlay onClick={onClose} />
      <SidebarStyle ref={sidebarRef}>
        <SidebarHeader>
          <CloseIconBtn role="button" onClick={onClose}>
            <CloseIcon />
          </CloseIconBtn>
          <SidebarHeaderTitle>카테고리</SidebarHeaderTitle>
        </SidebarHeader>
        <SidebarContentWrapper>
          {/* 사이드바 내용 */}

          {/* API 연동 필요 */}
          <CategoryWrapper>
            <CategoryTitle>내 주변</CategoryTitle>
            <ContentWrapper>
              <ContentGrid role="grid">
                {/* API 연동해서 불러올 예정 */}
                <ContentBtn role="button">
                  <span className="">전체</span>
                </ContentBtn>
                <ContentBtn role="button">
                  <span className="">맛집</span>
                </ContentBtn>
                <ContentBtn role="button">
                  <span>숙소</span>
                </ContentBtn>
                <ContentBtn role="button">
                  <span>레저/티켓</span>
                </ContentBtn>
              </ContentGrid>
            </ContentWrapper>
          </CategoryWrapper>

          <CategoryWrapper>
            {/* API 연동 필요 */}
            <CategoryTitle>국내숙소</CategoryTitle>
            <ContentWrapper>
              <ContentGrid role="grid">
                {/* API 연동해서 불러올 예정 */}
                <ContentBtn role="button">
                  <span className="">전체</span>
                </ContentBtn>
                <ContentBtn role="button">
                  <span className="">호텔</span>
                </ContentBtn>
                <ContentBtn role="button">
                  <span>호텔</span>
                </ContentBtn>
                <ContentBtn role="button">
                  <span>모텔</span>
                </ContentBtn>
                <ContentBtn role="button">
                  <span>펜션/풀빌라</span>
                </ContentBtn>
              </ContentGrid>
            </ContentWrapper>
          </CategoryWrapper>
        </SidebarContentWrapper>
      </SidebarStyle>
    </>
  );
}
