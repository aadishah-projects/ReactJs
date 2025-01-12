import React, { useState } from "react";
import { UserContext } from "./UserContext";

const UserContextProvider = ({children}) => 
{
    const [user, setUser] = useState(null) // for retrieving user and for adding data setUser
    return (
        <UserContext.Provider  value =  {{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
export default  UserContextProvider