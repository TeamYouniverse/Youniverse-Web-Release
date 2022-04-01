import { PW_DIGIT } from '@src/constants';

const MESSAGE = {
  VALID_NAME: '사용가능한 우주 이름입니다.',
  VALID_PW: '사용가능한 비밀번호입니다.',
};

const ERROR_MESSAGE = {
  HAS_BLANK: '이름 앞 뒤, 공백을 제외하고 입력해주세요.',
  EMPTY: '이름을 입력해주세요.',
  NOT_PROPER_DIGIT: `비밀번호 ${PW_DIGIT}를 입력해주세요.`,
};

export { MESSAGE, ERROR_MESSAGE };
