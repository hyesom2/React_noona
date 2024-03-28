import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { styled } from 'styled-components';

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    // let url = `http://localhost:5000/products/${id}`;
    let url = `https://my-json-server.typicode.com/hyesom2/3_shopping-mall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <ProductImg>
              <img src={ product?.img } alt="" />
            </ProductImg>
          </Col>
          <Col lg={6}>
            <ProductInfo>
              <h1 className="title">{ product?.title }</h1>
              <strong>￦ { product?.price }</strong>
              <span>{ product?.choice ? "Conscious choice" : "" }</span>
              <span>{ product?.new ? "신제품" : "" }</span>
              <span>사이즈</span>
              <SizeButtonGroup>
                {
                  product?.size.map((size, index) => (
                    <button type="button" key={index}>{ size }</button>
                  ))
                }
              </SizeButtonGroup>
              <BuyButton type="submit">구매하기</BuyButton>
            </ProductInfo>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ProductDetail;

const ProductImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  .title {
    font-size: 20px;
    font-weight: 400;
  }
`;

const SizeButtonGroup = styled.div`
  display: flex;
  margin-bottom: 10px;

  button {
    width: 100px;
    height: 40px;
    padding: 8px;
    border: 1px solid #eee;
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      background-color: #555;
      color: #fff;
    }
    &:is.active {
      background-color: #000;
    }
  }
`;

const BuyButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  padding: 13px 26px;
`;