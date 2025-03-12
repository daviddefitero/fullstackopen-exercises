import { PersonItem } from "./PersonItem"

export const PersonsList = ({personsToShow, deletePerson}) => {


    return (
        <div>
        {personsToShow.map(person => <PersonItem key={person.name} person={person} deletePerson={deletePerson} />)}
        </div>
    )
}
