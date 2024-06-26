import { useState } from "react"


const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogIn = () => {
        setIsLoggedIn(true)
    }

    const handleLogOut = () => {
        setIsLoggedIn(false)
    }
    return (
        <>
            <p>useState</p>
            <div>
                <button onClick={handleLogIn}>Log in</button>
                <button onClick={handleLogOut}>Log out</button>
            </div>
            <p>
                {
                    isLoggedIn
                        ? "log in"
                        : "log out"
                }
            </p>
        </>
    )
}

export default LoggedIn