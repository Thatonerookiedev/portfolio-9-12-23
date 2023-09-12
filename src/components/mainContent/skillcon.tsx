

interface SkillConProps{
    title:string,
    skills?:string[],
}

interface SkillProps{
    name:string
}

const Skills = ({
    name = 'n/a'
}:SkillProps) => {
    return ( 
        <>
            <p className="skill">{name}</p>
        </>
     );
}


const SkillCon = ({
    title = 'not set',
    skills = []
}:SkillConProps) => {
    return ( 
        <>
            <div className="skillcon">
                <p className="title">{title}</p>
                <div className="skillsmaincon">
                    {
                        skills.map((item,index)=>{
                            return <Skills key={index} name={item}/>
                        })
                    }
                </div>
            </div>
        </>
     );
}
 
export default SkillCon;












