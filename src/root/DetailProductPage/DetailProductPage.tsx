import React from 'react';
import WithHeader from 'hocs/WithHeader/WithHeader';
import Ipod from 'assets/images/ipod.jpg';
import './index.scss';

const DetailProductPage = () => {
  return (
    <div className="container detail">
      <section className="detailProduct">
        <img src={Ipod} alt="ipod touch 5g" width="200" height="200" tabIndex={0} />
        <h2>Descipcion del producto</h2>
        <p title="descripion del producto" tabIndex={0}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deleniti laboriosam enim
          dolorem natus eaque quae quod voluptatem necessitatibus, saepe vero praesentium quam
          temporibus nihil accusantium sit! Repellendus, molestias sunt!
        </p>
      </section>
      <section className="buyCard">
        <p className="buyCard__status" title="items vendidos" tabIndex={0}>
          220 vendidos
        </p>
        <p className="buyCard__title" title="producto" tabIndex={0}>
          Deco reverse sombrero oxxo
        </p>
        <p className="buyCard__price" title="precio" tabIndex={0}>
          $ 1980<small>00</small>
        </p>
        <button type="button">Comprar</button>
      </section>
    </div>
  );
};

export default WithHeader(DetailProductPage);
