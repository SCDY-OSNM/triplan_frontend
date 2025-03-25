import styled from 'styled-components';
import Search from '@/components/search/Search';
import { PagebarContents } from '@/components/contents/pagebarContents/PagebarContents';
import { PagebarNav } from '@/components/contents/pagebarContents/PagebarNav';

export const PageSidebarStyle = styled.aside`
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 80px;
  left: 0;
  width: 400px;
  height: calc(100% - 80px);
  background-color: white;

  // 나중에 삭제 필요
  border-right: 1px solid ${({ theme }) => theme.color.line};
`;

export const PSidebarHeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.color.rgb1}, ${theme.color.rgb2})`};
  align-items: center;
  padding: 20px 10px;

  span {
    color: white;
    font-size: 20px;
    font-weight: 500;
  }
`;

export const PSidebarContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
  gap: 20px;
  overflow-y: auto;
  flex-grow: 1;
`;

export default function PageSidebar() {
  return (
    <PageSidebarStyle>
      <PSidebarHeaderStyle>
        {/* page에 따라 span내용 바뀌게 설정 */}
        <span>내 주변</span>
        <br />
        {/* Search 수정 예정 */}
        <Search />

        {/* 내주변 일 경우에 nav 탭 전체, 맛집, 숙소, 놀거리 탭 있어야 함 */}
      </PSidebarHeaderStyle>
      <PagebarNav />
      <PSidebarContentWrapper>
        <PagebarContents />
        <PagebarContents />
        <PagebarContents />
      </PSidebarContentWrapper>
    </PageSidebarStyle>
  );
}
