import React from 'react';
import '../css/productCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <div className="card" onClick={ () => showDetail(item?.id) }>
      <img src={ item?.img } alt={ item?.title } />
      <span className="choice">{ item?.choice ? "Conscious choice" : "" }</span>
      <h1>{ item?.title }</h1>
      <strong>￦ { item?.price }</strong>
      <span className="new">{ item?.new ? "신제품" : "" }</span>
    </div>
  )
}

export default ProductCard;
