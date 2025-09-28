import {
  LoginFormInputs,
  SignupFormInputs,
  UpdateMyInfoPayload,
  User,
} from '@/interfaces/auth.interfaces';
import axiosInstance from '@/apis/axiosInstance.api';
import { API_ROUTES } from '@/apis/apiRoutes';
import { toast } from 'react-toastify';

// 로그인
export const login = async (data: LoginFormInputs): Promise<{ accessToken: string }> => {
  try {
    const response = await axiosInstance.post(API_ROUTES.LOGIN, data);

    const accessToken = response.data.data;

    if (accessToken) {
      return { accessToken };
    } else {
      throw new Error('로그인 인증 토큰을 받지 못했습니다.');
    }
  } catch (error) {
    console.error('로그인 API 호출 에러 발생: ', error);
    const errorMessage = error.response?.data?.message || '알 수 없는 로그인 오류가 발생했습니다.';
    throw new Error(errorMessage);
  }
};

// 내 정보 조회
export const getMyInfo = async (): Promise<User> => {
  try {
    const response = await axiosInstance.get(API_ROUTES.MY_INFO);

    return response.data.data;
  } catch (error) {
    console.error('내 정보 조회 API 호출 에러 발생: ', error);
    throw new Error('사용자 정보를 가져오는데 실패했습니다.');
  }
};

// 로그아웃
export const logout = async () => {
  try {
    await axiosInstance.post(API_ROUTES.LOGOUT);
  } catch (error) {
    console.error('로그아웃 API 호출 에러 발생:', error);
    const errorMessage =
      error.response?.data?.message || '알 수 없는 로그아웃 오류가 발생했습니다.';
    throw new Error(errorMessage);
  }
};

// 회원가입
export const signUp = async (data: SignupFormInputs) => {
  try {
    const response = await axiosInstance.post(API_ROUTES.SIGNUP, data);

    return response;
  } catch (error) {
    console.error('회원가입 API 호출 에러 발생:', error);
    const errorMessage =
      error.response?.data?.message || '알 수 없는 회원가입 오류가 발생했습니다.';
    toast.error('회원가입 실패');
    throw new Error(errorMessage);
  }
};

// 내 정보 수정
export const patchMyInfo = async (data: UpdateMyInfoPayload): Promise<User> => {
  try {
    const response = await axiosInstance.patch(API_ROUTES.MY_INFO, data);

    return response.data.data;
  } catch (error) {
    console.error('내 정보 수정 API 호출 에러 발생: ', error);
    throw new Error('사용자 정보를 가져오는데 실패했습니다.');
  }
};

// 이메일 중복 확인 API

// 닉네임 중복 확인 API
