import { useState } from "react"
const useLocalStorage = (key, initiaValue) => {
    const [state, setState] = useState(() => {
        if(localStorage.getItem(key)){
            return JSON.parse(localStorage.getItem(key))
        }
        localStorage.setItem(key, JSON.stringify(initiaValue));
        return initiaValue;
    })
    const setStoredState = () => {
        localStorage.setItem(key, JSON.stringify(value));
        setState(value);
    }
    return([state, setStoredState]);
}

export default useLocalStorage;