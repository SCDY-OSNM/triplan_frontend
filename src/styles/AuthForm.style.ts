import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LogoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  padding: 20px;
`;

export const LogoStyle = styled.img`
  height: 30px;
  cursor: pointer;
  align-items: center;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  gap: 20px;
  margin-bottom: 70px;
`;

export const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.color.warn};
  font-size: 12px;
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.color.darkGray};
`;

export const Span = styled.span`
  font-size: 16px;
`;

export const LinkStyle = styled(Link)`
  color: ${({ theme }) => theme.color.point};
  font-weight: 500;
  text-decoration: none;
`;
