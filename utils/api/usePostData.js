import { useState, useEffect, useReducer, useContext } from 'react';
import axios from 'axios';

/**
 * Ganti di sini untuk switch antar staging
 * URL_DEV="http://localhost:3000/api/"
 * URL_PROD="https://https://akper-service.subarnanto.com/"
 */
const URL = process.env.URL_DEV;

// ===== USE REDUCER ==========
function fetchReducer(state, action) {
  // console.log(state);
  // console.log(action);
  const { type, result } = action;

  switch (type) {
    case 'FETCH_INIT':
      return {
        code: '',
        title: '',
        message: '',
        isLoading: true,
      };

    case 'POST_SUCCESS':
      console.log(result.data);
      console.log(result.statusText);
      return {
        ...state,
        code: result.status,
        data: result.data,
        message: result.data,
        title: result.statusText,
        isLoading: false,
        isError: false,
      };

    case 'FETCH_FAILURE':
      const { statusCode, error, message } = result;

      return {
        ...state,
        code: statusCode,
        title: error,
        message,
        isLoading: false,
        isError: true,
      };

    default:
      throw new Error();
  }
}

export default function usePostData() {
  const [API, setAPI] = useState('');
  const [params, setParams] = useState({});
  const [state, dispatch] = useReducer(fetchReducer, {
    code: '',
    title: '',
    message: '',
    isLoading: true,
  });

  useEffect(() => {
    let didCancel = false;

    async function postData() {
      dispatch({ type: 'FETCH_INIT' });
      let result = null;
      const options = {
        method: 'post',
        url: URL + API,
        data: params,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
      };

      try {
        result = await axios(options);
        console.log('result', result, URL + API);

        if (!didCancel) {
          dispatch({
            type: 'POST_SUCCESS',
            result,
          });
          setAPI('');
          setParams('');
        }
      } catch (error) {
        result = error.response.data;
        dispatch({ type: 'FETCH_FAILURE', result });
      }
    }

    if (API !== '') {
      postData();
    }

    return () => {
      didCancel = true;
    };
    // }, []);
  }, [API, params]);

  function postData(api, params) {
    // console.log(URL + api);
    // console.log(params);
    setAPI(api);
    setParams(params);
  }

  return [state, postData];
}
