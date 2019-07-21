import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import clickReducer from './clickReducer';

const rootReducer = combineReducers({
    apiReducer,
    clickReducer
});

export default rootReducer;
