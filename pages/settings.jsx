import { useState, useEffect } from 'react';
import ThemeInfo from '../components/ThemeInfo';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from '../styles/SettingsPage.module.css';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('appearance');
  const [currentTheme, setCurrentTheme] = useState('github-dark');
  const [fontSize, setFontSize] = useState(14);
  const [fontFamily, setFontFamily] = useState('Fira Code');
  const [lineHeight, setLineHeight] = useState(1.6);
  const [isVisible, setIsVisible] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Load settings from localStorage
    const savedTheme = localStorage.getItem('theme') || 'github-dark';
    const savedFontSize = localStorage.getItem('fontSize') || 14;
    const savedFontFamily = localStorage.getItem('fontFamily') || 'Fira Code';
    const savedLineHeight = localStorage.getItem('lineHeight') || 1.6;

    setCurrentTheme(savedTheme);
    setFontSize(Number(savedFontSize));
    setFontFamily(savedFontFamily);
    setLineHeight(Number(savedLineHeight));

    // Apply settings
    document.documentElement.style.setProperty('--font-size', `${savedFontSize}px`);
    document.documentElement.style.setProperty('--line-height', savedLineHeight);
    document.documentElement.style.setProperty('--font-family', savedFontFamily);
  }, []);

  const handleFontSizeChange = (value) => {
    setFontSize(value);
    document.documentElement.style.setProperty('--font-size', `${value}px`);
    localStorage.setItem('fontSize', value);
  };

  const handleFontFamilyChange = (value) => {
    setFontFamily(value);
    document.documentElement.style.setProperty('--font-family', value);
    localStorage.setItem('fontFamily', value);
  };

  const handleLineHeightChange = (value) => {
    setLineHeight(value);
    document.documentElement.style.setProperty('--line-height', value);
    localStorage.setItem('lineHeight', value);
  };

  const resetEditorSettings = () => {
    setFontSize(14);
    setFontFamily('Fira Code');
    setLineHeight(1.6);

    localStorage.setItem('fontSize', 14);
    localStorage.setItem('fontFamily', 'Fira Code');
    localStorage.setItem('lineHeight', 1.6);

    document.documentElement.style.setProperty('--font-size', '14px');
    document.documentElement.style.setProperty('--line-height', '1.6');
    document.documentElement.style.setProperty('--font-family', 'Fira Code');

    setShowResetModal(false);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  const themes = [
    { name: 'GitHub Dark', icon: '/github-dark.png', publisher: 'GitHub', theme: 'github-dark', description: 'GitHub theme for VS Code' },
    { name: 'Dracula', icon: '/dracula.png', publisher: 'Dracula Theme', theme: 'dracula', description: 'Official Dracula Theme' },
    { name: 'Ayu Dark', icon: '/ayu.png', publisher: 'teabyii', theme: 'ayu-dark', description: 'A simple theme with bright colors' },
    { name: 'Ayu Mirage', icon: '/ayu.png', publisher: 'teabyii', theme: 'ayu-mirage', description: 'A simple theme with bright colors' },
    { name: 'Nord', icon: '/nord.png', publisher: 'arcticicestudio', theme: 'nord', description: 'Arctic, north-bluish clean theme' },
    { name: 'Night Owl', icon: '/night-owl.png', publisher: 'sarah.drasner', theme: 'night-owl', description: 'For the night owls' },
  ];

  return (
    <>
      <Breadcrumbs filename="settings.json" />
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.header}>
        <h2 className={styles.title}>⚙️ Settings & Preferences</h2>
        <p className={styles.subtitle}>Customize your portfolio experience</p>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'appearance' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('appearance')}
        >
          <span className={styles.tabIcon}>🎨</span>
          Appearance
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'editor' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('editor')}
        >
          <span className={styles.tabIcon}>📝</span>
          Editor
        </button>
      </div>

      {/* Content */}
      <div className={styles.content}>
        {/* Appearance Tab */}
        {activeTab === 'appearance' && (
          <div className={styles.tabContent}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Color Themes</h3>
              <p className={styles.sectionDescription}>Choose your preferred color theme</p>
              <div className={styles.themesGrid}>
                {themes.map((theme) => (
        <ThemeInfo
                    key={theme.theme}
                    {...theme}
                    isActive={currentTheme === theme.theme}
                    onThemeChange={setCurrentTheme}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Editor Tab */}
        {activeTab === 'editor' && (
          <div className={styles.tabContent}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Editor Settings</h3>
              <p className={styles.sectionDescription}>Customize your coding environment</p>

              <div className={styles.settingItem}>
                <div className={styles.settingLabel}>
                  <span className={styles.settingIcon}>🔤</span>
                  <div>
                    <h4>Font Size</h4>
                    <p>Choose your preferred text size</p>
                  </div>
                </div>
                <div className={styles.optionsControl}>
                  <button
                    className={`${styles.optionButton} ${fontSize === 12 ? styles.activeOption : ''}`}
                    onClick={() => handleFontSizeChange(12)}
                  >
                    Small
                    <span className={styles.optionValue}>12px</span>
                  </button>
                  <button
                    className={`${styles.optionButton} ${fontSize === 14 ? styles.activeOption : ''}`}
                    onClick={() => handleFontSizeChange(14)}
                  >
                    Default
                    <span className={styles.optionValue}>14px</span>
                  </button>
                  <button
                    className={`${styles.optionButton} ${fontSize === 16 ? styles.activeOption : ''}`}
                    onClick={() => handleFontSizeChange(16)}
                  >
                    Large
                    <span className={styles.optionValue}>16px</span>
                  </button>
                </div>
              </div>

              <div className={styles.settingItem}>
                <div className={styles.settingLabel}>
                  <span className={styles.settingIcon}>📏</span>
                  <div>
                    <h4>Line Height</h4>
                    <p>Adjust spacing between lines</p>
                  </div>
                </div>
                <div className={styles.optionsControl}>
                  <button
                    className={`${styles.optionButton} ${lineHeight === 1.4 ? styles.activeOption : ''}`}
                    onClick={() => handleLineHeightChange(1.4)}
                  >
                    Compact
                    <span className={styles.optionValue}>1.4</span>
                  </button>
                  <button
                    className={`${styles.optionButton} ${lineHeight === 1.6 ? styles.activeOption : ''}`}
                    onClick={() => handleLineHeightChange(1.6)}
                  >
                    Default
                    <span className={styles.optionValue}>1.6</span>
                  </button>
                  <button
                    className={`${styles.optionButton} ${lineHeight === 1.8 ? styles.activeOption : ''}`}
                    onClick={() => handleLineHeightChange(1.8)}
                  >
                    Relaxed
                    <span className={styles.optionValue}>1.8</span>
                  </button>
                </div>
              </div>

              <div className={styles.settingItem}>
                <div className={styles.settingLabel}>
                  <span className={styles.settingIcon}>✍️</span>
                  <div>
                    <h4>Font Family</h4>
                    <p>Choose your preferred font</p>
                  </div>
                </div>
                <select 
                  value={fontFamily}
                  onChange={(e) => handleFontFamilyChange(e.target.value)}
                  className={styles.select}
                >
                  <option value="Fira Code">Fira Code</option>
                  <option value="JetBrains Mono">JetBrains Mono</option>
                  <option value="Consolas">Consolas</option>
                  <option value="Monaco">Monaco</option>
                  <option value="monospace">Monospace</option>
                </select>
              </div>

              {/* Reset Button */}
              <div className={styles.resetSection}>
                <button onClick={() => setShowResetModal(true)} className={styles.resetButton}>
                  <span className={styles.buttonIcon}>🔄</span>
                  Reset to Defaults
                </button>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Preview Panel */}
      <div className={styles.preview}>
        <h3 className={styles.previewTitle}>Live Preview</h3>
        <div className={styles.previewContent}>
          <div className={styles.previewCode}>
            <div className={styles.previewLine}>
              <span className={styles.lineNumber}>1</span>
              <span className={styles.keyword}>const</span> <span className={styles.variable}>portfolio</span> = {'{'}
            </div>
            <div className={styles.previewLine}>
              <span className={styles.lineNumber}>2</span>
              <span className={styles.property}>  theme</span>: <span className={styles.string}>"{currentTheme}"</span>,
            </div>
            <div className={styles.previewLine}>
              <span className={styles.lineNumber}>3</span>
              <span className={styles.property}>  fontSize</span>: <span className={styles.number}>{fontSize}</span>,
            </div>
            <div className={styles.previewLine}>
              <span className={styles.lineNumber}>4</span>
              <span className={styles.property}>  fontFamily</span>: <span className={styles.string}>"{fontFamily}"</span>
            </div>
            <div className={styles.previewLine}>
              <span className={styles.lineNumber}>5</span>
              {'}'};
            </div>
          </div>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetModal && (
        <div className={styles.modalOverlay} onClick={() => setShowResetModal(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <span className={styles.modalIcon}>⚠️</span>
              <h3>Reset Editor Settings?</h3>
            </div>
            <p className={styles.modalText}>
              This will restore all editor settings to their default values:
            </p>
            <ul className={styles.modalList}>
              <li>Font Size: Default (14px)</li>
              <li>Line Height: Default (1.6)</li>
              <li>Font Family: Fira Code</li>
            </ul>
            <div className={styles.modalActions}>
              <button onClick={() => setShowResetModal(false)} className={styles.cancelButton}>
                Cancel
              </button>
              <button onClick={resetEditorSettings} className={styles.confirmButton}>
                Reset Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showSuccessToast && (
        <div className={styles.toast}>
          <span className={styles.toastIcon}>✓</span>
          Settings reset successfully!
        </div>
      )}
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Settings' },
  };
}

export default SettingsPage;
