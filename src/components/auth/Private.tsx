import Login from "./Login"
import { ProfilePropsType } from "./Profile"
type PrivetPropsType =
    {
        isLoggedIn: boolean
        Component: React.ComponentType<ProfilePropsType>
    }
const Private = ({ isLoggedIn, Component }: PrivetPropsType) => {
    if (isLoggedIn) {
        return <Component name="mehedi"></Component>
    } else {
        return <Login></Login>
    }
}

export default Private