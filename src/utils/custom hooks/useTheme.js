import { useEffect, useState } from "react";

const useTheme=()=>{
    const [dark,setDark]=useState('light');
    const element=document.documentElement;

    const toggleTheme=()=>{
        console.log('toggle theme');
        setDark(!dark);
    }

    useEffect(()=>{
        switch(dark){
            case true:
                element.classList.add('dark');
                break;
            case false:
                element.classList.remove('dark');
                break;
            default:
                element.classList.remove('dark');
                break;
        }
    },[dark]);

    return [dark,toggleTheme];
}

export default useTheme;