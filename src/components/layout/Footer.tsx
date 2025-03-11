import styled from 'styled-components';

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.footer};
  padding: 40px 0;
`;

export default function Footer() {
  return (
    <FooterStyled>
      Footer
      <br />
      <br />
      뭐라고 쓸까요
      <br />
      <br />ⓒ GaengSaeng Co., Ltd. All rights reserved.
    </FooterStyled>
  );
}
