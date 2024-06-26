import { useState } from "react"
type Auth = {
    name: string
    email: string
}


const User = () => {
    const [user, setUser] = useState<Auth | null>(null)
    const handleLogIn = () => {
        setUser({
            name: "mehedi",
            email: "mehedi@gmail.com"
        })
    }
    const handleLogOut = () => {
        setUser(null)
    }
    return (
        <div>
            <div>
                <button onClick={handleLogIn}>Sign in</button>
                <button onClick={handleLogOut}>Sign out</button>
            </div>
            <p>Name : {user?.name}</p>
            <p>Email : {user?.email}</p>
        </div>
    )
}

export default User