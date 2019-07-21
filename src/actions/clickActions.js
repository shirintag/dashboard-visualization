export const ActionTypes = {
    CHANGE_METRIC: 'CHANGE_METRIC',
}


export const changeMetric = (payload) => ({
    type: ActionTypes.CHANGE_METRIC,
    payload: payload
});