function hasBlank(str: string) {
  return str.trim() !== str;
}

interface Validator {
  test: (str: string) => boolean;
  message: string;
}

// @TODO: 이름 중복 체크 추가
const validators: Validator[] = [
  {
    test: hasBlank,
    message: '이름 앞 뒤, 공백을 제외하고 입력해주세요.',
  },
];

// @TODO: never | void type 지정
export function signinValidator(name: string) {
  return validators.every(({ test, message }) => {
    if (test(name)) {
      throw new Error(message);
    }
    return true;
  });
}
