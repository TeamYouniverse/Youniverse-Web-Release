import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';
export interface User {
  id: number;
  name: string;
}
const initialState = {
  id: 1,
  name: '고양이냥',
} as User;
const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      const { id, name } = action.payload;
      state.id = id;
      state.name = name;
    },
  },
});
export const { addUser } = counterSlice.actions;
export default counterSlice.reducer;
