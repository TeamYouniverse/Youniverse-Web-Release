import { useState, useCallback, ChangeEvent, Dispatch, SetStateAction } from 'react';

const useInput = (initValue = '') => {
  const [value, setValue] = useState(initValue);
  const onChnage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return { value, onChnage, setValue };
};
export default useInput;
