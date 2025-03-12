import { useState } from "react"

export const PersonForm = ({addPerson}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleNameInputChange = (event) => setNewName(event.target.value)
        const handleNumberInputChange = (event) => setNewNumber(event.target.value)

    const handleButtonClick = (event) => {
        event.preventDefault()

        if (addPerson(newName, newNumber)) {
            setNewName('')
            setNewNumber('')
        }
    }

    return (
        <div>
            <form onSubmit={handleButtonClick} >
                <div>
                    <span>name: </span>
                    <input value={newName} onChange={handleNameInputChange} />
                    </div>
                <div>
                    <span>number: </span>
                    <input value={newNumber} onChange={handleNumberInputChange}></input>
                    </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
      </div>
    )
}