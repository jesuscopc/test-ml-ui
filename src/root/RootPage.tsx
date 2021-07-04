import React from 'react';
import CardProduct from 'components/CardProduct/CardProduct';
import WithHeader from 'hocs/WithHeader/WithHeader';

const RootPage = (): React.ReactElement => {
  return (
    <div className="container">
      <CardProduct />
    </div>
  );
};

export default WithHeader(RootPage);
