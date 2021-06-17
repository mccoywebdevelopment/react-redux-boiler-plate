import { combineReducers } from 'redux';
import loadingReducer from './loading';
import alertReducer from './alert';

export default combineReducers({
    loading:loadingReducer,
    alert:alertReducer
});