import {SAMPLE_ACTION} from '../actions/Types';
const INITIAL_STATE = {
  covidData: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return state;

    default:
      return state;
  }
};
