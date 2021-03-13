import styles from '../styles/components/SwitchTheme.module.scss';

export function SwitchTheme() {
  return (
    <div className={styles.container}>
      <span className="material-icons">
        brightness_4
      </span>
      <span>Alternar tema</span>
    </div>
  );
};