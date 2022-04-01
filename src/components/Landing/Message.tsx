import React from 'react';

interface MessageProps {
  order: 'first' | 'second';
}

const Message = ({ order }: MessageProps) => {
  switch (order) {
    case 'first':
      return (
        <p>
          나만의 우주를 만들어보세요.
          <br />
          행성이 감정을 담아둘거예요
        </p>
      );
    case 'second':
      return (
        <p>
          함께 느꼈던 감정을 행성에 기록할 친구들을
          <br />
          Youniverse로 초대할 수 있어요.
        </p>
      );
  }
};

export default Message;
