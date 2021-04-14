import { Challengecontext } from '../context/ChallengeContext';
import { useContext, useState } from 'react';
import styles from '../styles/components/LogIn.module.css';

export function LogIn(){
    const { login } = useContext(Challengecontext);

    return (
        <div className={styles.container}>
            <div className={styles.loginbox}>
                <img src="./logo-full.svg" alt="Logo"/>
                <strong>Bem-vindo</strong>
                <p>Faça login com teu GitHub</p>
                <div className={styles.go}>
                    <input 
                        className={styles.input} 
                        placeholder="Digite teu username" 
                        type="text" 
                        id="inputID"
                    />
                    <button onClick={ login }>
                        <img src="/next.png" alt="Login"/>
                    </button>
                </div>
            </div>
        </div>
    )
}