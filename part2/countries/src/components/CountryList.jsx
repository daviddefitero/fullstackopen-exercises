import { CountryListItem } from './CountryListItem.jsx'

export const CountryList = ({ countriesToShow, setCountriesToShow }) => {
    const {list, quantity} = countriesToShow

    return (
        <div>
            { quantity <= 10
                ? list.map(country => <CountryListItem key={country.cca3} country={country} setCountriesToShow={setCountriesToShow} />)
                : <div>Too many matches, specify another filter</div>
            }
        </div>
    )
}