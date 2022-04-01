interface Validator<T> {
  test: (str: T) => boolean;
  message: string;
}

export type { Validator };
