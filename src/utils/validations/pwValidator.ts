import { PW_DIGIT } from '@src/constants';
import { ERROR_MESSAGE } from '@src/constants/message';
import type { Validator } from './types';

function isNotProperDigit(num: number) {
  return num.toString().length !== PW_DIGIT;
}

const validators: Validator<number>[] = [
  {
    test: isNotProperDigit,
    message: ERROR_MESSAGE.NOT_PROPER_DIGIT,
  },
];

// @TODO: never | void type 지정
export function pwValidator(pw: number) {
  return validators.every(({ test, message }) => {
    if (test(pw)) {
      throw new Error(message);
    }
    return true;
  });
}
