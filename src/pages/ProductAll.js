import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query] = useSearchParams();

  const getProducts = async() => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은", searchQuery);
    // let url = `http://localhost:5000/products`;
    let url = `https://my-json-server.typicode.com/hyesom2/3_shopping-mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
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
      </Container>
    </div>
  )
}

export default ProductAll;
