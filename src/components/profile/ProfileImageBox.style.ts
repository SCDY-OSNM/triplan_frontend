import styled from 'styled-components';

export const ProfileImageContainer = styled.div<{
  width: string;
  height: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 50%;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
