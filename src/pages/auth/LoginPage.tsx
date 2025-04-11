import styled from 'styled-components';
import React from 'react';
import Triplan_r from '../../../public/logos/Triplan_r.svg';
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
  LogoStyle,
  LogoWrapper,
  Span,
  Title,
} from '@/styles/AuthForm.style';
import { login } from '@/apis/auth.api';

const LoginPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
    try {
      const response = await login(data);
      console.log('응답: ', response);

      if (response.data.status === 'success') {
        navigate('/');
        if (location.pathname === '/') {
          toast.success('로그인 성공');
        }
      }
    } catch (error) {
      console.error('에러 발생:', error);
      if (error.response) {
        toast.error('로그인 실패');
        console.log('서버 응답:', error.response.data);
        console.log(`로그인에 실패했습니다: ${error.response.data.message}`);
      }
    }
  };

  return (
    <LoginPageStyle>
      <LogoWrapper>
        <LogoStyle src={Triplan_r} alt="rgb 로고" onClick={() => navigate('/')} />
      </LogoWrapper>
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
            <Button type="submit" size="large">
              로그인
            </Button>
            <LinkContainer>
              <Span>아직 회원이 아니신가요?</Span>
              <LinkStyle to={'/signup'}>회원가입</LinkStyle>
            </LinkContainer>
          </InputContainer>
        </Form>
      </Contents>
    </LoginPageStyle>
  );
}
