// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
// import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailProducts } from '../redux/reducer/productSlice';

const ProductDetail = () => {
  let { id } = useParams();
  // const [product, setProduct] = useState(null);
  const product = useSelector((state) => state.product.selectedProduct);
  const dispatch = useDispatch();
  const getProductDetail = () => {
    // let url = `http://localhost:5000/products/${id}`;
    // let url = `https://my-json-server.typicode.com/hyesom2/3_shopping-mall/products/${id}`;
    // let response = await fetch(url);
    // let data = await response.json();
    // setProduct(data);
    // dispatch(productAction.getProductDetail(id));
    dispatch(fetchDetailProducts(id));
  }
  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line
  }, []);

  return (
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
            <strong className="price">￦ { product?.price }</strong>
            <span className="choice">{ product?.choice ? "Conscious choice" : "" }</span>
            <span className="new">{ product?.new ? "신제품" : "" }</span>
            <span className="size">사이즈</span>
            <SizeButtonGroup>
              {
                product?.size.map((size, index) => (
                  <button type="button" key={index}>{ size }</button>
                ))
              }
            </SizeButtonGroup>
            <BuyButton type="submit">
              <FontAwesomeIcon icon={faBagShopping} className="add-icon" />추가
            </BuyButton>
          </ProductInfo>
        </Col>
      </Row>
    </Container>
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
  padding: 24px 0 24px 32px;

  .title {
    font-size: 16px;
    font-weight: 400;
  }

  .price {
    font-size: 20px;
  }

  .choice {
    font-size: 13px;
    margin: 14px 0;
  }

  .new {
    font-size: 13px;
    margin-bottom: 14px;
  }

  .size {
    font-size: 13px;
    margin-bottom: 7px;
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

  .add-icon {
    margin-right: 10px;
  }
`;