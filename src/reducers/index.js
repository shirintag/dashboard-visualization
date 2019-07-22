import { combineReducers } from 'redux';

import apiReducer from './apiReducer';
import metricsReducer from './metricsReducer';

const rootReducer = combineReducers({
    apiReducer,
    metricsReducer
});

export default rootReducer;
