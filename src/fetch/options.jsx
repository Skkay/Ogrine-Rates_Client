const OGRINE_API_URL = import.meta.env.VITE_OGRINE_API_URL;

const fetchOptions = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
}

export { OGRINE_API_URL, fetchOptions };
