import { useEffect, useState } from 'react'

import * as weatherService from '../services/weather'

export const WeatherCard = ({ city, cityInfo }) => {
    const [weatherData, setWeatherData] = useState(null)

    const {latlng} = cityInfo

    useEffect(() => {
        weatherService
            .getWeather(latlng[0], latlng[1])
            .then(request => {
                const icon = weatherService.getIcon(request.weather[0].icon)
                setWeatherData({data:request, icon:icon})
            })
    }, [latlng])

    return (
        <div>
            <h2>Weather in {city}</h2>
            {weatherData !== null
                ? <>
                <p>Temperature {weatherData.data.main.temp} Celsius</p>
                <img src={weatherData.icon} />
                <p>Wind {weatherData.data.wind.speed} m/s</p>
                </>
                : <p>Loading</p>
            }
            
        </div>
    )
}