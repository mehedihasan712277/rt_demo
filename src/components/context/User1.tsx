import { useContext, useState } from "react"
import { UserContex } from "./UserContext"

const User1 = () => {
    const userContext = useContext(UserContex)
    const handleLogIn = () => {
        if (userContext) {
            userContext.setUser({
                name: "mehedi",
                email: "mehedihasan@gmail.com"
            })
        }
    }
    const handleLogOut = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }
    return (
        <div>
            <p>useContext with future different type</p>
            <button onClick={handleLogIn}>Log In</button>
            <button onClick={handleLogOut}>Log Out</button>
            <div>User name is {userContext?.user?.name}</div>
            <div>User email is {userContext?.user?.email}</div>
        </div>
    )
}

export default User1