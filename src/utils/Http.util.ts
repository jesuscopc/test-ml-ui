export interface IResponse {
  success: boolean;
  data: any;
}

export const SendRequest = async (path: string): Promise<IResponse> => {
  const headers = new Headers();
  const url = path;
  const response = await fetch(url, {
    method: 'GET',
    headers
  });
  if (response.ok) {
    const result = await response.json();
    return {
      success: true,
      data: result
    };
  }
  return {
    success: false,
    data: null
  };
};

export default { SendRequest };
