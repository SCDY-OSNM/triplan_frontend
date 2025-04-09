export interface LoginFormInputs {
  email: string;
  password: string;
}

export interface SignupFormInputs {
  email: string;
  password: string;
  nickname: string;
  userRole?: string;
  phoneNumber: number;
  // 실제 이름은 없어도 되는지
}
