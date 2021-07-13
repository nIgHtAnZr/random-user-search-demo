import { getAxiosInstance } from './config/axiosSettings';

const axiosInstance = getAxiosInstance();

export const get = async (urlParams: string) => {
  const requestUrl = `${urlParams}`;

  const request = axiosInstance
    .get(requestUrl)
    .then(response => response)
    .catch(error => error);

  return request;
};
