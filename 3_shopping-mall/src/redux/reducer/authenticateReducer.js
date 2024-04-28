import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  id: '',
  pw: '',
  authenticate: false,
}

// const authenticateReducer = (state=initialState, action) => {
//   let { type, payload } = action;
//   switch(type) {
//     case "LOGIN_SUCCESS":
//       return { ...state, id: payload.id, pw: payload.pw, authenticate: true };
//     case "LOGOUT":
//       return { ...state, authenticate: false };
//     default:
//       return { ...state };
//   }
// };

// export default authenticateReducer;

const authenticateSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authLogin(state, action){
      state.id = action.payload.id;
      state.pw = action.payload.pw;
      state.authenticate = true;
    },
    authLogout(state, action) {
      state.authenticate = false;
    }
  }
});

export const authenticateAction = authenticateSlice.actions;
export default authenticateSlice.reducer;