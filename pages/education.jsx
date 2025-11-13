import { useState, useEffect } from 'react';
import Image from 'next/image';
import useSWR from 'swr';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from '../styles/EducationPage.module.css';

const fetcher = url => fetch(url).then(res => res.json());

const EducationPage = () => {
  const { data: educations, error } = useSWR('/api/education', fetcher);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (error) return <div>Failed to load</div>;
  if (!educations) return <div>Loading...</div>;

  return (
    <>
      <Breadcrumbs filename="education.yaml" />
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        {/* YAML Content */}
      <div className={styles.editorContent}>
        <div className={styles.yamlDocument}>
          <div className={styles.yamlLine}>
            <span className={styles.lineNumber}>1</span>
            <span className={styles.comment}># Education Timeline</span>
          </div>
          <div className={styles.yamlLine}>
            <span className={styles.lineNumber}>2</span>
            <span className={styles.comment}># Last updated: {new Date().toLocaleDateString()}</span>
          </div>
          <div className={styles.yamlLine}>
            <span className={styles.lineNumber}>3</span>
            <span></span>
          </div>
          <div className={styles.yamlLine}>
            <span className={styles.lineNumber}>4</span>
            <span className={styles.key}>education</span>
            <span className={styles.colon}>:</span>
          </div>

          {educations.map((education, index) => {
            const lineStart = 5 + (index * 20);
            return (
              <div key={education.id} className={styles.educationBlock}>
                <div className={styles.yamlLine}>
                  <span className={styles.lineNumber}>{lineStart}</span>
                  <span className={styles.indent}>  </span>
                  <span className={styles.dash}>-</span>
                  <span className={styles.key}> id</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.number}> {education.id}</span>
                </div>
                
                <div className={styles.yamlLine}>
                  <span className={styles.lineNumber}>{lineStart + 1}</span>
                  <span className={styles.indent}>    </span>
                  <span className={styles.key}>institution</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.string}> "{education.school}"</span>
                </div>

                <div className={styles.yamlLine}>
                  <span className={styles.lineNumber}>{lineStart + 2}</span>
                  <span className={styles.indent}>    </span>
                  <span className={styles.key}>degree</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.string}> "{education.degree}"</span>
                </div>

                <div className={styles.yamlLine}>
                  <span className={styles.lineNumber}>{lineStart + 3}</span>
                  <span className={styles.indent}>    </span>
                  <span className={styles.key}>period</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.string}> "{education.date}"</span>
                </div>

                {education.grade && (
                  <div className={styles.yamlLine}>
                    <span className={styles.lineNumber}>{lineStart + 4}</span>
                    <span className={styles.indent}>    </span>
                    <span className={styles.key}>grade</span>
                    <span className={styles.colon}>:</span>
                    <span className={styles.string}> "{education.grade}"</span>
                  </div>
                )}

                <div className={styles.yamlLine}>
                  <span className={styles.lineNumber}>{lineStart + 5}</span>
                  <span className={styles.indent}>    </span>
                  <span className={styles.key}>description</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.pipe}> |</span>
                </div>

                <div className={styles.yamlLine}>
                  <span className={styles.lineNumber}>{lineStart + 6}</span>
                  <span className={styles.indent}>      </span>
                  <span className={styles.string}>{education.description}</span>
                </div>

                <div className={styles.yamlLine}>
                  <span className={styles.lineNumber}>{lineStart + 7}</span>
                  <span className={styles.indent}>    </span>
                  <span className={styles.key}>logo</span>
                  <span className={styles.colon}>:</span>
                  <span className={styles.string}> "{education.icon}"</span>
                </div>

                <div className={styles.yamlLine}>
                  <span className={styles.lineNumber}>{lineStart + 8}</span>
                  <span></span>
                </div>

                {/* Visual Card */}
                <div className={styles.educationCard} style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={styles.cardHeader}>
                    <div className={styles.logoContainer} style={{ backgroundColor: education.iconBg }}>
                      <Image 
                        src={education.icon} 
                        alt={education.school} 
                        width={60} 
                        height={60} 
                        className={styles.logo}
                      />
                    </div>
                    <div className={styles.cardHeaderInfo}>
                      <h3 className={styles.schoolName}>{education.school}</h3>
                      <p className={styles.degree}>{education.degree}</p>
                    </div>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.dateGradeRow}>
                      <span className={styles.date}>📅 {education.date}</span>
                      {education.grade && <span className={styles.grade}>🎯 {education.grade}</span>}
                    </div>
                    <p className={styles.description}>{education.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* VS Code Status Bar */}
      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <span className={styles.statusItem}>
            <span className={styles.statusIcon}>📄</span>
            YAML
          </span>
          <span className={styles.statusItem}>
            <span className={styles.statusIcon}>✓</span>
            No Issues
          </span>
        </div>
        <div className={styles.statusRight}>
          <span className={styles.statusItem}>UTF-8</span>
          <span className={styles.statusItem}>LF</span>
          <span className={styles.statusItem}>Ln {5 + (educations.length * 20)}, Col 1</span>
        </div>
      </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Education' },
  };
}

export default EducationPage;
