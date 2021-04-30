import {
  SAMPLE_ACTION,
  COVID_DATA_FETCH_ERROR,
  COVID_DATA_FETCH_NO_CONNECTION,
  COVID_DATA_FETCH_SUCCESS,
  COVID_DATA_FETCH_START,
} from '../actions/Types';
const INITIAL_STATE = {
  covidData: [],
  isFetchLoading: false,
  isFetchNetworkFailed: false,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return state;

    case COVID_DATA_FETCH_START:
      return {...state, loginLoading: true};
    case COVID_DATA_FETCH_SUCCESS:
      return {
        ...state,
        covidData: action.payload,
        isFetchLoading: false,
        isFetchNetworkFailed: false,
      };
    case COVID_DATA_FETCH_NO_CONNECTION:
      return {...state, isFetchLoading: false, isFetchNetworkFailed: true};
    case COVID_DATA_FETCH_ERROR:
      return {...state, isFetchLoading: false};

    default:
      return state;
  }
};
