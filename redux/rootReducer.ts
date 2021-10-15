import { combineReducers } from 'redux';
import counter from './example/reducer';

const rootReducer = combineReducers({
  counter,
});
// 여러 reducer를 rootReducer에 합쳐서 store로 보낸다. store는 하나여야하기 떄문.

export default rootReducer;
