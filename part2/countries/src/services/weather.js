import axios from 'axios'

const { VITE_API_WEATHER, VITE_API_KEY, VITE_API_ICON } = import.meta.env

export const getWeather = (lat, lon) => {
    const request = axios.get(`${VITE_API_WEATHER}?units=metric&lat=${lat}&lon=${lon}&appid=${VITE_API_KEY}`)
    return request.then(request => request.data)
}

export const getIcon = (icon) => {
    const url = `${VITE_API_ICON}/${icon}@2x.png`
    return url
}
