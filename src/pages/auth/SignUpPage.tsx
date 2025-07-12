import {
  Contents,
  ErrorMessage,
  Form,
  InputContainer,
  Label,
  LinkContainer,
  LinkStyle,
  Span,
  Title,
} from '@/styles/AuthForm.style';
// import React, { useState } from 'react';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { SignupFormInputs } from '@/interfaces/auth.interfaces';
import { useNavigate } from 'react-router';
import Input from '@/components/input/Input';
// import useDebounce from '@/hook/useDebounce';
import { signUp } from '@/apis/auth.api';
import Button from '@/components/button/Button';

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<SignupFormInputs>({ mode: 'onChange' });

  const navigate = useNavigate();

  // 중복확인 있어야할듯
  // const [emailDuplicateError, setEmailDuplicateError] = useState<string | null>(null);
  // const [nicknameDuplicateError, setNicknameDuplicateError] = useState<string | null>(null);

  // const email = useWatch({ control, name: 'email' });
  // const nickname = useWatch({ control, name: 'nickname' });
  const password = useWatch({ control, name: 'password' });

  const onSubmit: SubmitHandler<SignupFormInputs> = async data => {
    await signUp(data);
    navigate('/login');
    alert('회원가입이 성공적으로 완료되었습니다.');
  };

  return (
    <Contents>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label>이메일</Label>
          <Input
            hasError={!!errors.email}
            type="email"
            placeholder="이메일을 입력하세요"
            {...register('email', {
              required: '이메일을 입력하세요.',
            })}
          />
          {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

          <Label>닉네임</Label>
          <Input
            hasError={!!errors.nickname}
            type="text"
            placeholder="닉네임을 입력하세요"
            {...register('nickname', {
              required: '닉네임을 입력하세요.',
              pattern: {
                value: /^[a-zA-Z가-힣0-9]{2,8}$/,
                message: '닉네임은 영어, 한글, 숫자로 구성된 2~8글자여야 합니다.',
              },
            })}
          />
          {errors.nickname && <ErrorMessage>{errors.nickname.message}</ErrorMessage>}

          <Label>전화번호</Label>
          <Input
            hasError={!!errors.phoneNumber}
            type="tel"
            placeholder="예 01012341234"
            {...register('phoneNumber', {
              required: '전화번호를 입력하세요.',
              pattern: {
                value: /[0-9]{11}/,
                message: '전화번호는 01012341234형식으로 된 11자리 숫자여야 합니다.',
              },
            })}
          />
          {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>}

          <Label>비밀번호</Label>
          <Input
            hasError={!!errors.password}
            type="password"
            placeholder="비밀번호를 입력하세요"
            {...register('password', {
              required: '비밀번호를 입력하세요.',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#%^*_+=-]).{6,16}$/,
                message: '비밀번호는 영어, 숫자, 특수문자를 포함한 6~16글자여야 합니다.',
              },
            })}
          />
          {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

          <Label>비밀번호 확인</Label>
          <Input
            hasError={!!errors.confirmPassword}
            type="password"
            placeholder="비밀번호를 한번 더 입력하세요."
            {...register('confirmPassword', {
              required: '비밀번호를 한번 더 입력하세요',
              validate: value => value === password || '비밀번호가 일치하지 않습니다.',
            })}
          />
          {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>}

          <Button type="submit" size="large" disabled={!isValid}>
            회원가입
          </Button>

          <LinkContainer>
            <Span>이미 회원이신가요?</Span>
            <LinkStyle to={'/login'}>로그인</LinkStyle>
          </LinkContainer>
        </InputContainer>
      </Form>
    </Contents>
  );
}
