'use client'
import { useContext } from "react";
import { MainContext } from "@/wrappers/mainwrapper";
import React from 'react'
import Image from 'next/image';
import woman1 from '../../public/images/woman1.png'
import square from '../../public/images/squareDots.png'
import logo2 from '../../public/images/logo3pink.png'
import quote from '../../public/images/quotes.png'
import { Link1 } from "./navbar/navbar";

interface MainProps{
    ref1?:any;
}

const RightBackground = () => {
    return ( 
        <>
            <Image
            alt=''
            src={square}
            className='square'
            />
            <Image
            alt=''
            src={logo2}
            className='logo'
            />
        </>
     );
}

const Right = () => {
    return ( 
        <>
            <div className="seccondaryCon right">
                <Image
                alt=''
                src={woman1}
                className='woman'
                />
                <p className="title">
                    <span className='circle'></span> 
                    Currently working on portfolio
                </p>
                <RightBackground/>
            </div>
        </>
     );
}

const Left = () => {
    const {refs} = useContext(MainContext)
    return ( 
        <>
            <div className="seccondaryCon left">
                <h2 className="title">
                    Shatoria Giles is a
                    <span className='different'> full-stack web developer</span>
                </h2>
                <p className='smallp'>
                “A journey of a thousand miles begins with a single step” – Lao Tzu
                </p>
                <Link1 
                name="Contact Me!!" 
                hash={false}
                scroll={()=>{refs.contactRef.current.scrollIntoView({ behavior: "smooth"})}}
                />
            </div>
        </>
     );
}

const QuoteImages = () => {
    return ( 
        <>
            <Image
            alt=""
            src={quote}
            className="quoteImage"
            />
            <Image
            alt=""
            src={quote}
            className="quoteImage"
            />
        </>
     );
}

const Quote = () => {
    return ( 
        <>
            <p className="quote2">
                A person who tries has an advantage over the person who wishes  
                <span className="author">
                     -Utibe Samuel Mbom
                </span>
                <QuoteImages/>
            </p>
        </>
     );
}

const HomeDiv = ({ref1}:MainProps) => {
    return ( 
        <>
            <div className="home conatiner"ref={ref1}>
                <Left/>
                <Right/>
            </div>
            <Quote/>
        </>
     );
}
 
export default HomeDiv;











