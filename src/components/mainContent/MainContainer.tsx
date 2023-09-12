'use client'
import { useContext } from "react";
import { MainContext } from "@/wrappers/mainwrapper";
import Aboutme from "../aboutme";
import Contact from "../contact";
import HomeDiv from "../homediv";
import Navbar from "../navbar/navbar";
import Works from "../works";


const MainContainer = () => {
    //@ts-expect-error it is not an empty object
    const {refs} = useContext(MainContext)

    return ( 
        <>
                <div className="Main">
                    <Navbar/>
                    <HomeDiv ref1={refs.homeRef}/>
                    <Works ref1={refs.workRef}/>
                    <Aboutme ref1={refs.aboutmeRef}/>
                    <Contact ref1={refs.contactRef}/>
                </div>
        </>
     );
}
 
export default MainContainer;













