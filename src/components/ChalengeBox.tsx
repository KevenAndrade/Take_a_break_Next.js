import { useContext } from 'react';
import { Challengecontext } from '../context/ChallengeContext';
import { CountDownContext } from '../context/CountDownContext';
import styles from '../styles/components/ChalengeBox.module.css';

export function ChalengeBox(){
                                          
    const { activeChallenge, resetChalenge, completeChalenge } = useContext(Challengecontext);
    const { resetCount } = useContext(CountDownContext);

    function handlefail(){
        resetChalenge();
        resetCount();
    }

    function handlesucced(){
        completeChalenge();
        resetCount();
    }

    return (
    <div className={styles.ChalengeBoxContainer}>
    {activeChallenge ? (
        <div className={styles.ChalengeBoxActive}>
            <header>Ganhe {activeChallenge.amount} xp</header>
            <main>
                <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                <strong>Novo desafio</strong>
                <p>{activeChallenge.description}</p>
            </main>
            <footer>
                <button 
                    type="button"
                    className={styles.challengefailButton}
                    onClick={handlefail}
                >Falhei
                </button>
                <button 
                    type="button"
                    className={styles.challengecompleteButton}
                    onClick={handlesucced}
                >Completei
                </button>
            </footer>
        </div>
    ):(
        <div className={styles.ChalengeBoxNotActive}>
            <strong> Finalize um ciclo para receber desafios a serem completados</strong>
            <p>
                <img src="icons/level-up.svg" alt="Level up"/>
                Avance de level completando desafios
            </p>
        </div>
    )}
    </div>
    )
}