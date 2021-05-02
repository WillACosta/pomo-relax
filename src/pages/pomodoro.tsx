import Layout from "../components/Layout";
import styles from "../styles/pages/pomodoro.module.scss";

import Link from 'next/link';

import { useContext } from "react";
import { PomodoroContext } from "../contexts/PomodoroContext";
import { Modal } from "../components/Modal";

export default function Pomodoro() {

  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    reset,
    start,
    hasCancelled,
    giveUp,
    hasBreak
  } = useContext(PomodoroContext);

  const [minuteStart, minuteEnd] = String(minutes).padStart(2, '0').split('');
  const [secondStart, secondEnd] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      {
        hasFinished ? (
          <Modal title="Muito bem!"
            message="Agora que chegamos ao final desse ciclo faça uma pausa para relaxar.
                 Saia do foco um pouco e vem com a gente."
            image="like"
          />) : null
      }

      {
        hasCancelled ? (
          <Modal title="Que pena..."
            message="Temos certeza que da próxima vez vamos conseguir manter o foco até o fim."
            image="clock"
          />
        ) : null
      }

      <Layout image="clock">
        <Link href="/home">
          <div className={styles.back} onClick={reset}>
            <span className="material-icons">west</span>
            <span>Voltar</span>
          </div>
        </Link>

        {
          !hasBreak ? (
            <div className={styles.infoText}>
              <p>Agora é o momento de focar nas suas tarefas, não se preocupe com nada mais.</p>
              <span className="material-icons">info</span>
            </div>
          ) : (
            <div className={styles.infoText}>
              <p>Este é o momento da sua pausa, faça uma meditação ou então qualquer outra coisa que desejar! :)</p>
              <span className="material-icons">info</span>
            </div>
          )
        }

        {
          !hasBreak &&
          <div className={styles.cicle}>
            <span>Ciclos</span>
            <div id="cicleID">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        }

        <div className={styles.timer}>
          <div>
            <span>{minuteStart}</span>
            <span>{minuteEnd}</span>
          </div>
          <span>:</span>
          <div>
            <span>{secondStart}</span>
            <span>{secondEnd}</span>
          </div>
        </div>

        {
          !isActive ?
            (
              <button className="btn-primary" onClick={start} disabled={hasCancelled}>
                Começar
                <span className="material-icons">play_arrow</span>
              </button>
            ) :
            (
              <button className="btn-secondary" onClick={giveUp}>
                Desistir
                <span className="material-icons">close</span>
              </button>
            )
        }
      </Layout>
    </>
  )
}