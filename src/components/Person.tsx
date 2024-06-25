
type PersonProp = {
    name: {
        first: string
        last: string
    }

}
const Person = (props: PersonProp) => {

    return (
        <div>{props.name.first} {props.name.last}</div>
    )
}

export default Person