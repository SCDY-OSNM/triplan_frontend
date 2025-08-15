import { LoginFormInputs, SignupFormInputs, User } from '@/interfaces/auth.interfaces';
import axiosInstance from '@/apis/axiosInstance.api';
import { API_ROUTES } from '@/apis/apiRoutes';
import { toast } from 'react-toastify';

// 로그인
export const login = async (data: LoginFormInputs): Promise<{ accessToken: string }> => {
  try {
    const response = await axiosInstance.post(API_ROUTES.LOGIN, data);

    console.log('----- 로그인 API 응답 -----');
    console.log('로그인 응답:', response);
    console.log('응답 데이터 (response.data): ', response.data);

    const accessToken = response.data.data;
    console.log('accessToken: ', accessToken);

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
export const getMyInfo = async (token?: string): Promise<User> => {
  try {
    const response = await axiosInstance.get(API_ROUTES.MY_INFO, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });

    console.log('----- 내 정보 API 응답 -----');
    console.log('전체 응답 객체 : ', response);
    console.log('응답 데이터 (response.data): ', response.data);

    console.log('응답 데이터 response.data.data: ', response.data.data);

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
    console.log('회원가입 응답:', response);

    return response;
  } catch (error) {
    console.error('회원가입 API 호출 에러 발생:', error);
    const errorMessage =
      error.response?.data?.message || '알 수 없는 회원가입 오류가 발생했습니다.';
    toast.error('회원가입 실패');
    throw new Error(errorMessage);
  }
};

/*

// 이메일 중복 확인 API
export const checkEmailDuplicate = async (email: string): Promise<boolean> => {
  try {
    // 백엔드와 협의된 중복 확인 API 엔드포인트 사용
    // 예: GET /api/v1/users/check-email?email=...
    const response = await axiosInstance.get(API_ROUTES.CHECK_EMAIL, { params: { email } });
    console.log('이메일 중복 확인 응답:', response);

    // 백엔드 응답 구조에 따라 중복 여부를 판단합니다.
    // 예: { isDuplicate: true/false } 형태로 응답이 온다고 가정
    return response.data.isDuplicate; // <<< 백엔드 응답 구조에 맞게 수정
  } catch (error) {
    console.error('이메일 중복 확인 API 호출 에러 발생:', error);
    // API 호출 자체에서 에러가 난 경우 (네트워크 오류 등)
    // 에러 처리가 필요할 수 있습니다. 여기서는 일단 false 반환 또는 에러 throw 고려
    throw new Error('이메일 중복 확인 중 오류가 발생했습니다.');
  }
};

// 닉네임 중복 확인 API
export const checkNicknameDuplicate = async (nickname: string): Promise<boolean> => {
  try {
    // 백엔드와 협의된 중복 확인 API 엔드포인트 사용
    // 예: GET /api/v1/users/check-nickname?nickname=...
    const response = await axiosInstance.get(API_ROUTES.CHECK_NICKNAME, { params: { nickname } });
    console.log('닉네임 중복 확인 응답:', response);

    // 백엔드 응답 구조에 따라 중복 여부를 판단합니다.
    return response.data.isDuplicate; // <<< 백엔드 응답 구조에 맞게 수정
  } catch (error) {
    console.error('닉네임 중복 확인 API 호출 에러 발생:', error);
    throw new Error('닉네임 중복 확인 중 오류가 발생했습니다.');
  }
};

*/
