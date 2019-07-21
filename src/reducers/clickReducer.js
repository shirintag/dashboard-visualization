import { ActionTypes } from '../actions/clickActions';
import { ActionTypes as ActionTypesApi } from '../actions/apiActions'

const initialState = {
    orange_metric: 0,
    gray_metric: 0,
    blue_metric: 0
};

const example = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CHANGE_METRIC:
            return { ...action.payload }
        case ActionTypesApi.API_CALL:
            let sorted = action.payload.metrics.sort((a, b) => b.year - a.year)
            return { ...sorted[0] }
        default:
            return state
    }
}

export default example;