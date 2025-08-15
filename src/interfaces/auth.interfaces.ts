export interface LoginFormInputs {
  email: string;
  password: string;
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
  userRole: 'ADMIN' | 'USER';
  phoneNumber: string;
}
