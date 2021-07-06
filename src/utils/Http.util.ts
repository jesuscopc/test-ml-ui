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
    try {
      const result = await response.json();
      return {
        success: true,
        data: result
      };
    } catch (error) {
      return {
        success: false,
        data: null
      };
    }
  }
  throw new Error('Error in request');
};

export default { SendRequest };
