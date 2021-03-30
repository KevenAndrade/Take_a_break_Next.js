import { useState, useEffect, useContext } from 'react';
import { CountDownContext } from '../context/CountDownContext';
import styles from '../styles/components/CountDown.module.css';


export function CountDown(){
    const { minutes, seconds, hasFinished, isactive, resetCount, startCount } = useContext(CountDownContext);

    const [minuteL, minuteR] = String(minutes).padStart(2, '0').split('');
    const [secL, secR] = String(seconds).padStart(2, '0').split('');

   

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