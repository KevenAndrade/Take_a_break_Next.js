import { Challengecontext } from '../context/ChallengeContext';
import { useContext } from 'react';
import styles from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal(){
    const { level, closemodalup } = useContext(Challengecontext);

    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{ level }</header>

                <strong></strong>
                <p>Voce alcançou um novo level.</p>

                <button type="button" onClick={closemodalup}>
                    <img src="/icons/close.svg" alt="fechar modal"/>
                </button>
            </div>
        </div>
    )
}