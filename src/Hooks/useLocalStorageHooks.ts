import { useEffect, useState } from "react";

interface LocalStorageInterface{
    key:string;
    value:string;
}
const useLocalStorage = ({ Time = 480}) => {

    const [timeXpire , setTimeExpire ] = useState(Time); //time in minutes

    const setItem = async (key :string, value:string ) => localStorage.setItem(key  , value);
    const getItem = async (key:string) => localStorage.getItem(key); 
    const removeItem = async (key:string) => localStorage.removeItem(key);
    const cleanLocalStorage = async () => localStorage.clear();

    useEffect(() => {
        let DateToStart:Date = new Date();
        DateToStart.setMinutes(DateToStart.getMinutes() + Time);
        localStorage.setItem('Expire', DateToStart.toString());
    },[]);

    useEffect(() => {
        if(!timeXpire) return;
        localStorage.setItem('Expire' , timeXpire.toString());
    },[timeXpire]);


    return {
        setItem,
        getItem,
        removeItem,
        cleanLocalStorage,
        timeXpire,
        setTimeExpire,
    }
}





export default useLocalStorage;