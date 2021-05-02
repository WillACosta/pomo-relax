
import Link from 'next/link';

import styles from '../styles/pages/intro.module.scss';
import styleRelax from '../styles/pages/relax.module.scss';

export default function Relax() {
  return (
    <>
      <Link href="/home">
        <div className={styleRelax.back}>
          <span className="material-icons">west</span>
          <span>Voltar</span>
        </div>
      </Link>

      <div className={styles.container}>
        <img src="/img/meditation.svg" alt="Ilustração de uma mulher praticando yoga" />
        <h1>Relaxe</h1>
        <p>Reserve este momento para acalmar sua mente e seus pensamentos</p>

        <button className="btn-primary">
          Começar
          <span className="material-icons">keyboard_arrow_right</span>
        </button>
      </div>
    </>
  )
}