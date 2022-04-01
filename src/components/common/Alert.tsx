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
  return (
    <Styled.Root>
      <Styled.PopUpWrapper>
        <Styled.MessageWrapper>
          <Styled.StarImage />
          <Styled.AlertMessage>{props.message}</Styled.AlertMessage>
        </Styled.MessageWrapper>
        <Styled.ButtonWrapper>
          <Styled.LeftButton onClick={props.handleLeftClick}>
            {props.leftButtonTitle}
          </Styled.LeftButton>
          <Styled.RightButton onClick={props.handleRightClick}>
            {props.rightButtonTitle}
          </Styled.RightButton>
        </Styled.ButtonWrapper>
      </Styled.PopUpWrapper>
    </Styled.Root>
  );
}

export default Alert;

const Styled = {
  Root: styled.div`
    background: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  PopUpWrapper: styled.div`
    width: 300px;
    height: 150px;
    margin: 0px 30px 0px 30px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.014) 4.13%,
      rgba(255, 255, 255, 0.06) 80.29%
    );
    mix-blend-mode: normal;
    border: 1px solid #59595e;
    box-shadow: 0px 70px 40px rgba(14, 19, 78, 0.137074);
    backdrop-filter: blur(19.028px);
    border-radius: 3px;

    /* @media (max-width: 413px) {
      width: 90%;
    } */
  `,
  MessageWrapper: styled.div``,
  StarImage: styled.image``,
  AlertMessage: styled.text``,
  ButtonWrapper: styled.div``,
  LeftButton: styled.button``,
  RightButton: styled.button``,
};
