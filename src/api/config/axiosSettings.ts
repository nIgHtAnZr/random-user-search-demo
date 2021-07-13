import axios from 'axios';

import config from '../../config/configs';
import history from '../../routes/history';

export const getAxiosInstance = () => {
  const instance = axios.create();

  // Adding interceptors to check response errors
  instance.interceptors.response.use(
    response => response,
    error => {
      // Check the error is an internal server error or not
      console.log(error.response);
      
      if (
        error.response &&
        config.statusCode.errorCodes.includes(error.response.status)
      ) {
        history.push('/internal-server-error');
      }

      return Promise.reject(error.response);
    }
  );

  return instance;
};
