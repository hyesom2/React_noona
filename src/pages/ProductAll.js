// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
  // const [productList, setProductList] = useState([]);
  const productList = useSelector((state) => state.product.productList);
  const [query] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    // let url = `http://localhost:5000/products`;
    // let url = `https://my-json-server.typicode.com/hyesom2/3_shopping-mall/products?q=${searchQuery}`;
    // let response = await fetch(url);
    // let data = await response.json();
    // setProductList(data);
    // dispatch({ type: "", payload: {}}) -> 처럼 하면 바로 store로 가버림
    dispatch(productAction.getProducts(searchQuery)); // searchQuery를 매개변수로 전달하자!
  }

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {
            productList.map((item, index) => (
              <Col lg={3} key={ index }>
                <ProductCard item={ item } />
              </Col>
            ))
          }
        </Row>
        <Banner>
          <h3>지금 회원가입하세요</h3>
          <span>3만원 이상 무료배송<br />첫 구매 10% 할인까지</span>
          <div className="button-group">
            <button type="button">지금 가입하기</button>
            <button type="button">회원 혜택 살펴보기</button>
          </div>
        </Banner>
      </Container>
      <Footer>
        copyright
      </Footer>
    </div>
  )
}

export default ProductAll;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 22px 0;
  background-color: #F3EBDE;
  margin-bottom: 22px;

  h3 {
    font-size: 28px;
    margin-bottom: 4px;
    color: #E5000F;
  }
  
  span {
    margin-bottom: 16px;
  }

  .button-group {
    display: flex;

    button {
      margin-right: 8px;
      padding: 8px;
      border: 1px solid #333;

      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e4e4e4;
  color: #333;
  padding: 64px 32px;
`;