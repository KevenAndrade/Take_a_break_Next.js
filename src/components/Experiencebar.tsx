import styles from '../styles/components/Experiencebar.module.css'
export function Experiencebar(){
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: '60%'}} />
                <span className={styles.currentExperience} style={{left: '60%'}}>
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    )
}

export default Experiencebar;