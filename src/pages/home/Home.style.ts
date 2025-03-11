import styled from 'styled-components';

export const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  width: 1200px;
`;

export const ContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TMWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  display: flex;
  font-size: 40px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.title};
`;

export const More = styled.button`
  display: flex;
  font-size: 20px;
  color: ${({ theme }) => theme.color.point};
  border: none;
  background-color: inherit;
  align-items: end;
  cursor: pointer;
`;
