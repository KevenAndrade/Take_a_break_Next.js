import styles from '../styles/components/Perfil.module.css';

export function Perfil(){
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/kevenandrade.png" alt="Keven Andrade"/>
            <div>
                <strong>Keven Andrade</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 2
                </p>
            </div>
        </div>
    )
}