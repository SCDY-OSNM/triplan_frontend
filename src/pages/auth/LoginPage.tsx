import Button from '@/components/button/Button';
import {
  Contents,
  Form,
  InputContainer,
  LinkContainer,
  LinkStyle,
  Span,
  Title,
} from '@/styles/AuthForm.style';

import { useLogin } from '@/hook/useLogin';
import FormInput from '@/components/input/FormInput';

export default function LoginPage() {
  const { register, handleSubmit, errors, isValid, isLoading } = useLogin();

  return (
    <Contents>
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <FormInput
            label="이메일"
            name="email"
            type="email"
            placeholder="이메일을 입력하세요"
            register={register}
            errors={errors}
            rules={{
              required: '이메일을 입력하세요.',
            }}
          />

          <FormInput
            label="비밀번호"
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            register={register}
            errors={errors}
            rules={{
              required: '비밀번호를 입력하세요.',
            }}
          />

          <Button type="submit" size="large" disabled={!isValid || isLoading}>
            {isLoading ? '로그인 중...' : '로그인'}
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
