let initialState = {
  productList: [],
  selectedProduct: null,
};

const productReducer = (state=initialState, action) => {
  let { type, payload } = action;
  switch(type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    case "GET_PRODUCT_DETAIL_SUCCESS":
      return { ...state, selectedProduct: payload.data };
    default:
      return { ...state };
  };
}

export default productReducer;
