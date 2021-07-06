import { useEffect, useState } from 'react';
import { SendRequest } from 'utils/Http.util';
import API from 'constants/Api';

export type TProduct = {
  id: string;
  price: string;
  title: string;
  thumbnail: string;
  attributes: Array<any>;
  address: string;
};

type IApiSearch = {
  data: Array<TProduct>;
  loading: boolean;
  error: any;
};

const UseApiSearch = (searchPattern: string): IApiSearch => {
  const [state, setState] = useState<IApiSearch>({
    data: [],
    loading: false,
    error: null
  });

  const getDataSearch = async () => {
    setState({ ...state, loading: true });
    const path = `${API.SEARCH}?q=${searchPattern}`;
    try {
      const result = await SendRequest(path);
      setState({ data: result.data, loading: false, error: null });
    } catch (error) {
      setState({ data: [], loading: false, error });
    }
  };

  useEffect(() => {
    if (searchPattern.length > 1) {
      getDataSearch();
    }
  }, [searchPattern]);

  return state;
};

export default UseApiSearch;
