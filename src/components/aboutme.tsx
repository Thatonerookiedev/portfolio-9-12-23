'use client'
import React from 'react'
import {useEffect} from 'react'
import Headder from './mainContent/headder';
import Image from 'next/image';
import woman from '../../public/images/woman1.png'
import dots from '../../public/images/squareDots.png'



interface MainProps{
    ref1?:any;
}


const Left = () => {
    return ( 
        <>
            <div className="con3 left2">
                <p className="par">
                Hello, i’m Shatoria!

                <br /><br/>

                Hi there! My name is Shatoria Giles, an 18 year old full stack web developer with a specialization in backend development. I have been coding for around 8 months now and I am passionate about creating efficient and secure web applications. Looking forward to growing my skills and contributing to the tech industry!
                </p>
            </div>
        </>
     );
}


const Right = () => {
    return ( 
        <>
            <div className="con3 right2">
                <Image
                alt=''
                src={woman}
                className='woman'
                />
                <Image
                alt=''
                src={dots}
                className='dots'
                />
                <Image
                alt=''
                src={dots}
                className='dots'
                />
            </div>
        </>
     );
}


const Aboutme = ({ref1}:MainProps) => {
    useEffect(() => {
        console.log(ref1)
    }, [ref1])
    return ( 
        <>
            <div className="about conatiner" ref={ref1}>
                <Headder name='about-me'/>
                <span className="con2">
                    <Left/>
                    <Right/>
                </span>
            </div>
        </>
     );
}
 
export default Aboutme;