// import { productActions } from '../reducer/productReducer';

// const getProducts = ( searchQuery ) => {
//   // middleware 함수는 함수를 return한다.
//   // return되는 함수는 2개의 파라미터를 가진다.
//   return async(dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/hyesom2/3_shopping-mall/products?q=${searchQuery}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     // console.log(data);
//     // setProductList(data);
//     // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: {data} });
//     dispatch( productActions.getAllProducts({ data }) );
//   };
// }

// const getProductDetail = (id) => {
//   return async(dispatch, getState) => {
//     let url = `https://my-json-server.typicode.com/hyesom2/3_shopping-mall/products/${id}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     // setProduct(data);
//     dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: {data} });
//   };
// }

// export const productAction = { getProducts, getProductDetail };
// export const productAction = { getProductDetail };
// 여러개의 함수를 하나의 객체에 담아서 export 한다.
// 객체로 반환하는 것은 {객체명} 이렇게 import 해야된다.