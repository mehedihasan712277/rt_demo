type PersonListProps = {
    names: {
        first: string
        last: string
    }[]
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