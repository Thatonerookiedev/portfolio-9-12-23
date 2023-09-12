'use client'
import Image from "next/image";
import logo from  '../../../public/images/logo 2.png'
import { useContext, useEffect } from "react";
import { MainContext } from "@/wrappers/mainwrapper";


interface LinkType{
    name:string;
    scroll?:any;
    hash?:boolean;
}


const Logo = () => {
    return ( 
        <>
            <Image
            alt=""
            src={logo}
            className="logo"
            />
        </>
     );
}

export const Link1 = ({
    name,
    scroll,
    hash = true
}:LinkType) => {
    return ( 
        <>
            <div className="link" onClick={()=>{scroll()}}>
                <p>
                    {hash ? <span className="hashtag" >#</span>: <></>}
                    {name}
                </p>
            </div>
        </>
     );
}


const Links = () => {
    //@ts-expect-error it is not a empty object
    const {refs} = useContext(MainContext)

    return ( 
        <>
            <div className="links">
                <Link1 name="home" scroll={()=>{refs.homeRef.current.scrollIntoView({ behavior: "smooth"})}}/>
                <Link1 name="works" scroll={()=>{refs.workRef.current.scrollIntoView({ behavior: "smooth"})}}/>
                <Link1 name="about-me" scroll={()=>{refs.aboutmeRef.current.scrollIntoView({ behavior: "smooth"})}}/>
                <Link1 name="contact" scroll={()=>{refs.contactRef.current.scrollIntoView({ behavior: "smooth"})}}/>
            </div>
        </>
     );
}




const Navbar = () => {
    return ( 
        <>
            <div className="navbar">
                <Logo/>
                <Links/>
            </div>
        </>
     );
}
 
export default Navbar;














