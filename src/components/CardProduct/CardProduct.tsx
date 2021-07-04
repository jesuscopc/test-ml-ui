import React from 'react';
import { Link } from 'react-router-dom';
import LogoML from 'assets/images/Logo_ML@2x.png.png';
import './index.scss';

const CardProduct = (): React.ReactElement => {
  return (
    <div className="cardProduct">
      <Link to="/detailProduct/1" tabIndex={0}>
        <img src={LogoML} alt="imagen Product" width="180" height="180" />
      </Link>
      <div className="cardProduct__info">
        <div>
          <p title="Price Product" className="cardProduct__info__price" tabIndex={0}>
            $ 1980
          </p>
          <p title="Description Product" className="cardProduct__info__description" tabIndex={0}>
            Apple ipod touch 5g 16g negro Igual a nuevo Completo Unico
          </p>
        </div>
        <p title="Description Product" className="cardProduct__location" tabIndex={0}>
          Capital federal
        </p>
      </div>
    </div>
  );
};

export default CardProduct;
