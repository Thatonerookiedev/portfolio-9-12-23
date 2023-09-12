import React from 'react'
import Headder from './mainContent/headder';
import Image from 'next/image';
import phone from '../../public/images/phone.png'
import email from '../../public/images/email.png'


interface MainProps{
    ref1?:any;
}

interface InfoProps{
    icon:any,
    text:string
}

const Par = () => {
    return ( 
        <>
            <p className='par'>
            I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me. I only accept remote jobs though, because of this sorry in advace.
            </p>
        </>
     );
}

const InfoSpan = ({
    icon,
    text
}:InfoProps) => {
    return ( 
        <>
            <span className="info">
                <Image
                alt=''
                src={icon}
                className='icon'
                />
                <p className="text">{text}</p>
            </span>
        </>
     );
}

const Contactinfo = () => {
    return ( 
        <>
            <div className="contactinfo">
                <p className="title">Message me here!</p>
                <InfoSpan icon={phone} text='+1(205)746-9273'/>
                <InfoSpan icon={email} text='shatoriag01@gmail.com'/>
            </div>
        </>
     );
}

const Contact = ({ref1}:MainProps) => {
    
    return ( 
        <>
            <div className="contact " ref={ref1}>
                <Headder name='contact'/>
                <div className="maincon2">
                    <Par/>
                    <Contactinfo/>
                </div>
            </div>
        </>
     );
}

 
export default Contact;