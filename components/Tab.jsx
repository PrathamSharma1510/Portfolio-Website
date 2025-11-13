import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTabs } from '../contexts/TabsContext';
import styles from '../styles/Tab.module.css';

const Tab = ({ icon, filename, path, closeable }) => {
  const router = useRouter();
  const { closeTab } = useTabs();

  const handleClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeTab(path);
  };

  return (
    <Link href={path}>
      <div
        className={`${styles.tab} ${router.pathname === path && styles.active}`}
      >
        <Image src={icon} alt={filename} height={18} width={18} />
        <p>{filename}</p>
        {closeable && (
          <button 
            className={styles.closeButton}
            onClick={handleClose}
            aria-label={`Close ${filename}`}
          >
            ×
          </button>
        )}
      </div>
    </Link>
  );
};

export default Tab;
