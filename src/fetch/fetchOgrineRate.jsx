import { OGRINE_API_URL, fetchOptions } from './options';

const fetchOgrineRates = (limit = 0, sort = 'ASC') => {
    const params = {
        sort,
        limit,
    };

    const query = Object.keys(params)
        .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
        .join('&')
    ;

    const init = {
        ...fetchOptions,
        method: 'GET',
    };

    return fetch(`${OGRINE_API_URL}/ogrineRates?${query}`, init)
        .then((res) => res.json())
        .catch((err) => console.error(err))
    ;
}

export { fetchOgrineRates };
