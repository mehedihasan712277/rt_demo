type GreetProp = {
    name: string
    messageCount?: number
    isLogedIn: boolean
}

const Greet = (props: GreetProp) => {
    const { messageCount = 0 } = props
    return (
        <div>
            <p>
                {
                    props.isLogedIn
                        ? `Hi ${props.name}. You have ${messageCount} unread message.`
                        : "welcome"
                }
            </p>
        </div>
    )
}

export default Greet