import styles from '../styles/components/Layout.module.scss';
import { SwitchTheme } from '../components/SwitchTheme';

const layout = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          {props.children}
        </div>

        <div className={styles.rightSection}>
          <SwitchTheme />
          <img src={`/img/${props.image}.svg`} alt="Ilustração" />
        </div>
      </div>
    </>
  )
};

export default layout;