import {
  Contents,
  Form,
  InputContainer,
  LinkContainer,
  LinkStyle,
  Span,
  Title,
} from '@/styles/AuthForm.style';
import { SignupFormInputs } from '@/interfaces/auth.interfaces';
// import useDebounce from '@/hook/useDebounce';
import Button from '@/components/button/Button';
import FormInput from '@/components/input/FormInput';
import { useSignup } from '@/hook/useSignup';

export default function SignUpPage() {
  const { register, handleSubmit, errors, isValid, password } = useSignup();

  // 중복확인 있어야할듯
  // const [emailDuplicateError, setEmailDuplicateError] = useState<string | null>(null);
  // const [nicknameDuplicateError, setNicknameDuplicateError] = useState<string | null>(null);

  // const email = useWatch({ control, name: 'email' });
  // const nickname = useWatch({ control, name: 'nickname' })

  return (
    <Contents>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <FormInput<SignupFormInputs>
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

          <FormInput<SignupFormInputs>
            label="닉네임"
            name="nickname"
            placeholder="닉네임을 입력하세요"
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

          <FormInput<SignupFormInputs>
            label="전화번호"
            name="phoneNumber"
            type="tel"
            placeholder="예: 01012341234"
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

          <FormInput<SignupFormInputs>
            label="비밀번호"
            name="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            register={register}
            errors={errors}
            rules={{
              required: '비밀번호를 입력하세요.',
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#%^*_+=-]).{6,16}$/,
                message: '비밀번호는 영어, 숫자, 특수문자를 포함한 6~16글자여야 합니다.',
              },
            }}
          />

          <FormInput<SignupFormInputs>
            label="비밀번호 확인"
            name="confirmPassword"
            type="password"
            placeholder="비밀번호를 한번 더 입력하세요."
            register={register}
            errors={errors}
            rules={{
              required: '비밀번호를 한번 더 입력하세요',
              validate: value => value === password || '비밀번호가 일치하지 않습니다.',
            }}
          />

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
