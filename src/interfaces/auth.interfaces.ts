export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface SignupFormInputs {
  email: string;
  nickname: string;
  userRole?: 'USER';
  phoneNumber: number;
  password: string;
  confirmPassword: string;
}
