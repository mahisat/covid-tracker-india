import {
  SAMPLE_ACTION,
  COVID_DATA_FETCH_ERROR,
  COVID_DATA_FETCH_NO_CONNECTION,
  COVID_DATA_FETCH_SUCCESS,
  COVID_DATA_FETCH_START,
} from './Types';

export const sampleAction = () => ({
  type: SAMPLE_ACTION,
});

export const fetchCovidData = () => {
  return {
    url: '/data.json',
    method: 'get',
    types: {
      start: COVID_DATA_FETCH_START,
      success: COVID_DATA_FETCH_SUCCESS,
      noConnection: COVID_DATA_FETCH_NO_CONNECTION,
      error: COVID_DATA_FETCH_ERROR,
    },
  };
};
