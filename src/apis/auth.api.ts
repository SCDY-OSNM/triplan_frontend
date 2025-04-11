import { LoginFormInputs } from '@/interfaces/auth.interfaces';
import axiosInstance from '@/apis/axiosInstance.api';
import { API_ROUTES } from '@/apis/apiRoutes';

export const login = async (data: LoginFormInputs) => {
  const response = await axiosInstance.post(API_ROUTES.LOGIN, data);

  const accessToken = response.data.data;
  console.log('accessToken: ', accessToken);

  // accessToken이랑 user 정보 받아서 저장

  // 로그인시, user 정보도 받아와야하는거 백엔드에 요청하기
  // accessToken data말고 accessToken으로 이름 바꿔달라고 요청하기

  return response;
};

export const logout = async () => {};
