import * as S from './ProfileImageBox.style';
import penguin from './penguin.jpeg';

interface ProfileImageBoxProps {
  // src?: string;
  // alt?: string;
  width: string;
  height: string;
  className?: string;
}

const ProfileImageBox: React.FC<ProfileImageBoxProps> = ({ width, height, className }) => {
  return (
    <S.ProfileImageContainer className={className} width={width} height={height}>
      <S.ProfileImage src={penguin} alt="펭귄" />
    </S.ProfileImageContainer>
  );
};

export default ProfileImageBox;
