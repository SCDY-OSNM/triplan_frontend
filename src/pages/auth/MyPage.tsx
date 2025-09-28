import styled from 'styled-components';
import { Contents, Title, Form, InputContainer, Label } from '@/styles/AuthForm.style';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import ProfileImageBox from '@/components/profile/ProfileImageBox';
import { FaCamera } from 'react-icons/fa';
import { useMy } from '@/hook/useMy';
import FormInput from '@/components/input/FormInput';
import { UpdateMyInfoPayload } from '@/interfaces/auth.interfaces';

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;

// S3 서버 완료 되면 수정 예정
const EditButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.color.point};
  color: white;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  font-size: 18px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function Mypage() {
  const { user, register, handleSubmit, errors, isDirty, isValid } = useMy();

  // Jotai에서 user 정보를 불러오지 못했을 경우
  if (!user) {
    return (
      <Contents>
        <Title>로딩 중...</Title>
      </Contents>
    );
  }

  return (
    <Contents>
      <Title>프로필 수정</Title>
      <Form onSubmit={handleSubmit}>
        <ProfileSection>
          <ProfileImageWrapper>
            <ProfileImageBox width="120px" height="120px" />
            <EditButton>
              <FaCamera />
            </EditButton>
          </ProfileImageWrapper>
        </ProfileSection>

        <InputContainer>
          <InputContainer>
            <Label>이메일</Label>
            <Input
              type="email"
              defaultValue={user.email}
              disabled
              style={{ backgroundColor: '#f2f2f2', cursor: 'not-allowed' }}
            />
          </InputContainer>

          <FormInput<UpdateMyInfoPayload>
            label="닉네임"
            name="nickname"
            register={register}
            errors={errors}
            rules={{
              required: '닉네임을 입력하세요.',
              pattern: {
                value: /^[a-zA-Z가-힣0-9]{2,8}$/,
                message: '닉네임은 영어, 한글, 숫자로 구성된 2~8글자여야 합니다.',
              },
            }}
          />

          <FormInput<UpdateMyInfoPayload>
            label="전화번호"
            name="phoneNumber"
            type="tel"
            register={register}
            errors={errors}
            rules={{
              required: '전화번호를 입력하세요.',
              pattern: {
                value: /^[0-9]{11}$/,
                message: '전화번호는 01012341234 형식의 11자리 숫자여야 합니다.',
              },
            }}
          />

          {/* 백엔드에서 비밀번호 일치하는지 확인하는거 필요할듯 그냥 비밀번호가 바로 바뀜 */}
          <FormInput<UpdateMyInfoPayload>
            label="비밀번호"
            name="password"
            type="password"
            placeholder="정보를 수정하려면 현재 비밀번호를 입력하세요."
            register={register}
            errors={errors}
            rules={{
              required: '정보를 수정하려면 비밀번호를 입력해야 합니다.',
            }}
          />

          <Button type="submit" size="large" disabled={!isDirty || !isValid}>
            수정하기
          </Button>
        </InputContainer>
      </Form>
    </Contents>
  );
}
