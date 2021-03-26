import styles from '../styles/components/CompletedChalenge.module.css';

export function CompletedChalenge(){
    return (
        <div className={styles.CompletedChalenge}>
            <span>Desafios completados</span>
            <span>5</span>
        </div>
    )
}