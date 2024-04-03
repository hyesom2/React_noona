import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

let initialState = {
  productList: [],
  selectedProduct: null,
  isLoading: false,
  error: null,
};

// const productReducer = (state=initialState, action) => {
//   let { type, payload } = action;
//   switch(type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_PRODUCT_DETAIL_SUCCESS":
//       return { ...state, selectedProduct: payload.data };
//     default:
//       return { ...state };
//   };
// }

// export default productReducer;

// action이름, 콜백함수
export const fetchProducts = createAsyncThunk("product/fetchAll", async(searchQuery, thunkApi) => {
  try {
    let url = `https://my-json-server.typicode.com/hyesom2/3_shopping-mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    return await response.json();
  }catch(error) {
    thunkApi.rejectWithValue(error.message);
  }
  // let url = `https://my-json-server.typicode.com/hyesom2/3_shopping-mall/products?q=${searchQuery}`;
  // let response = await fetch(url);
  // return await response.json();
  // let data = await response.json();
});

export const fetchDetailProducts = createAsyncThunk("product/fetchDetail", async(id, thunkApi) => {
  try {
    let url = `https://my-json-server.typicode.com/hyesom2/3_shopping-mall/products/${id}`;
    let response = await fetch(url);
    return await response.json();
  }catch(error) {
    thunkApi.rejectWithValue(error.message);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // 함수이름(state, action){ } 
    // getAllProducts(state, action){
    // state.productList = action.payload.data;
    // }, dispatch를 직접적으로 호출안하여서 사용X
    // getDetailProduct(state, action){
    //   state.selectedProduct = action.payload.data;
    // },
  },
  // extraReducers : 외부로부터 state가 바뀌는 경우(비동기 케이스 주로 처리)
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    }).addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productList = action.payload;
    }).addCase(fetchDetailProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedProduct = action.payload;
    }).addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  }
});

export const productActions = productSlice.actions;
export default productSlice.reducer; // reducers(X);