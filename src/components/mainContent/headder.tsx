

interface hedderprops{
    name:string
}


const Headder = ({
    name = 'NotSet'
}:hedderprops) => {
    return ( 
        <>
            <h3 className="headder">
                <span className='hashtag'>#</span>
                {name}
                <span className="line"></span>
            </h3>
        </>
     );
}
 
export default Headder;











