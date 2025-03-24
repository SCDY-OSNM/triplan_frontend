import styled from 'styled-components';
import { PlanSidebar } from '@/components/layout/sidebar/PlanSidebar';
import { PlanContents } from '@/components/contents/planContents/PlanContents';
import { DayButton } from '@/components/contents/planContents/DayButton';

const PlanPageStyle = styled.div`
  display: flex;
  position: absolute;
  width: calc(100vw - 400px);
  height: calc(100vh - 80px);
  right: 0;
  background-color: green;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 40px;
  padding: 20px 40px;
  width: 95%;
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  gap: 18px;
`;

const PlanPage = () => {
  return (
    <PlanPageStyle>
      <PlanSidebar />
      <ContentWrapper>
        <DayButton />
        <PlanContents />
      </ContentWrapper>
      일정 페이지
    </PlanPageStyle>
  );
};

export default PlanPage;
