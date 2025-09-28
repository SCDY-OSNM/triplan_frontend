import styled from 'styled-components';
import React from 'react';
import penguin from './penguin.jpeg';
import { theme } from '@/styles/theme';

export const ProfileImageContainer = styled.div<{
  width: string;
  height: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${theme.borderRadius.round};
`;

export const ProfileImage = styled.img`
  border-radius: ${theme.borderRadius.round};
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

interface ProfileImageBoxProps {
  width: string;
  height: string;
  className?: string;
}

const ProfileImageBox: React.FC<ProfileImageBoxProps> = ({ width, height, className }) => {
  return (
    <ProfileImageContainer className={className} width={width} height={height}>
      <ProfileImage role="img" alt="프로필이미지" src={penguin} />
    </ProfileImageContainer>
  );
};

export default ProfileImageBox;
