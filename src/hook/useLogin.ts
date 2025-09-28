import { getMyInfo, login } from '@/apis/auth.api';
import { tokenAtom, userAtom } from '@/atoms/auth.atom';
import { LoginFormInputs } from '@/interfaces/auth.interfaces';
import { useSetAtom } from 'jotai';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export const useLogin = () => {
  const navigate = useNavigate();
  const setToken = useSetAtom(tokenAtom);
  const setUser = useSetAtom(userAtom);
  const [isLoading, setIsLoading] = useState(false);

  // mode: onChange시 다수의 리렌더링 발생 할 수 있음 -> 성능 체크필요
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormInputs>({ mode: 'onChange' });

  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true);

    try {
      const { accessToken } = await login(data);
      setToken(accessToken);

      // 로그인 성공 후 사용자 정보 받아옴
      const userInfo = await getMyInfo();
      setUser(userInfo);

      toast.success(`${userInfo.nickname}님, 환영합니다!`);
      navigate('/');
    } catch (error) {
      // 로그인 실패시 atom 비우기
      setToken(null);
      setUser(null);

      console.error('로그인 처리 중 에러 발생: ', error);
      toast.error('아이디 또는 비밀번호를 확인해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isValid,
    isLoading,
  };
};
