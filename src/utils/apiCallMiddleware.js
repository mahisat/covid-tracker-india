import Axios from 'axios';

const HOST = 'https://api.covid19india.org';

export const apiCallMiddleware = ({dispatch, getState}) => {
  return next => action =>
    typeof action === 'object' && action.url && !action.type
      ? apiCall({...action, dispatch, getState})
      : next(action);
};

export const apiCall = async ({
  dispatch,
  getState,
  url,
  method = 'get',
  types,
  data,
  meta,
}) => {
  const token = '';
  const opts = {
    method,
    headers: Boolean(token)
      ? {
          'content-type': 'application/json',
          Authorization: `JWT ${token}`,
        }
      : {'content-type': 'application/json'},
    data: data,
    url: `${HOST}/${url}`,
  };

  if (types && types.start) {
    dispatch({type: types.start, payload: data, meta});
  }

  Axios.request(opts)
    .then(({data}) => {
      onSuccess(data);
    })
    .catch(error => {
      onError(error);
    });

  function onError(error) {
    console.log('error', error);
    if (error.response) {
      console.log('error.response', error.response.data);
      if (types && types.error) {
        dispatch({type: types.error, payload: error.response.data});
      }
    } else if (error.request) {
      if (error.request._response) {
        console.log('error.response._response', error.request._response);
        if (types && types.error) {
          dispatch({
            type: types.error,
            payload: error.request?._response,
          });
        }
      }
    } else {
      console.log('error.message', error.message);
      if (error.message == 'Network error') {
        return onNoConnection(error);
      }
    }
  }

  function onNoConnection(error) {
    if (types && types.noConnection) {
      dispatch({
        type: types.noConnection,
      });
    }
  }

  function onSuccess(data) {
    // console.log('data onsuccess', data);
    if (types && types.success) {
      dispatch({type: types.success, payload: data, meta});
    }
    return data;
  }
};
