import styled from 'styled-components';
import Triplan_r from '../../../public/logos/Triplan_r.svg';
import { useNavigate } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormInputs } from '@/interfaces/auth.interfaces';
import axios from 'axios';
import { toast } from 'react-toastify';
import Input from '@/components/input/Input';
import React from 'react';
import Button from '@/components/button/Button';
import { Link } from 'react-router-dom';

const LoginPageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding: 20px;
`;

const LogoStyle = styled.img`
  height: 30px;
  cursor: pointer;
  align-items: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 20px;
  margin-bottom: 70px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
`;

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.color.warn};
  font-size: 12px;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.darkGray};
`;

const Span = styled.span`
  font-size: 16px;
`;

const LinkStyle = styled(Link)`
  color: ${({ theme }) => theme.color.point};
  font-weight: 500;
  text-decoration: none;
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
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_API_HOST}/api/v1/users/login`,
        data
      );
      console.log('응답: ', response.data);

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
