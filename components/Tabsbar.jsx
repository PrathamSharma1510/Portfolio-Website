import Tab from './Tab';
import { useTabs } from '../contexts/TabsContext';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  const { tabs } = useTabs();

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Tab 
          key={tab.path}
          icon={tab.icon} 
          filename={tab.filename} 
          path={tab.path}
          closeable={tab.closeable}
        />
      ))}
    </div>
  );
};

export default Tabsbar;
