import React from 'react';
import { ErrorMessage, InputContainer, Label } from '@/styles/AuthForm.style';
import { FieldErrors, FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form';
import Input from './Input';

interface FormInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  rules?: RegisterOptions<T>;
  disabled?: boolean;
  defaultValue?: string;
}

export default function FormInput<T extends FieldValues>({
  label,
  name,
  register,
  errors,
  rules,
  ...rest
}: FormInputProps<T>) {
  const error = errors[name];

  return (
    <InputContainer>
      <Label>{label}</Label>
      {/* error O -> hasError = ture -> 테두리 빨갛게 설정 */}
      <Input hasError={!!error} {...register(name, rules)} {...rest} />
      {error && <ErrorMessage>{error.message as React.ReactNode}</ErrorMessage>}
    </InputContainer>
  );
}
