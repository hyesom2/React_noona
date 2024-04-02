let initialState = {
  id: '',
  pw: '',
  authenticate: false,
}

const authenticateReducer = (state=initialState, action) => {
  let { type, payload } = action;
  switch(type) {
    case "LOGIN_SUCCESS":
      return { ...state, id: payload.id, pw: payload.pw, authenticate: true };
    case "LOGOUT":
      return { ...state, authenticate: false };
    default:
      return { ...state };
  }
}

export default authenticateReducer;