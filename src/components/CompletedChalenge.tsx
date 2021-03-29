import { useContext } from 'react';
import { Challengecontext } from '../context/ChallengeContext';
import styles from '../styles/components/CompletedChalenge.module.css';

export function CompletedChalenge(){
    const { current } = useContext(Challengecontext);
    
    return (
        <div className={styles.CompletedChalenge}>
            <span>Desafios completados</span>
            <span>{current}</span>
        </div>
    )
}