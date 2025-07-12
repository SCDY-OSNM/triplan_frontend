import styled from 'styled-components';
import { forwardRef } from 'react';

export const InputStyle = styled.input.withConfig({
  shouldForwardProp: prop => prop !== 'hasError',
})<{ hasError?: boolean }>`
  width: 100%;
  height: 60px;
  padding: 16px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ hasError, theme }) => (hasError ? theme.color.warn : theme.color.line)};

  font-size: 16px;
  box-sizing: border-box;
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ hasError, ...props }, ref) => (
  <InputStyle ref={ref} hasError={hasError} {...props}>
    {props.children}
  </InputStyle>
));

export default Input;
