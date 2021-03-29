import { useContext } from 'react';
import { Challengecontext } from '../context/ChallengeContext';

import styles from '../styles/components/Experiencebar.module.css';

export function Experiencebar(){
    const {  } = useContext(Challengecontext);

    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: '50%'}} />
                <span className={styles.currentExperience} style={{left: '50%'}}>
                    300 xp
                </span>
            </div>
            <span>600 xp</span>
        </header>
    )
}

export default Experiencebar;