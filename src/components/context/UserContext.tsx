import { createContext, useState } from "react"


export type AuthUser = {
    name: string
    email: string
}
type UserContexType = {
    user: AuthUser | null
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
type UserConetexProviderProps = {
    children: React.ReactNode
}
export const UserContex = createContext<UserContexType | null>(null)

const UserContextProvider = ({ children }: UserConetexProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null)

    return (
        <UserContex.Provider value={{ user, setUser }}>
            {children}
        </UserContex.Provider>
    )
}

export default UserContextProvider