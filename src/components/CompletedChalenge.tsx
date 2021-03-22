import styles from '../styles/components/CompletedChalenge.module.css';

export function CompletedChalenge(){
    return (
        <div className={styles.CompletedChalenge}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    )
}