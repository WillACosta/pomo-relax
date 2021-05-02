import Link from 'next/link';

import styles from '../styles/pages/home.module.scss';

/** Components */
import Layout from '../components/Layout';
import { History } from '../components/History';

export default function Home() {
  return (
    <Layout image="relax">
      <h3>O que você gostaria de fazer agora?</h3>
      <main className={styles.container}>
        <div className={styles.action}>
          <Link href="/pomodoro">
            <div>
              <span className="material-icons">
                alarm
              </span>
              <span>Focar</span>
            </div>
          </Link>
          <Link href="/relax">
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
    </Layout>
  );
}