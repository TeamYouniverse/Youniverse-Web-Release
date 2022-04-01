function isNot4Digit(num: number) {
  return num.toString().length !== 4;
}

interface Validator {
  test: (num: number) => boolean;
  message: string;
}

const validators: Validator[] = [
  {
    test: isNot4Digit,
    message: '비밀번호 4자리를 입력해주세요.',
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
