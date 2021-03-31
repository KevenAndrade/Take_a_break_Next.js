import { Challengecontext } from '../context/ChallengeContext';
import { useContext } from 'react';
import styles from '../styles/components/LogIn.module.css';

export function LogIn(){
    return (
        <div className={styles.container}>
            <div className={styles.loginbox}>
                <img src="./logo-full.svg" alt="Logo"/>

                <strong>Bem vindo</strong>
                <p>Faça login com teu GitHub</p>

            </div>
        </div>
    )
}