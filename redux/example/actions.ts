import { DECREASE, INCREASE, INCREASE_BY } from './types';

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});
// action creator 정의. - 액션 타입을 리턴한다.
