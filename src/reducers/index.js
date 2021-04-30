import {combineReducers} from 'redux';
import CovidTrackerReducer from './CovidTrackerReducer';

const appReducer = combineReducers({
  CovidTrackerReducer: CovidTrackerReducer,
});

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};
