import {useState, useCallback} from "react";


function useToggle(defaultValue= false) {
    const [value, setValue] = useState(defaultValue);
    const toggle = useCallback(() => setValue(prevValue => !prevValue), []);
    return [value, toggle, setValue]
}

export default useToggle;