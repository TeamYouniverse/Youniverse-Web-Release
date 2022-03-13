import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
export interface User {
  id: number;
  name: string;
}
// 1. 초기 스테이트 넣기 // const [user,setUser] = useState({id:1, name:'고양이냥'})
const initialState = {
  id: 1,
  name: '고양이냥',
} as User;

// 슬라이스
const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      // 사용자가 이 리듀서를 쓸 때 넣어주는 값
      const { id, name } = action.payload;
      // 우리가 바꾸고 싶은 스테이트 값
      state.id = id;
      state.name = name;
      // state값을 콘솔에 찍고 싶다
      console.log(current(state));
    },
  },
});
export const { addUser } = counterSlice.actions;
export default counterSlice.reducer;
