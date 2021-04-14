import { useContext } from 'react';
import { Challengecontext } from '../context/ChallengeContext';
import styles from '../styles/components/Perfil.module.css';

interface user {
    name: string;
    login: string;
    avatar_url: string;
}

export function Perfil(){
    const { level, Gitname } = useContext(Challengecontext);
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/kevenandrade.png" alt="Keven Andrade"/>
            <div>
                <strong>{Gitname}</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level { level }
                </p>
            </div>
        </div>
    )
}