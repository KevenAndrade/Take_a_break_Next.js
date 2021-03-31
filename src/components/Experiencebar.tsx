import { useContext } from 'react';
import { Challengecontext } from '../context/ChallengeContext';

import styles from '../styles/components/ExperienceBar.module.css';

export function Experiencebar(){
    const { current, experiencetonetxtlevel } = useContext(Challengecontext);
    const percenttoNL = Math.round(current*100) / experiencetonetxtlevel;

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${percenttoNL}%`}} />
                <span className={styles.currentExperience} style={{left: `${percenttoNL}%`}}>
                    {current} xp
                </span>
            </div>
            <span>{experiencetonetxtlevel} xp</span>
        </header>
    )
}

export default Experiencebar;