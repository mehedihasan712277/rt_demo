import Greet from "../Greet"

const CustomComponents = (props: React.ComponentProps<typeof Greet>) => {
    return (
        <div>CustomComponents {props.isLogedIn}</div>
    )
}

export default CustomComponents