export const PersonItem = ({person, deletePerson}) => {
    const handleDeleteButton = () => {
        deletePerson(person)
    }

    return (
        <div>
            <span>{person.name} - {person.number}</span>
            <button onClick={handleDeleteButton}>delete</button>
        </div>
    )
}
