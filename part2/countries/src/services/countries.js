import axios from 'axios'

const API_ENDPOINT = 'https://studies.cs.helsinki.fi/restcountries/api'

export const getAll = () => {
    const request = axios.get(`${API_ENDPOINT}/all`)
    return request.then(request => request.data)
}