import { decrease, increase, increaseBy } from './actions';
import { DECREASE, INCREASE, INCREASE_BY } from './types';

type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;
// ReturnType : 함수에서 반환하는 타입을 가지고 올 수 있는 유틸 타입

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};
// reducer는 state와 action을 인자로 받는다.
function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;
