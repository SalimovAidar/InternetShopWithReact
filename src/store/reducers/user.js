import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice ({
  name: 'user',
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
      state.setUserLogin = '';
      state.setUserPassword = '';
    },
  },
});

export const { setLogin, setPassword, toogleCheckbox, addUser, setIsAuth } = userSlice.actions

export default userSlice.reducer;