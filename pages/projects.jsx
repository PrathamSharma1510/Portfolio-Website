import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from '../styles/ProjectsPage.module.css';

const ProjectsPage = ({ projects }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get unique technologies from all projects
  const allTags = [...new Set(projects.flatMap(p => p.tags))];
  const categories = ['All', 'AI/ML', 'Web Dev', 'Data Structures', 'Full Stack'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => {
        if (filter === 'AI/ML') return project.tags.some(tag => 
          ['NLP', 'Machine Learning', 'Deep Learning', 'AI', 'GPT-2', 'GPT-3.5', 'GPT-4', 'OpenAI', 'Computer Vision', 'LSTM'].includes(tag)
        );
        if (filter === 'Web Dev') return project.tags.some(tag => 
          ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Web Development'].includes(tag)
        );
        if (filter === 'Data Structures') return project.tags.some(tag => 
          ['Data Structures', 'Algorithms', 'Red-Black Tree', 'Binary Min-Heap'].includes(tag)
        );
        if (filter === 'Full Stack') return project.tags.some(tag => 
          ['Next.js', 'MongoDB', 'Django', 'PostgreSQL', 'Full Stack'].includes(tag)
        );
        return true;
      });

  return (
    <>
      <Breadcrumbs filename="projects.js" />
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        {/* JavaScript Document */}
        <div className={styles.editorContent}>
          <div className={styles.jsDocument}>
            
            {/* Line 1: Comment */}
            <div className={styles.jsLine}>
              <span className={styles.lineNumber}>1</span>
              <span className={styles.comment}>// Portfolio Projects - Showcasing Innovation & Technical Excellence</span>
            </div>

            {/* Line 2: Empty */}
            <div className={styles.jsLine}>
              <span className={styles.lineNumber}>2</span>
              <span></span>
            </div>

            {/* Line 3-5: Class declaration */}
            <div className={styles.jsLine}>
              <span className={styles.lineNumber}>3</span>
              <span className={styles.keyword}>class</span>
              <span> </span>
              <span className={styles.className}>ProjectPortfolio</span>
              <span> {'{'}</span>
            </div>

            <div className={styles.jsLine}>
              <span className={styles.lineNumber}>4</span>
              <span className={styles.indent}>  </span>
              <span className={styles.keyword}>constructor</span>
              <span>() {'{'}</span>
            </div>

            <div className={styles.jsLine}>
              <span className={styles.lineNumber}>5</span>
              <span className={styles.indent}>    </span>
              <span className={styles.keyword}>this</span>
              <span>.</span>
              <span className={styles.property}>totalProjects</span>
              <span> = </span>
              <span className={styles.number}>{projects.length}</span>
              <span>;</span>
            </div>

            <div className={styles.jsLine}>
              <span className={styles.lineNumber}>6</span>
              <span className={styles.indent}>    </span>
              <span className={styles.keyword}>this</span>
              <span>.</span>
              <span className={styles.property}>technologies</span>
              <span> = </span>
              <span className={styles.number}>{allTags.length}</span>
              <span>;</span>
            </div>

            <div className={styles.jsLine}>
              <span className={styles.lineNumber}>7</span>
              <span className={styles.indent}>  </span>
              <span>{'}'}</span>
            </div>

            <div className={styles.jsLine}>
              <span className={styles.lineNumber}>8</span>
              <span>{'}'}</span>
            </div>

            {/* Line 9: Empty */}
            <div className={styles.jsLine}>
              <span className={styles.lineNumber}>9</span>
              <span></span>
            </div>

            {/* Line 10: Comment for filter */}
            <div className={styles.jsLine}>
              <span className={styles.lineNumber}>10</span>
              <span className={styles.comment}>// Filter Projects by Category</span>
            </div>

            {/* Filter Section */}
            <div className={styles.filterSection}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.filterButton} ${filter === category ? styles.activeFilter : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Line 11: Comment for projects */}
            <div className={styles.jsLine}>
              <span className={styles.lineNumber}>11</span>
              <span className={styles.comment}>// Rendering {filteredProjects.length} {filter !== 'All' ? filter : ''} Projects</span>
            </div>

            {/* Projects Grid */}
            <div className={styles.projectsGrid}>
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>

            {/* Empty state */}
            {filteredProjects.length === 0 && (
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🔍</div>
                <p>No projects found in this category.</p>
              </div>
            )}

          </div>
        </div>

        {/* Status Bar */}
        <div className={styles.statusBar}>
          <div className={styles.statusLeft}>
            <span className={styles.statusItem}>
              <span className={styles.statusIcon}>📁</span>
              projects.js
            </span>
            <span className={styles.statusItem}>
              <span className={styles.statusIcon}>✓</span>
              {filteredProjects.length} items
            </span>
          </div>
          <div className={styles.statusRight}>
            <span className={styles.statusItem}>UTF-8</span>
            <span className={styles.statusItem}>JavaScript</span>
            <span className={styles.statusItem}>Ln 11, Col 1</span>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
