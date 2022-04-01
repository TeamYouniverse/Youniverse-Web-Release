import styled from '@emotion/styled';
import React from 'react';

interface AlertProps {
  message: String;
  leftButtonTitle: String;
  rightButtonTitle: String;
  handleLeftClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleRightClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Alert(props: AlertProps) {
  return <Styled.Root>Alert</Styled.Root>;
}

export default Alert;

const Styled = {
  Root: styled.dialog``,
  CloseButton: styled.button``,
  PopUpWrapper: styled.div``,
  MessageWrapper: styled.div``,
  StarImage: styled.image``,
  AlertMessage: styled.text``,
  ButtonWrapper: styled.div``,
  LeftButton: styled.button``,
  RightButton: styled.button``,
};
