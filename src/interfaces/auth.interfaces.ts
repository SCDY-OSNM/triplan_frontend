export interface LoginFormInputs {
  email: string;
  password: string;
}

export enum ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface SignupFormInputs {
  email: string;
  nickname: string;
  userRole?: 'USER';
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  email: string;
  nickname: string;
  userRole: ROLE;
  phoneNumber: string;
}

export interface UpdateMyInfoPayload {
  nickname: string;
  phoneNumber: string;
  password: string;
}
