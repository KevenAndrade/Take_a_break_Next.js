import { useContext } from 'react';
import { Challengecontext } from '../context/ChallengeContext';
import styles from '../styles/components/Perfil.module.css';

export function Perfil(){
    const { level } = useContext(Challengecontext);
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/kevenandrade.png" alt="Keven Andrade"/>
            <div>
                <strong>Keven Andrade</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}