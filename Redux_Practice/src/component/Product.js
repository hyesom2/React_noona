import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const Product = () => {
  const dispatch = useDispatch();
  const add = () => {
    dispatch({ type: "ADD", payload:{ num:1 }});
  }
  const remove = () => {
    dispatch({ type: "REMOVE", payload:{ num:1 }});
  }

  return (
    <Container>
      <img src="https://cafe24.poxo.com/ec01/jansport1/fYw07Q+e08011Z5Qzbz309acNg/10XyG/5MXKFeRwWk0imvdw5fdnicHzSGhbwvF0guryiNdHDrQrE15jy9fSg==/_/web/product/big/20200605_jan_bgciih_500.jpg" alt="예시이미지" />
      <Info>
        <h1>빅스튜던트 BLACK</h1>
        <p>89,000원</p>
        <div className="button-group">
          <button type="button" onClick={ add }>장바구니에 추가</button>
          <button type="button" onClick={ remove}>장바구니에서 제거</button>
        </div>
      </Info>
    </Container>
  )
}

export default Product;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 20px;

  img {
    display: block;
    width: 500px;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  margin-left: 60px;

  h1, p {
    margin-bottom: 10px;
  }

  .button-group {
    display: flex;

    button {
      width: 50%;
      margin-right: 4px;
      white-space: nowrap;
      background-color: #000;
      color: #fff;
      width: 200px;
      height: 40px;
      transition: opacity 300ms ease-in-out;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        opacity: 0.7;
      }
    }

  }
`;