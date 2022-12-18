import { createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
    const [setup, setSetup] = useState(localStorage.getItem("token"))


    return (
        <AuthContext.Provider value={{ setup, setSetup }}>
            {props.children}
        </AuthContext.Provider>
    )
}