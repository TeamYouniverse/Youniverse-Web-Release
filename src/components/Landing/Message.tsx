import React from 'react';

interface MessageProps {
  order: number;
}

const Message = ({ order }: MessageProps) => {
  switch (order) {
    case 1:
      return (
        <p>
          나만의 우주를 만들어보세요.
          <br />
          행성이 감정을 담아둘거예요
        </p>
      );
    case 2:
      return (
        <p>
          함께 느꼈던 감정을 행성에 기록할 친구들을
          <br />
          Youniverse로 초대할 수 있어요.
        </p>
      );
    case 3:
      return <p>마지막페이지</p>;
  }
};

export default Message;
