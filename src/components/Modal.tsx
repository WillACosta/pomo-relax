import styles from '../styles/components/Modal.module.scss';

import Link from 'next/link';
import { useContext } from 'react';
import { PomodoroContext } from '../contexts/PomodoroContext';

export function Modal(props) {

  const { reset, hasCancelled, takeBreak } = useContext(PomodoroContext);

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.body}>
          <div>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
          </div>
          <img src={`img/${props.image}.svg`} alt="Ilustração" />
        </div>

        <div className={styles.footer}>
          <button className="btn-secondary" onClick={reset}>Sair</button>
          { !hasCancelled && <button className="btn-primary" onClick={takeBreak}>Fazer pausa</button> }
        </div>
      </div>
    </div>
  );
}