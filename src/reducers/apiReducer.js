import { ActionTypes } from '../actions/apiActions';
import data from '../vai-challange-input.json'

const initialState = {
    data: { metrics: [] }
};

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.API_CALL:
            return { ...state, data: action.payload }
        default:
            return state
    }
}

export default apiReducer;