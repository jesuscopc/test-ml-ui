import React from 'react';
import { Link } from 'react-router-dom';
import { TProduct } from 'hooks/UseApiSearch';
import './index.scss';

const CardProduct = (item: TProduct): React.ReactElement => {
  const { id, price, title, thumbnail, address } = item;
  return (
    <div className="cardProduct">
      <Link to={`/detailProduct/${id}`} tabIndex={0}>
        <img src={thumbnail} alt={title} width="180" height="180" />
      </Link>
      <div className="cardProduct__info">
        <div>
          <p title="Price Product" className="cardProduct__info__price" tabIndex={0}>
            {`$ ${price}`}
          </p>
          <p title="Description Product" className="cardProduct__info__description" tabIndex={0}>
            {title}
          </p>
        </div>
        <p title="Description Product" className="cardProduct__location" tabIndex={0}>
          {address}
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
