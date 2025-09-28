import { patchMyInfo } from '@/apis/auth.api';
import { userAtom } from '@/atoms/auth.atom';
import { UpdateMyInfoPayload } from '@/interfaces/auth.interfaces';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

type MyPageFormInputs = UpdateMyInfoPayload;

export const useMy = () => {
  const [user, setUser] = useAtom(userAtom);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm<MyPageFormInputs>({ mode: 'onChange' });

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

  // 폼 제출 시 실행
  const onSubmit: SubmitHandler<MyPageFormInputs> = async data => {
    try {
      const updatedUser = await patchMyInfo(data);
      setUser(updatedUser); // Jotai 상태를 업데이트된 유저 정보로 교체

      reset({ ...data, password: '' }); // 제출 후 폼 상태를 다시 초기화

      toast.success('프로필이 성공적으로 수정되었습니다.');
      navigate('/');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : '프로필 수정에 실패했습니다.');
    }
  };

  return {
    user,
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isDirty,
    isValid,
  };
};
