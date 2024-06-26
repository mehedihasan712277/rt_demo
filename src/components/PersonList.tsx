import { Name } from "./Person.type"

type PersonListProps = {
    names: Name[]
}

const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {
                props.names.map((name, index) => <p key={index}> {name.first} {name.last}</p>)
            }
        </div>
    )
}

export default PersonList