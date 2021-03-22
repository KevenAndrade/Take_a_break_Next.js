export function Experiencebar(){
    return(
        <header className="experiencebar">
            <span>0 xp</span>
            <div>
                <div style={{width: '60%'}} />
                <span className="current-experience" style={{left: '60%'}}>
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    )
}

export default Experiencebar;