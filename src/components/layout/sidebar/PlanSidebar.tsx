import styled from 'styled-components';
import PlanbarContents from '@/components/contents/planContents/PlanbarContents';
import Modal from '@/components/modal/Modal';
import { useState } from 'react';
import PlanbarContentsEdit from '@/components/contents/planContents/PlanbarContentsEdit';

import { RoadSign } from '@/components/contents/planContents/RoadSign';
import { PlanbarDayContainer } from '@/components/contents/planContents/PlanbarDayContainer';

export const PlanSidebarStyle = styled.aside`
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 80px;
  left: 0;
  width: 400px;
  height: calc(100% - 80px);
  background-color: white;
  border-right: 1px solid ${({ theme }) => theme.color.line};
  overflow-y: auto;
`;

export const PlanSidebarHeaderStyle = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding: 20px 15px;
  gap: 10px;
  color: ${({ theme }) => theme.color.darkGray};

  .area {
    font-size: 16px;
    font-weight: 500;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.2;
    color: ${({ theme }) => theme.color.bkTitle};

    .edit {
      font-size: 12px;
      font-weight: normal;
      color: ${({ theme }) => theme.color.darkGray};
    }
  }

  .period {
    font-size: 12px;
    font-weight: normal;
  }
`;

// 편집 눌러도 아직 동작 안함

export function PlanSidebar() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <PlanSidebarStyle>
      <PlanSidebarHeaderStyle>
        <span className="area">여수(지명 자동생성) 여행</span>
        <span className="title">
          절거운 여수 여행(여행제목) <span className="edit">편집</span>
        </span>
        <span className="period">2025.01.26 ~ 2025.01.31</span>
      </PlanSidebarHeaderStyle>
      <PlanbarDayContainer num={1} />
      <PlanbarContents onClick={() => setModalOpen(true)} />
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <PlanbarContentsEdit />
        </Modal>
      )}
      <PlanbarDayContainer num={2} />
      <PlanbarContents onClick={() => setModalOpen(true)} />
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <PlanbarContentsEdit />
        </Modal>
      )}
      <RoadSign /> {/* 위치 계산 잘해서 해야할듯,, */}
    </PlanSidebarStyle>
  );
}
