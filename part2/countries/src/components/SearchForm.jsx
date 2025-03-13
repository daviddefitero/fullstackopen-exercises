export const SearchForm = ({ search, setSearch }) => {

    const handleChange = (event) => {
        setSearch(event.target.value)
      }

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    
    return (
        <form onSubmit={handleSubmit}>
                <label>Find countries: </label>
                <input value={search} onChange={handleChange} />
        </form>
    )
}