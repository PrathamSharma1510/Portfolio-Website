import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import ExperienceCard from '../components/ExperienceCard';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from '../styles/ExperiencePage.module.css';

const fetcher = url => fetch(url).then(res => res.json());

const ExperiencePage = () => {
  const { data: experiences, error } = useSWR('/api/experience', fetcher);
  const [filteredExperiences, setFilteredExperiences] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (experiences) {
      let filtered = [...experiences];

      // Apply filter
      if (selectedFilter !== 'All') {
        filtered = filtered.filter(exp => exp.type === selectedFilter);
      }

      // Apply sort
      if (sortOrder === 'oldest') {
        filtered = filtered.reverse();
      }

      setFilteredExperiences(filtered);
    }
  }, [experiences, selectedFilter, sortOrder]);

  if (error) return <div className={styles.errorMessage}>Failed to load experiences</div>;
  if (!experiences) return <div className={styles.loadingMessage}>Loading your journey...</div>;

  const filters = ['All', 'Full-time', 'Internship', 'Research', 'Founder', 'Teaching'];
  
  const stats = {
    total: experiences.length,
    companies: new Set(experiences.map(exp => exp.company)).size
  };

  return (
    <>
      <Breadcrumbs filename="experience.json" />
    <div className={`${styles.experienceContainer} ${isVisible ? styles.visible : ''}`}>
      {/* Stats Section */}
      <div className={styles.statsSection}>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>{stats.total}</div>
          <div className={styles.statLabel}>Total Roles</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statNumber}>{stats.companies}</div>
          <div className={styles.statLabel}>Organizations</div>
        </div>
      </div>

      {/* Filter and Sort Controls */}
      <div className={styles.controlsSection}>
        <div className={styles.filtersContainer}>
          <span className={styles.controlLabel}>Filter by:</span>
          <div className={styles.filterButtons}>
            {filters.map(filter => (
              <button
                key={filter}
                className={`${styles.filterButton} ${selectedFilter === filter ? styles.active : ''}`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.sortContainer}>
          <span className={styles.controlLabel}>Sort:</span>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className={styles.sortSelect}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {/* Results Count */}
      <div className={styles.resultsCount}>
        Showing {filteredExperiences.length} of {experiences.length} experiences
      </div>

      {/* Timeline */}
      <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)" animate={true}>
        {filteredExperiences.map((experience, index) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </VerticalTimeline>

      {filteredExperiences.length === 0 && (
        <div className={styles.noResults}>
          <p>No experiences found for this filter.</p>
          <button onClick={() => setSelectedFilter('All')} className={styles.resetButton}>
            Show All
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Experience' },
  };
}

export default ExperiencePage;
