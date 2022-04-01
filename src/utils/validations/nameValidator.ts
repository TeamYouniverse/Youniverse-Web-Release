import { PW_DIGIT } from '@src/constants';
import { ERROR_MESSAGE } from '@src/constants/message';

function hasBlank(str: string) {
  return str.trim() !== str;
}

function isEmpty(str: string) {
  return str === '';
}

function isNotProperDigit(num: number) {
  return num.toString().length !== PW_DIGIT;
}

interface Validator<T> {
  test: (str: T) => boolean;
  message: string;
}

type Validators = { [P in 'name' | 'pw']: (Validator<number> | Validator<string>)[] };

// @TODO: 이름 중복 체크 추가
const validators: Validators = {
  name: [
    {
      test: isEmpty,
      message: ERROR_MESSAGE.EMPTY,
    },
    {
      test: hasBlank,
      message: ERROR_MESSAGE.HAS_BLANK,
    },
  ],
  pw: [
    {
      test: isNotProperDigit,
      message: ERROR_MESSAGE.NOT_PROPER_DIGIT,
    },
  ],
};

// @TODO: never | void type 지정
export function validate(type: keyof Validators, value: any) {
  validators[type].every;

  return validators[type].every(({ test, message }) => {
    if (test(value as never)) {
      throw new Error(message);
    }
    return true;
  });
}
