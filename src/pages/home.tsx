import { useRouter } from 'next/router';
import styles from '../styles/pages/home.module.scss';

/** Components */
import { SwitchTheme } from '../components/SwitchTheme';
import { History } from '../components/History';

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
      <div className={styles.leftSection}>
        <h3>O que você gostaria de fazer agora?</h3>
        <main>
          <div className={styles.action}>
            <Link href="/pomodoro">
              <div>
                <span className="material-icons">
                  timer
              </span>
                <span>Focar</span>
              </div>
            </Link>
            <Link href="/focus">
              <div>
                <span className="material-icons">
                  self_improvement
              </span>
                <span>Relaxar</span>
              </div>
            </Link>
          </div>

          <History />

        </main>
      </div>

      <div className={styles.rightSection}>
        <SwitchTheme />
        <img src="/img/relax.svg" alt="Homem descansando perto de duas árvores" />
      </div>
    </div>
  );
}