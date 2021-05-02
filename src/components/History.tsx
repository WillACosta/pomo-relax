import styles from '../styles/components/History.module.scss';

export function History() {
  return (
    <div className={styles.history}>
      <h4>Meu histórico</h4>

      <div className={styles.historyContainer}>
        <div className={styles.item}>
          <span className="material-icons">alarm</span>
          <div className={styles.text}>
            <span>Pomodoro</span>
            <span>Você finalizou um ciclo de 4 pomodoros com sucesso, totalizando <span>2 horas</span> </span>
          </div>
        </div>

        <div className={styles.item}>
          <span className="material-icons">self_improvement</span>
          <div className={styles.text}>
            <span>Relaxar</span>
            <span>Você relaxou por exatamente <span>45 minutos</span> </span>
          </div>
        </div>

        <div className={styles.item}>
          <span className="material-icons">alarm</span>
          <div className={styles.text}>
            <span>Pomodoro</span>
            <span>Você finalizou um ciclo de 4 pomodoros com sucesso, totalizando <span>2 horas</span> </span>
          </div>
        </div>
      </div>
    </div>
  );
};