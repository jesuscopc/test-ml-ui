import { useEffect, useState } from 'react';
import { SendRequest } from 'utils/Http.util';
import API from 'constants/Api';

export type TProductDetail = {
  image: string;
  title: string;
  condition: string;
  price: string;
  soldQuantity: number;
  description: string;
};

type IApiProduct = {
  data: TProductDetail;
  loading: boolean;
  error: any;
};

const UseApiProduct = (productId: string): IApiProduct => {
  const [state, setState] = useState<IApiProduct>({
    data: {
      title: '',
      condition: '',
      description: '',
      price: '',
      soldQuantity: 0,
      image: ''
    },
    loading: false,
    error: null
  });

  const getDataSearch = async () => {
    setState({ ...state, loading: true });
    const path = `${API.PRODUCT}/${productId}`;
    try {
      const result = await SendRequest(path);
      setState({ data: result.data, loading: false, error: null });
    } catch (error) {
      setState({ ...state, loading: false, error });
    }
  };

  useEffect(() => {
    getDataSearch();
  }, [productId]);

  return state;
};

export default UseApiProduct;
