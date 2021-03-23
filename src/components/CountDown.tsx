import { useState, useEffect } from 'react';
import styles from '../styles/components/CountDown.module.css';

export function CountDown(){

    const [time,setTime] = useState(25*60);
    const [active,setActive] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minuteL, minuteR] = String(minutes).padStart(2, '0').split('');
    const [secL, secR] = String(seconds).padStart(2, '0').split('');

    function startCount(){
       setActive(true);
    }

    useEffect(() =>{
       /* console.log(active); */
       if (active && time >0){
        setTimeout(() =>{
            setTime( time - 1 );
        },1000)
    }
    }, [active, time])

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
            <button
             type="button"
             className={styles.startCountButton}
             onClick={startCount}
            >
                Iniciar um ciclo
            </button>
        </div>
    );
}