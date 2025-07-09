// import React, { useState } from 'react';
// import { useNavigate } from 'react-router';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import Input from '@/components/input/Input';
// import Button from '@/components/button/Button';
// import { LoginFormInputs } from '@/interfaces/auth.interfaces';
// import {
//   Contents,
//   ErrorMessage,
//   Form,
//   InputContainer,
//   LinkContainer,
//   LinkStyle,
//   Span,
//   Title,
// } from '@/styles/AuthForm.style';
// import { login } from '@/apis/auth.api';
// import { useSetAtom } from 'jotai';
// import { authAtom } from '@/atoms/auth';

// export default function LoginPage() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormInputs>();
//   const navigate = useNavigate();

//   // 인증 상태 업데이트
//   const setAuth = useSetAtom(authAtom);
//   // 로딩상태
//   const [isLoading, setIsLoading] = useState(false);

//   const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
//     setIsLoading(true);
//     try {
//       // login 함수 호출 및 응답
//       const loginResponse = await login(data);

//       // login 함수에서 반환된 accessToken, user 정보 업데이트
//       setAuth({
//         isAuthenticated: true,
//         user: loginResponse.user || null,
//         accessToken: loginResponse.accessToken,
//         isLoading: false,
//         error: null,
//       });

//       // 로그인 성공 시 토스트 메시지 표시
//       toast.success('로그인 성공');
//       navigate('/');
//     } catch (error) {
//       console.error('로그인 처리중 에러 발생:', error);
//       const errorMessage = error.message || '로그인에 실패했습니다.';
//       toast.error(errorMessage);
//       // toast.error('로그인 실패');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Contents>
//       <Title>로그인</Title>
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <InputContainer>
//           <Input
//             hasError={!!errors.email}
//             type="email"
//             placeholder="이메일을 입력하세요"
//             {...register('email', {
//               required: '이메일을 입력하세요.',
//             })}
//           />
//           {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

//           <Input
//             hasError={!!errors.password}
//             type="password"
//             placeholder="비밀번호를 입력하세요"
//             {...register('password', {
//               required: '비밀번호를 입력하세요.',
//             })}
//           />
//           {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}

//           {/* 로딩 상태에 따라 버튼 비활성화 */}
//           <Button type="submit" size="large" disabled={isLoading}>
//             로그인
//           </Button>
//           <LinkContainer>
//             <Span>아직 회원이 아니신가요?</Span>
//             <LinkStyle to={'/signup'}>회원가입</LinkStyle>
//           </LinkContainer>
//         </InputContainer>
//       </Form>
//     </Contents>
//   );
// }

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
import { login } from '@/apis/auth.api';

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const navigate = useNavigate();

  // 로딩상태
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginFormInputs> = async data => {
    setIsLoading(true);
    try {
      await login(data);
      toast.success('로그인 성공');
      navigate('/');
    } catch (error) {
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
