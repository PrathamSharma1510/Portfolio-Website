import { useState, useEffect } from 'react';
import Image from 'next/image';
import GitHubCalendar from 'react-github-calendar';
import RepoCard from '../components/RepoCard';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from '../styles/GithubPage.module.css';

const GithubPage = ({ repos, user, stats }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const theme = {
    level0: '#161B22',
    level1: '#0e4429',
    level2: '#006d32',
    level3: '#26a641',
    level4: '#39d353',
  };

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}>
          <div className={styles.githubLogo}>
            <svg height="64" viewBox="0 0 16 16" width="64" className={styles.spinningLogo}>
              <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </div>
          <div className={styles.loaderText}>Loading GitHub Profile...</div>
          <div className={styles.loaderBar}>
            <div className={styles.loaderProgress}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumbs filename="github.md" />
      <div className={styles.pageContainer}>
        {/* User Profile Header */}
        <div className={styles.profileHeader}>
        <div className={styles.profileInfo}>
          <div className={styles.avatarWrapper}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={100}
              height={100}
            />
          </div>
          <div className={styles.userDetails}>
            <h1 className={styles.username}>{user.name || user.login}</h1>
            <p className={styles.bio}>{user.bio}</p>
            <div className={styles.profileLinks}>
              {user.location && <span>📍 {user.location}</span>}
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Stats */}
      <div className={styles.statsGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>📦</div>
          <div className={styles.statValue}>{user.public_repos}</div>
          <div className={styles.statLabel}>Repositories</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>👥</div>
          <div className={styles.statValue}>{user.followers}</div>
          <div className={styles.statLabel}>Followers</div>
        </div>
        <div className={styles.statCard}>
          <div className={styles.statIcon}>👤</div>
          <div className={styles.statValue}>{user.following}</div>
          <div className={styles.statLabel}>Following</div>
        </div>
      </div>

      {/* Language Stats */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.icon}>💻</span>
          Top Languages
        </h2>
        <div className={styles.languageGrid}>
          {stats.languages.slice(0, 6).map((lang, index) => (
            <div key={index} className={styles.languageCard}>
              <div className={styles.languageName}>{lang.name}</div>
              <div className={styles.languageBar}>
                <div 
                  className={styles.languageProgress}
                  style={{ 
                    width: `${lang.percentage}%`,
                    backgroundColor: lang.color || '#667eea'
                  }}
                ></div>
              </div>
              <div className={styles.languagePercentage}>{lang.percentage.toFixed(1)}%</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Repositories */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.icon}>🚀</span>
          Featured Projects
        </h2>
        <div className={styles.pinnedRepos}>
          {repos.length > 0 ? (
            repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))
          ) : (
            <div className={styles.noRepos}>
              <p>No repositories found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Contribution Calendar */}
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.icon}>📊</span>
          Contribution Activity
        </h2>
        <div className={styles.contributions}>
          <GitHubCalendar
            username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
            theme={theme}
            hideColorLegend={false}
            hideMonthLabels={false}
          />
        </div>
      </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'PrathamSharma1510';
  const token = process.env.GITHUB_API_KEY;

  try {
    // Build headers conditionally
    const headers = token ? { Authorization: `token ${token}` } : {};

    console.log('Fetching GitHub data for:', username);
    console.log('Using API token:', token ? 'Yes' : 'No');

    // Fetch user data
    const userRes = await fetch(
      `https://api.github.com/users/${username}`,
      { headers }
    );
    
    if (!userRes.ok) {
      console.error('User API Error:', userRes.status, userRes.statusText);
    }
    
    const user = await userRes.json();
    console.log('User data:', user.login, 'Repos:', user.public_repos);

    // Fetch specific repositories
    const specificRepos = [
      { owner: 'PrathamSharma1510', name: 'Feedback_Nexus' },
      { owner: 'PrathamSharma1510', name: 'norman_pd_incident_data_pipeline_and_visualization' },
      { owner: 'PrathamSharma1510', name: 'ADS' },
      { owner: 'PrathamSharma1510', name: 'MLE_project' },
      { owner: 'PrathamSharma1510', name: 'NLP-Project' },
      { owner: 'archit0712', name: 'social13' }
    ];

    let repos = [];
    
    try {
      // Fetch each specific repository
      const repoPromises = specificRepos.map(({ owner, name }) =>
        fetch(`https://api.github.com/repos/${owner}/${name}`, { headers })
          .then(res => res.ok ? res.json() : null)
          .catch(() => null)
      );

      const repoResults = await Promise.all(repoPromises);
      repos = repoResults.filter(repo => repo !== null);
      
      console.log('Fetched specific repos:', repos.length);
    } catch (error) {
      console.error('Error fetching specific repos:', error.message);
    }

    // Calculate stats
    const stats = {
      totalStars: repos.reduce((acc, repo) => acc + repo.stargazers_count, 0),
      totalForks: repos.reduce((acc, repo) => acc + repo.forks_count, 0),
      languages: []
    };

    // Calculate language stats from all repos
    const repoResAll = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      { headers }
    );
    const allRepos = await repoResAll.json();
    
    if (Array.isArray(allRepos)) {
      const languageCounts = {};
      let totalBytes = 0;
      
      // Count language usage
      for (const repo of allRepos) {
        if (repo.language && !repo.fork) {
          languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
          totalBytes += repo.size || 1;
        }
      }
      
      // Convert to percentage
      stats.languages = Object.entries(languageCounts)
        .map(([name, count]) => ({
          name,
          count,
          percentage: (count / allRepos.filter(r => !r.fork && r.language).length) * 100,
          color: getLanguageColor(name)
        }))
        .sort((a, b) => b.count - a.count);
    }

    return {
      props: { title: 'GitHub', repos, user, stats },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching GitHub data:', error.message);
    return {
      props: { 
        title: 'GitHub', 
        repos: [], 
        user: {
          login: username,
          avatar_url: '/github-dark.png',
          public_repos: 0,
          followers: 0,
          following: 0,
          bio: '',
          location: '',
          blog: ''
        },
        stats: {
          totalStars: 0,
          totalForks: 0,
          languages: []
        }
      },
      revalidate: 60,
    };
  }
}

// Helper function to get language colors
function getLanguageColor(language) {
  const colors = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    Python: '#3572A5',
    Java: '#b07219',
    'C++': '#f34b7d',
    C: '#555555',
    'C#': '#178600',
    PHP: '#4F5D95',
    Ruby: '#701516',
    Go: '#00ADD8',
    Rust: '#dea584',
    Swift: '#ffac45',
    Kotlin: '#F18E33',
    Dart: '#00B4AB',
    HTML: '#e34c26',
    CSS: '#563d7c',
    Shell: '#89e051',
    Vue: '#2c3e50',
    Jupyter: '#DA5B0B',
  };
  return colors[language] || '#667eea';
}

export default GithubPage;
