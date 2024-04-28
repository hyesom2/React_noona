import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = (id) => {
    navigate(`/product/${id}`);
  }

  return (
    <Card onClick={ () => showDetail(item?.id) }>
      <img src={ item?.img } alt={ item?.title } />
      <span className="choice">{ item?.choice ? "Conscious choice" : "" }</span>
      <h1>{ item?.title }</h1>
      <strong>￦ { item?.price }</strong>
      <span className="new">{ item?.new ? "신제품" : "" }</span>
      <FontAwesomeIcon icon={faHeart} className="wish" />
    </Card>
  )
}

export default ProductCard;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  margin-bottom: 20px;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    margin: 0 auto;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    margin-bottom: 22px;
  }

  .choice {
    font-size: 13px;
    margin-bottom: 5px;
  }

  h1 {
    font-size: 13px;
    margin-bottom: 5px;

    &:hover {
      text-decoration: underline;
    }
  }

  strong {
    font-size: 13px;
    margin-bottom: 5px;
  }

  .new {
    position: absolute;
    top: 8px;
    left: 8px;
    background-color: red;
    color: #fff;
    padding: 0 8px;
    font-size: 11px;
    border-radius: 4px;
  }

  .wish {
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    transition: color 300ms ease-in-out;

    &:hover {
      color: red;
    }
  }
`;