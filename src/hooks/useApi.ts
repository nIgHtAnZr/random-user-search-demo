import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { get } from '../api/commonApi';

const useApi = () => {
  const dispatch = useDispatch();
  const [actions, setActions] = useState<any>({});
  const [baseUrl, setBaseUrl] = useState<string>('');
  const [method, setMethod] = useState<string>('GET');

  const callAPI = () => {
    switch (method) {
      case 'GET':
        return get(baseUrl);

      default:
        return get(baseUrl);
    }
  };

  useEffect(() => {
    if (baseUrl) {
      const requestApiCall = async () => {
        dispatch({ type: actions.request });

        try {
          const result = await callAPI();

          if (result) {
            dispatch({
              type: actions?.success,
              payload: result?.data,
            });
          } else {
            dispatch({
              type: actions?.fail,
              payload: result?.data,
            });
          }
        } catch (error) {
          dispatch({
            type: actions?.fail,
            payload: error,
          });
        }

        setBaseUrl('');
      };

      requestApiCall();
    }
  }, [baseUrl, actions]); // eslint-disable-line react-hooks/exhaustive-deps

  const submitForm = (
    url: string,
    request: string,
    success: string,
    fail: string,
    method: string
  ) => {
    const newActions = { request, success, fail };
    const mergedActions = { ...actions, ...newActions };

    setMethod(method);
    setActions(mergedActions);
    setBaseUrl(url);
  };

  return [submitForm];
};

export default useApi;
