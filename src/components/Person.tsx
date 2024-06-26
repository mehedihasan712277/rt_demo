import { PersonProp } from "./Person.type"

const Person = (props: PersonProp) => {

    return (
        <div>{props.name.first} {props.name.last}</div>
    )
}

export default Person