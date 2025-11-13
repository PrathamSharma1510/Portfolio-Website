import { useRouter } from 'next/router';
import styles from '../styles/Breadcrumbs.module.css';

const Breadcrumbs = ({ filename }) => {
  const router = useRouter();
  
  // Map paths to folders for realistic structure
  const folderMap = {
    '/': 'pages',
    '/about': 'pages',
    '/contact': 'pages',
    '/projects': 'pages',
    '/experience': 'api',
    '/education': 'pages',
    '/resume': 'public',
    '/github': 'pages',
    '/settings': 'pages',
  };

  const folder = folderMap[router.pathname] || 'pages';

  return (
    <div className={styles.breadcrumbs}>
      <span className={styles.folder}>portfolio</span>
      <span className={styles.separator}>/</span>
      <span className={styles.folder}>{folder}</span>
      <span className={styles.separator}>/</span>
      <span className={styles.file}>{filename}</span>
    </div>
  );
};

export default Breadcrumbs;

