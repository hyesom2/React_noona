import React from 'react';
import '../css/productCard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductCard = ({ productList }) => {
  return (
    <Container>
      <Row fluid="xl">
          {
            productList.map((item, index) => (
              <Col className="card" key={ index } xl={3} md={6} xs={12}>
                <img src={ item.img } alt={ item.title } />
                <span className="choice">{ item.choice ? "Conscious choice" : null }</span>
                <h1>{ item.title }</h1>
                <strong>{ item.price }</strong>
                <span className="new">{ item.new ? "신제품" : null }</span>
              </Col>
            ))
          }
      </Row>
    </Container>
  )
}

export default ProductCard;
