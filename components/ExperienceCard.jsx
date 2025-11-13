import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/ExperienceCard.module.css';

const getRoleIcon = (type) => {
  const icons = {
    'Full-time': '💼',
    'Internship': '🎓',
    'Research': '🔬',
    'Founder': '🚀',
    'Teaching': '👨‍🏫'
  };
  return icons[type] || '💼';
};

const ExperienceCard = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongDescription = experience.description && experience.description.length > 200;
  
  const displayDescription = isExpanded || !isLongDescription 
    ? experience.description 
    : experience.description.substring(0, 200) + '...';

  const isPresentRole = experience.date.includes('Present');

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--work ${styles.timelineElement}`}
      contentStyle={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${experience.iconBg}20`,
        color: '#e0e0e0',
        boxShadow: `0 10px 30px -5px ${experience.iconBg}30`,
        borderRadius: '16px',
        transition: 'all 0.3s ease'
      }}
      contentArrowStyle={{ borderRight: `7px solid ${experience.iconBg}40` }}
      date={(
        <div className={`${styles.dateStyle} ${isPresentRole ? styles.pulseDate : ''}`}>
          {experience.date}
        </div>
      )}
      iconStyle={{ 
        background: experience.iconBg, 
        color: '#fff',
        boxShadow: `0 0 20px ${experience.iconBg}80`,
        border: '4px solid var(--article-bg-color)',
        transition: 'all 0.3s ease'
      }}
      icon={
        <div className={styles.iconContainer}>
          <Image 
            src={experience.icon} 
            alt={experience.company} 
            layout="fill" 
            objectFit="contain" 
            className={styles.iconSpan} 
          />
        </div>
      }
    >
      <div className={styles.cardHeader}>
        <div>
          <h3 className={styles.cardTitle}>
            <span className={styles.roleIcon}>{getRoleIcon(experience.type)}</span>
            {experience.title}
          </h3>
          <h4 className={styles.cardSubtitle}>{experience.company}</h4>
        </div>
        {experience.type && (
          <span className={styles.roleTypeBadge} style={{ borderColor: experience.iconBg, color: experience.iconBg }}>
            {experience.type}
          </span>
        )}
      </div>

      {/* Highlights Section */}
      {experience.highlights && experience.highlights.length > 0 && (
        <div className={styles.highlightsContainer}>
          {experience.highlights.map((highlight, index) => (
            <span key={index} className={styles.highlightBadge}>
              {highlight}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className={styles.description}>{displayDescription}</p>
      
      {isLongDescription && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)} 
          className={styles.readMoreBtn}
          style={{ color: experience.iconBg }}
        >
          {isExpanded ? '↑ Show less' : '↓ Read more'}
        </button>
      )}

      {/* Tech Stack */}
      {experience.techStack && experience.techStack.length > 0 && (
        <div className={styles.techStackContainer}>
          {experience.techStack.map((tech, index) => (
            <span 
              key={index} 
              className={styles.techBadge}
              style={{ 
                backgroundColor: `${experience.iconBg}20`,
                borderColor: `${experience.iconBg}60`,
                color: experience.iconBg
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;