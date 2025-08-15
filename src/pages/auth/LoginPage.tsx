import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Input from '@/components/input/Input';
import Button from '@/components/button/Button';
import { LoginFormInputs } from '@/interfaces/auth.interfaces';
import {
  Contents,
  ErrorMessage,
  Form,
  InputContainer,
  LinkContainer,
  LinkStyle,
  Span,
  Title,
} from '@/styles/AuthForm.style';
import { getMyInfo, login } from '@/apis/auth.api';
import { useSetAtom } from 'jotai';
import { tokenAtom, userAtom } from '@/atoms/auth.atom';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  const setToken = useSetAtom(tokenAtom);
  const setUser = useSetAtom(userAtom);

  // 로딩상태
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
    setIsLoading(true);
    try {
      const { accessToken } = await login(data);
      setToken(accessToken);

      const userInfo = await getMyInfo();
      setUser(userInfo);

      toast.success(`${userInfo.nickname}님, 환영합니다!`);
      navigate('/');
    } catch (error) {
      setToken(null);
      setUser(null);

      console.error('로그인 처리중 에러 발생:', error);
      toast.error('로그인 실패');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Contents>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input
            hasError={!!errors.email}
            type="email"
            placeholder="이메일을 입력하세요"
            {...register('email', {
              required: '이메일을 입력하세요.',
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <Input
            hasError={!!errors.password}
            type="password"
            placeholder="비밀번호를 입력하세요"
            {...register('password', {
              required: '비밀번호를 입력하세요.',
            })}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

          {/* 로딩 상태에 따라 버튼 비활성화 */}
          <Button type="submit" size="large" disabled={isLoading}>
            로그인
          </Button>
          <LinkContainer>
            <Span>아직 회원이 아니신가요?</Span>
            <LinkStyle to={'/signup'}>회원가입</LinkStyle>
          </LinkContainer>
        </InputContainer>
      </Form>
    </Contents>
  );
}
