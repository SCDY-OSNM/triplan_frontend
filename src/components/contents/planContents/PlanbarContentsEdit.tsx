import styled from 'styled-components';
import { FaRegClock } from 'react-icons/fa6';
import { LuText } from 'react-icons/lu';

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// 클릭된 일정(컨텐츠) 나와야함
// 시간이나 메모는 추가, 수정, 삭제가 되어야하고, 반영이 되어야함

// 시간, 메모 없을 경우엔 시간 추가, 메모 추가가 나와야하고,
// 있을 경우엔 있는 내용이 나오는걸로

const PlanbarContentsEdit = () => {
  return (
    <EditContainer>
      <span>
        <FaRegClock /> 시간 추가
      </span>
      <span>
        <LuText /> 메모 추가
      </span>
    </EditContainer>
  );
};

export default PlanbarContentsEdit;
