import { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAtom } from 'jotai';
import { userAtom } from '@/atoms/auth.atom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

import {
  Contents,
  Title,
  Form,
  InputContainer,
  Label,
  ErrorMessage,
} from '@/styles/AuthForm.style';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import ProfileImageBox from '@/components/profile/ProfileImageBox';
import { FaCamera } from 'react-icons/fa';
import { patchMyInfo } from '@/apis/auth.api';
import { UpdateMyInfoPayload } from '@/interfaces/auth.interfaces';
import { useNavigate } from 'react-router';

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

type MypageFormInputs = UpdateMyInfoPayload;

export default function Mypage() {
  const [user, setUser] = useAtom(userAtom);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<MypageFormInputs>({ mode: 'onChange' });

  const navigate = useNavigate();

  // user 정보가 Jotai에 로드시 폼의 기본값 설정
  useEffect(() => {
    if (user) {
      reset({
        nickname: user.nickname,
        phoneNumber: user.phoneNumber,
        password: '',
      });
    }
  }, [user, reset]);

  const onSubmit: SubmitHandler<MypageFormInputs> = async data => {
    try {
      const updatedUser = await patchMyInfo(data);
      setUser(updatedUser);

      reset({ ...data, password: '' });

      toast.success('프로필이 성공적으로 수정되었습니다.');

      // 수정 완료시 일단 메인화면으로 이동
      navigate('/');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : '프로필 수정에 실패했습니다.');
    }
  };

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
      <Form onSubmit={handleSubmit(onSubmit)}>
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

          <InputContainer>
            <Label>닉네임</Label>
            <Input
              hasError={!!errors.nickname}
              type="text"
              {...register('nickname', {
                required: '닉네임을 입력하세요.',
                pattern: {
                  value: /^[a-zA-Z가-힣0-9]{2,8}$/,
                  message: '닉네임은 영어, 한글, 숫자로 구성된 2~8글자여야 합니다.',
                },
              })}
            />
            {errors.nickname && <ErrorMessage>{errors.nickname.message}</ErrorMessage>}
          </InputContainer>

          {/* 백엔드 수정되면 전화번호도 바뀔 듯 */}
          <InputContainer>
            <Label>전화번호</Label>
            <Input
              hasError={!!errors.phoneNumber}
              type="tel"
              {...register('phoneNumber', {
                required: '전화번호를 입력하세요.',
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: '전화번호는 01012341234 형식의 11자리 숫자여야 합니다.',
                },
              })}
            />
            {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>}
          </InputContainer>

          {/* 백엔드에서 비밀번호 일치하는지 확인하는거 필요할듯 그냥 비밀번호가 바로 바뀜 */}
          <InputContainer>
            <Label>비밀번호</Label>
            <Input
              hasError={!!errors.password}
              type="password"
              placeholder="정보를 수정하려면 현재 비밀번호를 입력하세요."
              {...register('password', {
                required: '정보를 수정하려면 비밀번호를 입력해야 합니다.',
              })}
            />
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
          </InputContainer>

          <Button type="submit" size="large" disabled={!isDirty || !isValid}>
            수정하기
          </Button>
        </InputContainer>
      </Form>
    </Contents>
  );
}
