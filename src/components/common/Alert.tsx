import styled from '@emotion/styled';
import React from 'react';
import starIcon from '@assets/star.svg';
import Image from 'next/image';

interface AlertProps {
  message: string;
  leftButtonTitle: string;
  rightButtonTitle: string;
  handleLeftClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleRightClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

function Alert(props: AlertProps) {
  const { message, leftButtonTitle, rightButtonTitle, handleLeftClick, handleRightClick } = props;
  return (
    <Styled.Root>
      <Styled.PopUpWrapper>
        <Styled.MessageWrapper>
          <Image width="24px" height="31px" src={starIcon} alt=":)" />
          <Styled.AlertMessage>{message}</Styled.AlertMessage>
        </Styled.MessageWrapper>
        <Styled.ButtonWrapper>
          <Styled.LeftButton onClick={handleLeftClick}>{leftButtonTitle}</Styled.LeftButton>
          <Styled.RightButton onClick={handleRightClick}>{rightButtonTitle}</Styled.RightButton>
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
  `,
  MessageWrapper: styled.div`
    height: 105px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  AlertMessage: styled.p`
    margin-top: 5px;
    font-size: 14px;
    color: #dadada;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    direction: row;
    border-top: 1px solid #59595e;
    height: 45px;
  `,
  LeftButton: styled.button`
    width: 50%;
    border-right: 1px solid #59595e;
    color: #dadada;
  `,
  RightButton: styled.button`
    width: 50%;
    color: #dadada;
  `,
};
