import styles from '../styles/components/ChalengeBox.module.css';


export function ChalengeBox(){
    const hasActiveChallenge = true;
    return (
    <div className={styles.ChalengeBoxContainer}>
    {hasActiveChallenge ? (
        <div className={styles.ChalengeBoxActive}>
            <header>Ganhe 400xp</header>
            <main>
                <img src="icons/body.svg" alt=""/>
                <strong>Novo desafio</strong>
                <p>Levante e faça uma caminhada de 3 minutos.</p>
            </main>
            <footer>
                <button 
                    type="button"
                    className={styles.challengefailButton}
                >Falhei
                </button>
                <button 
                    type="button"
                    className={styles.challengecompleteButton}
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