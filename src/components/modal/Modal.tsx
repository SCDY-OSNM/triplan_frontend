import styled from 'styled-components';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
// import { IoClose } from 'react-icons/io5';

export const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: white;
  padding: 45px;
  border-radius: ${({ theme }) => theme.borderRadius.xxl};
  max-width: 500px;
  width: 100%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  cursor: pointer;
`;

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ onClose, children }: ModalProps) {
  return createPortal(
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        {/*<CloseButton onClick={onClose}>*/}
        {/*  <IoClose />*/}
        {/*</CloseButton>*/}
        {children}
      </ModalContent>
    </ModalOverlay>,
    document.body
  );
}
