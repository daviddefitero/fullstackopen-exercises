import { WeatherCard } from "./WeatherCard"

export const CountryDetail = ({ country }) => {
    const { name, capital, capitalInfo, area, languages, flags, } = country

    return (
        <div>
            <h1>{name.common}</h1>
            
            <p>Capital: {capital}</p>
            <p>Area: {area}</p>

            <h2>Languages</h2>

            <ul>
                {Object.values(languages).map(language => <li key={language}>{language}</li>)}
            </ul>

            <img src={flags.png} alt={`Flag of ${name.common}`} height='250px' />

            <WeatherCard city={capital} cityInfo={capitalInfo} />
        </div>

    )
}