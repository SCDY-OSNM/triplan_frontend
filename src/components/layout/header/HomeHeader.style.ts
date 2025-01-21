import styled from 'styled-components';

export const HeaderStyle = styled.header`
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.rgb1},
    ${({ theme }) => theme.color.rgb2}
  );
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;