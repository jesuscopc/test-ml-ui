import React from 'react';
import { useParams } from 'react-router-dom';
import WithHeader from 'hocs/WithHeader/WithHeader';
import UseApiProduct from 'hooks/UseApiProduct';
import './index.scss';

const DetailProductPage = (): React.ReactElement => {
  const { productId } = useParams<{ productId: string }>();
  const { data } = UseApiProduct(productId);
  const { title, image, condition, description, price, soldQuantity } = data;
  return (
    <div className="container detail">
      <section className="detailProduct">
        <img src={image} alt={title} width="200" height="200" tabIndex={0} />
        <h2>Descripción del producto</h2>
        <p className="buyCard__description" title="descripion del producto" tabIndex={0}>
          {description}
        </p>
      </section>
      <section className="buyCard">
        <p className="buyCard__status" title="items vendidos" tabIndex={0}>
          {condition} - {soldQuantity} vendidos
        </p>
        <p className="buyCard__title" title="producto" tabIndex={0}>
          {title}
        </p>
        <p className="buyCard__price" title="precio" tabIndex={0}>
          $ {price}
        </p>
        <button type="button">Comprar</button>
      </section>
    </div>
  );
};

export default WithHeader(DetailProductPage);
export { DetailProductPage as PureDetailProductPage };
