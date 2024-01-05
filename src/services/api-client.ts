import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c2639f8423da400ca071d6df1be8cfc9'
    } //now this key will be included in every query string sent to the backend
});