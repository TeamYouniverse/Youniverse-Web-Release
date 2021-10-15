import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [logger];
// middleware를 spread 연산자로 받는다. logger는 state변화를 console로 찍어주는 middleware이다.
// redux dev tools를 이용한다.
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
