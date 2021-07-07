import React from 'react';
import { useLocation } from 'react-router-dom';
import CardProduct from 'components/CardProduct/CardProduct';
import WithHeader from 'hocs/WithHeader/WithHeader';
import UseApiSearch, { TProduct } from 'hooks/UseApiSearch';

const RootPage = (): React.ReactElement => {
  const query = new URLSearchParams(useLocation().search);
  const searchPattern = query.get('search') || '';
  const { data } = UseApiSearch(searchPattern);
  return (
    <div className="container">
      {data.map((item: TProduct) => (
        <CardProduct key={item.title} {...item} />
      ))}
    </div>
  );
};

export default WithHeader(RootPage);
