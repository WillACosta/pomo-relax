import { useRouter } from 'next/router';

import styles from '../styles/pages/intro.module.scss';

export default function Home() {

  const Link = ({ children, href }) => {
    const router = useRouter()
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault()
          router.push(href)
        }}
      >
        {children}
      </a>
    )
  }

  return (
    <div className={styles.container}>
      <img src="/img/intro.svg" alt="Ilustração de uma mulher praticando yoga" />
      <h1>Boas vindas</h1>
      <p>Reserve um momento para focar em suas tarefas e também para relaxar</p>

      <Link href="/home">
        <button className="btn-primary">
          Começar
        </button>
      </Link>
    </div>
  );
}
