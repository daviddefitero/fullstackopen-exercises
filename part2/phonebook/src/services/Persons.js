import axios from "axios"

const API_ENDPOINT = 'http://localhost:3001/persons'

export const getAll = () => {
    const request = axios.get(API_ENDPOINT)
    return request.then(response => response.data)
}

export const create = (data) => {
    const request = axios.post(API_ENDPOINT, data)
    return request.then(response => response.data)
}

export const remove = (id) => {
    const url = `${API_ENDPOINT}/${id}`

    const request = axios.delete(url)
    return request.then(response => response.data)
}

export const update = (data) => {
    const url = `${API_ENDPOINT}/${data.id}`

    const request = axios.put(url, data)
    return request.then(response => response.data)
}