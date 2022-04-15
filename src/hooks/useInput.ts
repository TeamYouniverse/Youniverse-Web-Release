import { useState, useCallback, ChangeEvent, Dispatch, SetStateAction } from 'react';

const useInput = <T>(
  inputValue: T,
): [T, Dispatch<SetStateAction<T>>, (e?: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState<typeof inputValue>(inputValue);
  const onChnage = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, setValue, onChnage];
};

export default useInput;
