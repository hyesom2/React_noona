const initialState = {
  contactList: [],
  search_user: "",
};

function reducer(state = initialState, action){
  const { type, payload } = action;
  switch(type) {
    case "ADD_CONTACT":
      return { ...state, contactList:[...state.contactList, {name: payload.name ,phoneNumber: payload.phoneNumber}] }
    case "SEARCH_USER":
      return { ...state, search_user: payload.search};
    default:
      return { ...state };
  }
};

export default reducer;