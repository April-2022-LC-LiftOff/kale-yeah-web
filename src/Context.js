import React, { useState, useEffect } from "react";

  
export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
    const [regUsername, setRegUsername] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [items, setItems] = useState([])

    useEffect(() => {
        setRegUsername((window.localStorage.getItem('Username')));
    }, []);


    try {
        const result = window.localStorage.getItem('Username');
        console.log(result);
    } catch (err) {

        console.log('error', err);
    }

    useEffect(() => {
        setName((window.localStorage.getItem('Name')));
    }, []);

    try {
        const result = window.localStorage.getItem('Name');
        console.log(result);
    } catch (err) {

        console.log('error', err);
    }

    useEffect(() => {
        setDate((window.localStorage.getItem('Date')));
    }, []);

    try {
        const result = window.localStorage.getItem('Date');
        console.log(result);
    } catch (err) {

        console.log('error', err);
    }


    
     return (
        <Context.Provider value={{ regUsername, setRegUsername, name, setName, date, setDate, items, setItems}}>
            {children}
        </Context.Provider>
    );
};