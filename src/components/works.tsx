import React from 'react'
import Headder from './mainContent/headder';
import SkillCon from './mainContent/skillcon';
import Image from 'next/image';
import dots from '../../public/images/squareDots.png'
import logo from '../../public/images/logo3pink.png'


interface MainProps{
    ref1?:any;
}

const skillArray = [
    'React',
    'NextJS',
    'Express'
]

const LanguageArray = [
    'React',
    'NextJS',
    'Express'
]

const ToolsArray = [
    'Figma',
    'Git',
    'VSCode',
    'Font Awesome'
]

const LanguagesArray = [
    'Javascript',
    'TypeScript',
    'Nodejs'
]

const DataBasesArray = [
    'MongoDB',
    'MySQL'
]

const OtherArray = [
    'HTML',
    'CSS',
    'SCSS',
    'REST'
]

const Right = () => {
    return ( 
        <>
            <div className="con right">
                <SkillCon
                title='FrameWorks'
                skills={skillArray}
                />
                <SkillCon
                title='Languages'
                skills={LanguageArray}
                />
                 <SkillCon
                title='Tools'
                skills={ToolsArray}
                />
                 <SkillCon
                title='Languages'
                skills={LanguageArray}
                />
                <SkillCon
                title='Databases'
                skills={DataBasesArray}
                />
                <SkillCon
                title='Other'
                skills={OtherArray}
                />
            </div>
        </>
     );
}

const Left = () => {
    return ( 
        <>
            <div className="con left">
                <Image
                alt=''
                src={dots}
                className='dots'
                />
                <Image
                alt=''
                src={dots}
                className='dots2'
                />
                <Image
                alt=''
                src={logo}
                className='logo'
                />
            </div>
        </>
     );
}


const Skills = () => {
    return ( 
        <>
            <Headder name='Skills'/>
            <div className="main">
                <Left/>
                <Right/>
            </div>
        </>
     );
}


const Works = ({ref1}:MainProps) => {
    return ( 
        <>
            <div className="works conatiner" ref={ref1}>
                <Headder name='Projects'/>
                <h4 className='conatiner'>Nothing here yet!</h4>
                <Skills/>
            </div>
        </>
     );
}
 
export default Works;