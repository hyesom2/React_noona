const login = (id, pw) => {
  return (dispatch, getState) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: {id: id, pw: pw} });
  }
}

export const authenticateAction = { login };