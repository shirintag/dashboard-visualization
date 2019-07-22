import data from '../fixtures/data-input.json'

export const ActionTypes = {
    API_CALL: 'API_CALL',
}

export const fetchApi = () => ({
    type: 'API_CALL',
    payload: data
});