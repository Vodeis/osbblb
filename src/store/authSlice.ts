import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isLogIn: boolean;
  // token: string;
  // expirationTime: number;
}

const initialState: Required<AuthState> = {
  isLogIn: false,
  // token: '',
  // expirationTime: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogIn(state) {
      state.isLogIn = true;
      // state.token = action.payload.token;
      // state.expirationTime = action.payload.expirationTime;
    },
    userLogOut(state) {
      state.isLogIn = false;
      // state.token = '';
      // state.expirationTime = 0;
    },
  },
});

export const { userLogIn, userLogOut } = authSlice.actions;

export default authSlice.reducer;
