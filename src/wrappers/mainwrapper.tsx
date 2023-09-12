'use client'
import { createContext,useState,createRef } from "react";

interface MainContextProp{
    children?:any;
}

export const MainContext = createContext({})


const MainWrapper = ({children}:MainContextProp) => {

    const homeRef = createRef()
    const workRef = createRef()
    const aboutmeRef = createRef()
    const contactRef = createRef()

    const [refs,setrefs] = useState({
        homeRef:homeRef,
        workRef:workRef,
        aboutmeRef:aboutmeRef,
        contactRef: contactRef
    })


    return ( 
        <>
            <MainContext.Provider value={{refs}}>
                {children}
            </MainContext.Provider>        
        </>
     );
}
 
export default MainWrapper;











