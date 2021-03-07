import styles from '../styles/pages/intro.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="/img/intro.svg" alt="Ilustração de uma mulher praticando yoga" />
      <h1>Boas vindas</h1>
      <p>Reserve um momento para focar em suas tarefas e também para relaxar</p>
      <button class="btn-primary">
        Começar
      </button>
    </div>
  );
}
