import data from '../vai-challange-input.json'

export const ActionTypes = {
    API_CALL: 'API_CALL',
}

export const fetchApi = () => ({
    type: 'API_CALL',
    payload: data
});