import { useState, useEffect, useContext } from 'react';
import { Challengecontext } from '../context/ChallengeContext';
import styles from '../styles/components/CountDown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function CountDown(){
    const { startNewChallenge } = useContext(Challengecontext);

    const [time,setTime] = useState(0.05*60);
    const [isactive,setActive] = useState(false);
    const [hasFinished,sethasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minuteL, minuteR] = String(minutes).padStart(2, '0').split('');
    const [secL, secR] = String(seconds).padStart(2, '0').split('');

    function startCount(){
       setActive(true);
    }

    function resetCount(){
       clearTimeout(countdownTimeout);
       setActive(false);
       setTime(0.1*60);
    }

    useEffect(() =>{
       /* console.log(active); */
        if (isactive && time >0){
            countdownTimeout = setTimeout(() =>{
                setTime( time - 1 );
            },1000);
        } else if (isactive  && time == 0) {
            /* console.log('finalisou.'); */
            setActive(false);
            sethasFinished(true);
            startNewChallenge()
        }
    }, [isactive, time])

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteL}</span>
                    <span>{minuteR}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secL}</span>
                    <span>{secR}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled
                    className={styles.startCountButton}
                >
                    Ciclo encerrado
                </button>
            ):(
                <>
                    { isactive ? (
                    <button
                        type="button"
                        className={`${styles.startCountButton} ${styles.startCountButtonActive}`}
                        onClick={resetCount}
                    >
                            Abandonar o ciclo
                    </button>
                    ):(
                        <button
                        type="button"
                        className={styles.startCountButton}
                        onClick={startCount}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}