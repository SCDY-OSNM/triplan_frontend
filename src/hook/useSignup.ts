import { signUp } from '@/apis/auth.api';
import { SignupFormInputs } from '@/interfaces/auth.interfaces';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const useSignup = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<SignupFormInputs>({ mode: 'onChange' });

  // 비밀번호 확인에 필요
  const password = useWatch({ control, name: 'password' });

  const onSubmit = async (data: SignupFormInputs) => {
    try {
      await signUp(data);
      toast.success('회원가입이 성공적으로 완료되었습니다! 로그인 해주세요.');
      navigate('/login');
    } catch (error) {
      console.error('회원가입 중 에러 발생: ', error);
      toast.error('회원가입 시도 실패 다시 해주세용');
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isValid,
    password,
  };
};
