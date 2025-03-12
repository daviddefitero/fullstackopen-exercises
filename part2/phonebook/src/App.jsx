import { useEffect, useState } from 'react'

import * as personService from './services/Persons'
import { Search } from './components/Search'
import { PersonForm } from './components/PersonForm'
import { PersonsList } from './components/PersonsList'
import { Notification } from './components/Notification'


export const App = () => {
  const [persons, setPersons] = useState([])
  const [personsToShow, setPersonsToShow] = useState(persons)
  const [search, setSearch] = useState('')
  const [notificationMessage, setNotificationMessage] = useState({ message:null, type:null, })

  useEffect(() => {
    personService
    .getAll()
    .then(initialPersons => setPersons(initialPersons))
    .catch(error => setNotificationMessage({ message:'Failed conneting to the server', type:'error' }))
  }, [])

  useEffect(() => search === '' ? setPersonsToShow(persons) : setPersonsToShow(persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase())))
  , [search, persons])


  const addPerson = (newName, newNumber) => {
    const existingPerson = persons.find(person => person.name === newName )
    
    const personObject = {
      ...(existingPerson ? { id: existingPerson.id } : {}),
      name: newName,
      number: newNumber
    }
    
    if (!existingPerson) {
      
      personService
      .create(personObject)
      .then(response => { 
          setPersons(persons.concat(response))
          setNotificationMessage({ message: `Added ${response.name}`, type:'success' })
    })
      .catch(error => setNotificationMessage({ message:`Failed adding ${personObject.name}`, type:'error'}))
      return true
    } else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        updatePerson(personObject)
        return true
      }
    }
  }

  const deletePerson = (personObject) => {
    personService
    .remove(personObject.id)
    .then(response => {
      setNotificationMessage({ message:`Deleted ${response.name}`, type:'success' })
      setPersons(persons.filter(person => person.id !== response.id))
    })
    .catch(err => { err.response.status !== 404
      ? setNotificationMessage({ message:`Error deleting ${personObject.name}`, type:'error' })
      : setNotificationMessage({ message:`Information of ${personObject.name} has already been deleted from server`, type:'error' })
  }) 
  }

  const updatePerson = (personObject) => {
    personService
    .update(personObject)
    .then(response => setPersons(persons.map(person => person.id !== response.id ? person : response)))
    .catch(error => setNotificationMessage({ message:`Failed updating ${personObject.name}`, type:'error' }))
  }


  return (
    <>
    <h1>Phonebook</h1>
    <Notification notificationMessage={notificationMessage}/>
    <Search search={search} setSearch={setSearch} />

    <h2>Add a new</h2>
    <PersonForm addPerson={addPerson} />

    <h2>Numbers</h2>
    <PersonsList personsToShow={personsToShow} deletePerson={deletePerson} />

    </>
  )
}
