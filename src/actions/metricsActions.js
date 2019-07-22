export const ActionTypes = {
    UPDATE_METRICS: 'UPDATE_METRICS',
}

export const changeMetrics = (payload) => ({
    type: ActionTypes.UPDATE_METRICS,
    payload: payload
});
