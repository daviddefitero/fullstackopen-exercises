export const Search = ({search , setSearch}) => {
    const handleSearchChange = (event) => setSearch(event.target.value)

    return (
        <div>
            <span>Filter show with: </span>
            <input onChange={handleSearchChange} value={search} />
      </div>
    )
}