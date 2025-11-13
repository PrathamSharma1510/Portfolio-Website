import Image from 'next/image';
import styles from '../styles/ThemeInfo.module.css';

const ThemeInfo = ({ icon, name, publisher, theme, isActive, onThemeChange }) => {
  const setTheme = () => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (onThemeChange) {
      onThemeChange(theme);
    }
  };

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
      <div className={styles.imageWrapper}>
      <Image src={icon} alt={name} height={100} width={100} />
        {isActive && <div className={styles.activeBadge}>✓ Active</div>}
      </div>
      <div className={styles.info}>
        <div className={styles.details}>
          <h3>{name}</h3>
          <h5>{publisher}</h5>
        </div>
        <button onClick={setTheme} className={`${styles.button} ${isActive ? styles.activeButton : ''}`}>
          {isActive ? 'Current Theme' : 'Apply Theme'}
        </button>
      </div>
    </div>
  );
};

export default ThemeInfo;
