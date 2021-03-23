import { fetch } from '../../utils/fetch';

const url = process.env.REACT_APP_CITY_SERVICE_URL;

export const searchCities = (params = {}) => {

    return fetch(url + '/api/v1/cities/search', params);
}