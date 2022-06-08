import React, { useState, useEffect } from "react";

  
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [regUsername, setRegUsername] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    useEffect(() => {
        setRegUsername((window.localStorage.getItem('Username')));
    }, []);

    console.log(regUsername)

    try {
        const result = window.localStorage.getItem('Username');
        console.log(result);
    } catch (err) {

        console.log('error', err);
    }
    
     return (
        <Context.Provider value={{ regUsername, setRegUsername, name, setName, date, setDate }}>
            {children}
        </Context.Provider>
    );
};