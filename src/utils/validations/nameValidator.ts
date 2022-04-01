import { ERROR_MESSAGE } from '@src/constants/message';
import type { Validator } from './types';

function hasBlank(str: string) {
  return str.trim() !== str;
}

function isEmpty(str: string) {
  return str === '';
}

// @TODO: 이름 중복 체크 추가
const validators: Validator<string>[] = [
  {
    test: hasBlank,
    message: ERROR_MESSAGE.HAS_BLANK,
  },
  {
    test: isEmpty,
    message: ERROR_MESSAGE.EMPTY,
  },
];

// @TODO: never | void type 지정
export function nameValidator(name: string) {
  return validators.every(({ test, message }) => {
    if (test(name)) {
      throw new Error(message);
    }
    return true;
  });
}
