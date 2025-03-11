import styled from 'styled-components';
import React from 'react';
import penguin from './penguin.jpeg';

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

interface ProfileImageBoxProps {
  // src?: string;
  // alt?: string;
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
