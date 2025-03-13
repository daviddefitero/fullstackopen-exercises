export const CountryListItem = ({ country, setCountriesToShow }) => {
    const handleClick = () => {
        setCountriesToShow({list:[country], quantity:1})
    }

    return (
        <div>
            <span>{country.name.common} - </span>
            <button onClick={handleClick}>Show</button>
        </div>
    )
}