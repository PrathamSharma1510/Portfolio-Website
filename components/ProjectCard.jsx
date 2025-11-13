import styles from '../styles/ProjectCard.module.css';

const ProjectCard = ({ project, index }) => {
  return (
    <div 
      className={styles.card}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Project Content */}
      <div className={styles.content}>
        {/* Header with live badge */}
        <div className={styles.header}>
          <h3 className={styles.title}>{project.name}</h3>
          {project.demo && (
            <div className={styles.liveBadge}>
              <span className={styles.liveDot}></span>
              Live
            </div>
          )}
        </div>
        
        <p className={styles.description}>{project.description}</p>
        
        {/* Tags */}
        <div className={styles.tags}>
          {project.tags.slice(0, 5).map((tag, i) => (
            <span key={tag} className={styles.tag} style={{ animationDelay: `${i * 0.1}s` }}>
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className={styles.tag} style={{ animationDelay: '0.5s' }}>
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className={styles.actions}>
          {project.source_code && (
            <a
              href={project.source_code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <span className={styles.buttonIcon}>💻</span>
              Source Code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.primaryButton}`}
            >
              <span className={styles.buttonIcon}>🚀</span>
              Live Demo
            </a>
          )}
          {project.paper && (
            <a
              href={project.paper}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              <span className={styles.buttonIcon}>📄</span>
              Paper
            </a>
          )}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className={styles.glow}></div>
    </div>
  );
};

export default ProjectCard;
