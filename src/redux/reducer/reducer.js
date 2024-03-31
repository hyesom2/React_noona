let initialState = {
  count: 0,
  id: "",
  pw: "",
  auth: false,
}
// function reducer(state, action){}
function reducer(state = initialState, action){
  console.log("action은 뭘까?", action);
  // if( action.type === "INCREMENT" ) {
  //   return { ...state, count: state.count + action.payload.num}
  // }
  // return { ...state }; // store는 무조건 return이 있어야함 -> reducer에서 무조건 기본리턴이 필요
  // or
  switch(action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.num };
    case "LOGIN":
      return { ...state, id: action.payload.id, pw: action.payload.pw, auth: state.auth = true };
    case "LOGOUT":
      return { ...state, auth: state.auth = false };
    case "ADD":
      return { ...state, count: state.count + action.payload.num };
    case "REMOVE":
      if(state.count <= 0) {
        return { ...state, count: 0 }
      } else {
        return { 
          ...state, count: state.count - action.payload.num
        }
      }
    default:
      return { ...state };
  }

}

export default reducer;