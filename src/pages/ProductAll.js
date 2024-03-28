import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async() => {
    // let url = `http://localhost:5000/products`;
    let url = `https://my-json-server.typicode.com/hyesom2/3_shopping-mall/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

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
      </Container>
    </div>
  )
}

export default ProductAll;
