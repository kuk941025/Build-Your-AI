import { combineReducers } from 'redux';
import configReducer from './configs/reducer';

export default combineReducers({
  configs: configReducer,
});
