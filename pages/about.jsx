import { useState, useEffect } from 'react';
import Image from 'next/image';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from '../styles/About.module.css';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('languages');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = {
    languages: [
      { name: 'Python', level: 90, color: '#3776AB' },
      { name: 'JavaScript', level: 90, color: '#F7DF1E' },
      { name: 'TypeScript', level: 85, color: '#3178C6' },
      { name: 'C++', level: 82, color: '#00599C' },
      { name: 'Java', level: 80, color: '#007396' },
      { name: 'SQL', level: 85, color: '#4479A1' },
      { name: 'C#', level: 75, color: '#239120' }
    ],
    technologies: [
      { name: 'React', level: 90, color: '#61DAFB' },
      { name: 'Next.js', level: 85, color: '#000000' },
      { name: 'Node.js', level: 88, color: '#339933' },
      { name: 'Express.js', level: 85, color: '#000000' },
      { name: 'Django', level: 80, color: '#092E20' },
      { name: 'Redux', level: 82, color: '#764ABC' },
      { name: 'Tailwind CSS', level: 88, color: '#06B6D4' },
      { name: 'Socket.io', level: 78, color: '#010101' },
      { name: 'ASP.NET', level: 75, color: '#512BD4' }
    ],
    cloud: [
      { name: 'Docker', level: 85, color: '#2496ED' },
      { name: 'Kubernetes', level: 78, color: '#326CE5' },
      { name: 'AWS', level: 82, color: '#FF9900' },
      { name: 'Azure', level: 80, color: '#0078D4' },
      { name: 'Git', level: 90, color: '#F05032' },
      { name: 'JIRA', level: 85, color: '#0052CC' }
    ],
    dataml: [
      { name: 'TensorFlow', level: 82, color: '#FF6F00' },
      { name: 'PyTorch', level: 80, color: '#EE4C2C' },
      { name: 'Scikit-Learn', level: 85, color: '#F7931E' },
      { name: 'Pandas', level: 88, color: '#150458' },
      { name: 'NumPy', level: 88, color: '#013243' },
      { name: 'LLMs', level: 82, color: '#10A37F' },
      { name: 'Neural Networks', level: 80, color: '#8A2BE2' },
      { name: 'RabbitMQ', level: 75, color: '#FF6600' }
    ]
  };

  const interests = [
    { icon: '🏏', title: 'Cricket', desc: 'Love playing and watching cricket' },
    { icon: '⚽', title: 'Football', desc: 'Competitive spirit on the field' },
    { icon: '🏓', title: 'Table Tennis', desc: 'Quick reflexes and strategy' },
    { icon: '🎧', title: 'Tech Podcasts', desc: 'Stay updated with latest trends' },
    { icon: '📚', title: 'Learning', desc: 'Always exploring new technologies' },
    { icon: '🎮', title: 'Gaming', desc: 'Strategic thinking and fun' }
  ];

  const funFacts = [
    '🎓 Graduated with MS in Computer Science from UF',
    '🚀 Co-founded HyprClub - NFT marketplace',
    '🏆 Director\'s Achievement Award winner for Q3 2025',
    '💰 Achievement Award Scholarship - $4,500 savings during Master\'s program',
    '📚 30% tuition scholarship for high school + Letter of Appreciation for perfect 10/10 SGPA',
    '🌍 Contributed to projects across education, healthcare & tech sectors'
  ];

  return (
    <>
      <Breadcrumbs filename="about.html" />
    <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        {/* HTML Document */}
      <div className={styles.editorContent}>
        <div className={styles.htmlDocument}>
          
          {/* HTML Header */}
          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>1</span>
            <span className={styles.tag}>{'<!DOCTYPE '}</span>
            <span className={styles.tagName}>html</span>
            <span className={styles.tag}>{'>'}</span>
          </div>
          
          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>2</span>
            <span className={styles.tag}>{'<'}</span>
            <span className={styles.tagName}>html</span>
            <span className={styles.attribute}> lang</span>
            <span className={styles.operator}>=</span>
            <span className={styles.string}>"en"</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>3</span>
            <span className={styles.tag}>{'<'}</span>
            <span className={styles.tagName}>head</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>4</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'<'}</span>
            <span className={styles.tagName}>title</span>
            <span className={styles.tag}>{'>'}</span>
            <span className={styles.content}>Pratham Sharma - About Me</span>
            <span className={styles.tag}>{'</'}</span>
            <span className={styles.tagName}>title</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>5</span>
            <span className={styles.tag}>{'</'}</span>
            <span className={styles.tagName}>head</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>6</span>
            <span></span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>7</span>
            <span className={styles.tag}>{'<'}</span>
            <span className={styles.tagName}>body</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>8</span>
            <span className={styles.indent}>  </span>
            <span className={styles.comment}>{'<!-- Hero Section -->'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>9</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'<'}</span>
            <span className={styles.tagName}>section</span>
            <span className={styles.attribute}> id</span>
            <span className={styles.operator}>=</span>
            <span className={styles.string}>"hero"</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          {/* Hero Visual Section */}
      <div className={styles.heroSection}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <img src="/me.jpeg" alt="Pratham Sharma" className={styles.profileImage} />
            <div className={styles.imageGlow}></div>
          </div>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot}></span>
            Available for opportunities
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.codeComment}>// About me</div>
          <h1 className={styles.heroTitle}>
            <span className={styles.keyword}>const</span>{' '}
            <span className={styles.variable}>developer</span>{' '}
            <span className={styles.operator}>=</span>{' '}
            <span className={styles.string}>"Pratham Sharma"</span>
          </h1>
          <p className={styles.heroDescription}>
            A <span className={styles.highlight}>Full Stack Developer</span> and{' '}
            <span className={styles.highlight}>AI/ML Enthusiast</span> passionate about 
            building scalable, user-focused applications. Currently pursuing MS in Computer Science 
            at the <span className={styles.highlightYellow}>University of Florida</span>.
          </p>
        </div>
      </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>10</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'</'}</span>
            <span className={styles.tagName}>section</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>11</span>
            <span></span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>12</span>
            <span className={styles.indent}>  </span>
            <span className={styles.comment}>{'<!-- Skills Section -->'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>13</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'<'}</span>
            <span className={styles.tagName}>section</span>
            <span className={styles.attribute}> id</span>
            <span className={styles.operator}>=</span>
            <span className={styles.string}>"skills"</span>
            <span className={styles.attribute}> class</span>
            <span className={styles.operator}>=</span>
            <span className={styles.string}>"tech-skills"</span>
            <span className={styles.tag}>{'>'}</span>
      </div>

      {/* Skills Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>{'<skills>'}</span>
          <h2 className={styles.sectionTitle}>Technical Expertise</h2>
        </div>

        <div className={styles.skillsCategory}>
          <button
            className={`${styles.categoryBtn} ${activeSkillCategory === 'languages' ? styles.active : ''}`}
            onClick={() => setActiveSkillCategory('languages')}
          >
            Programming Languages
          </button>
          <button
            className={`${styles.categoryBtn} ${activeSkillCategory === 'technologies' ? styles.active : ''}`}
            onClick={() => setActiveSkillCategory('technologies')}
          >
            Technologies
          </button>
          <button
            className={`${styles.categoryBtn} ${activeSkillCategory === 'cloud' ? styles.active : ''}`}
            onClick={() => setActiveSkillCategory('cloud')}
          >
            Cloud & DevOps
          </button>
          <button
            className={`${styles.categoryBtn} ${activeSkillCategory === 'dataml' ? styles.active : ''}`}
            onClick={() => setActiveSkillCategory('dataml')}
          >
            Data/ML
          </button>
        </div>

        <div className={styles.skillsGrid}>
          {skills[activeSkillCategory].map((skill, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.skillHeader}>
                <span className={styles.skillName}>{skill.name}</span>
                <span className={styles.skillPercent}>{skill.level}%</span>
              </div>
              <div className={styles.skillBar}>
                <div 
                  className={styles.skillProgress}
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.sectionFooter}>
          <span className={styles.tag}>{'</skills>'}</span>
        </div>
      </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>14</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'</'}</span>
            <span className={styles.tagName}>section</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>15</span>
            <span></span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>16</span>
            <span className={styles.indent}>  </span>
            <span className={styles.comment}>{'<!-- Journey Section -->'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>17</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'<'}</span>
            <span className={styles.tagName}>section</span>
            <span className={styles.attribute}> id</span>
            <span className={styles.operator}>=</span>
            <span className={styles.string}>"journey"</span>
            <span className={styles.tag}>{'>'}</span>
      </div>

      {/* Journey Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>{'<journey>'}</span>
          <h2 className={styles.sectionTitle}>My Journey</h2>
        </div>

        <div className={styles.journeyContent}>
          <p className={styles.journeyText}>
            Over the years, I've gained hands-on experience developing{' '}
            <span className={styles.highlight}>full-stack platforms</span>, optimizing{' '}
            <span className={styles.highlight}>backend systems</span>, and integrating{' '}
            <span className={styles.highlight}>ML-driven features</span> into production applications.
          </p>

          <p className={styles.journeyText}>
            I love working across the entire stack—from designing intuitive interfaces 
            to architecting robust APIs and backend pipelines. My curiosity for{' '}
            <span className={styles.highlight}>Machine Learning</span> drives me to experiment 
            with predictive modeling, data engineering workflows, and AI-powered automation.
          </p>

          <p className={styles.journeyText}>
            I believe in engineering solutions that are not only technically strong but also{' '}
            <span className={styles.highlightGreen}>accessible</span>,{' '}
            <span className={styles.highlightGreen}>impactful</span>, and crafted with attention to user experience.
          </p>
        </div>

        <div className={styles.sectionFooter}>
          <span className={styles.tag}>{'</journey>'}</span>
        </div>
      </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>18</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'</'}</span>
            <span className={styles.tagName}>section</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>19</span>
            <span></span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>20</span>
            <span className={styles.indent}>  </span>
            <span className={styles.comment}>{'<!-- Interests Section -->'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>21</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'<'}</span>
            <span className={styles.tagName}>section</span>
            <span className={styles.attribute}> id</span>
            <span className={styles.operator}>=</span>
            <span className={styles.string}>"interests"</span>
            <span className={styles.tag}>{'>'}</span>
      </div>

      {/* Interests Section */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>{'<interests>'}</span>
          <h2 className={styles.sectionTitle}>Beyond Code</h2>
        </div>

        <div className={styles.interestsGrid}>
          {interests.map((interest, index) => (
            <div 
              key={index} 
              className={styles.interestCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className={styles.interestIcon}>{interest.icon}</span>
              <h3 className={styles.interestTitle}>{interest.title}</h3>
              <p className={styles.interestDesc}>{interest.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.sectionFooter}>
          <span className={styles.tag}>{'</interests>'}</span>
        </div>
      </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>22</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'</'}</span>
            <span className={styles.tagName}>section</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>23</span>
            <span></span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>24</span>
            <span className={styles.indent}>  </span>
            <span className={styles.comment}>{'<!-- Fun Facts -->'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>25</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'<'}</span>
            <span className={styles.tagName}>section</span>
            <span className={styles.attribute}> id</span>
            <span className={styles.operator}>=</span>
            <span className={styles.string}>"facts"</span>
            <span className={styles.tag}>{'>'}</span>
      </div>

      {/* Fun Facts */}
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.tag}>{'<fun_facts>'}</span>
          <h2 className={styles.sectionTitle}>Quick Facts</h2>
        </div>

        <div className={styles.factsGrid}>
          {funFacts.map((fact, index) => (
            <div 
              key={index} 
              className={styles.factCard}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {fact}
            </div>
          ))}
        </div>

        <div className={styles.sectionFooter}>
          <span className={styles.tag}>{'</fun_facts>'}</span>
        </div>
      </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>26</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'</'}</span>
            <span className={styles.tagName}>section</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>27</span>
            <span></span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>28</span>
            <span className={styles.indent}>  </span>
            <span className={styles.comment}>{'<!-- Call to Action -->'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>29</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'<'}</span>
            <span className={styles.tagName}>footer</span>
            <span className={styles.tag}>{'>'}</span>
      </div>

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <p className={styles.ctaText}>
          I'm always excited to connect with like-minded individuals, collaborate on innovative ideas, 
          or contribute to projects that push technological boundaries.
        </p>
        <p className={styles.ctaSubtext}>
          <span className={styles.keyword}>if</span> (you.have === <span className={styles.string}>"exciting opportunity"</span>) {'{'}<br/>
          &nbsp;&nbsp;<span className={styles.keyword}>return</span> <span className={styles.string}>"Let's connect!"</span>;<br/>
          {'}'}
        </p>
      </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>30</span>
            <span className={styles.indent}>  </span>
            <span className={styles.tag}>{'</'}</span>
            <span className={styles.tagName}>footer</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>31</span>
            <span></span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>32</span>
            <span className={styles.tag}>{'</'}</span>
            <span className={styles.tagName}>body</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

          <div className={styles.htmlLine}>
            <span className={styles.lineNumber}>33</span>
            <span className={styles.tag}>{'</'}</span>
            <span className={styles.tagName}>html</span>
            <span className={styles.tag}>{'>'}</span>
          </div>

        </div>
      </div>

      {/* VS Code Status Bar */}
      <div className={styles.statusBar}>
        <div className={styles.statusLeft}>
          <span className={styles.statusItem}>
            <span className={styles.statusIcon}>🌐</span>
            HTML
          </span>
          <span className={styles.statusItem}>
            <span className={styles.statusIcon}>✓</span>
            No Issues
          </span>
        </div>
        <div className={styles.statusRight}>
          <span className={styles.statusItem}>UTF-8</span>
          <span className={styles.statusItem}>LF</span>
          <span className={styles.statusItem}>Ln 33, Col 7</span>
        </div>
      </div>
    </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
