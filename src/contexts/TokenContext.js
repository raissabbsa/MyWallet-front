import { useState, createContext } from "react";

export const TokenContext = createContext()

export default function UserProvider({ children }) {

    const [token, setToken] = useState()
    const [user, setUser] = useState()

    return (
        <TokenContext.Provider value={{ token, setToken, user, setUser }}>
            {children}
        </TokenContext.Provider>
    )
}