import styled from 'styled-components';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

const sizeStyle = {
  small: {
    padding: '6px 12px',
    fontSize: '12px',
  },
  medium: {
    padding: '8px 16px',
    fontSize: '14px',
  },
  large: {
    padding: '12px 24px',
    fontSize: '18px',
  },
};

export const ButtonStyle = styled.button<{ size: 'small' | 'medium' | 'large' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.point};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  padding: ${({ size }) => sizeStyle[size].padding};
  font-size: ${({ size }) => sizeStyle[size].fontSize};
  gap: 6px;
`;

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  size?: 'small' | 'medium' | 'large';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ size = 'medium', ...props }, ref) => (
  <ButtonStyle ref={ref} size={size} {...props}>
    {props.children}
  </ButtonStyle>
));

export default Button;
