type GreetProp = {
    name: string
    messageCount?: number
    isLogedIn: boolean
}

const Greet = ({ name, messageCount = 0, isLogedIn }: GreetProp) => {
    return (
        <div>
            <p>
                {
                    isLogedIn
                        ? `Hi ${name}. You have ${messageCount} unread message.`
                        : "welcome"
                }
            </p>
        </div>
    )
}

export default Greet