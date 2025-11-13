import Link from 'next/link';
import { useState, useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  const [displayedRole, setDisplayedRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    'Software Developer',
    'Full Stack Engineer',
    'AI/ML Enthusiast',
    'Problem Solver',
    'Tech Innovator'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    if (!isDeleting && charIndex === currentRole.length) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedRole(currentRole.substring(0, charIndex + (isDeleting ? -1 : 1)));
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  const quickStats = [
    { label: 'Experience', value: '2+', unit: 'Years' },
    { label: 'Projects', value: '10+', unit: 'Completed' },
    { label: 'Technologies', value: '10+', unit: 'Mastered' }
  ];

  const highlights = [
    { icon: '🏆', text: 'Director\'s Achievement Award Winner Q3 2025' },
    { icon: '🎓', text: 'MS in Computer Science @ UF' },
    { icon: '🚀', text: 'Full Stack AI Engineer' }
  ];

  return (
    <>
      <Breadcrumbs filename="home.jsx" />
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        {/* Animated Background */}
        <div className={styles.backgroundPattern}>
          <div className={styles.grid}></div>
        </div>

        {/* Main Hero Section */}
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            {/* Terminal Header */}
            <div className={styles.terminalHeader}>
              <div className={styles.terminalDots}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
              <span className={styles.terminalTitle}>pratham@portfolio:~</span>
            </div>

            {/* Main Content */}
            <div className={styles.mainContent}>
              <div className={styles.greeting}>
                <span className={styles.prompt}>$</span> <span className={styles.command}>whoami</span>
              </div>
              
              <h1 className={styles.name}>
                <span className={styles.nameGradient}>Pratham Sharma</span>
              </h1>
              
              <div className={styles.roleContainer}>
                <span className={styles.roleLabel}>{'<'}</span>
                <h2 className={styles.role}>
                  {displayedRole}
                  <span className={styles.cursor}>|</span>
                </h2>
                <span className={styles.roleLabel}>{'/>'}</span>
              </div>

              <p className={styles.tagline}>
                Building scalable applications and intelligent solutions that make a difference
              </p>

              {/* CTA Buttons */}
              <div className={styles.ctaContainer}>
                <Link href="/projects">
                  <button className={styles.primaryButton}>
                    <span className={styles.buttonIcon}>💼</span>
                    View My Work
                  </button>
                </Link>
                <Link href="/contact">
                  <button className={styles.secondaryButton}>
                    <span className={styles.buttonIcon}>📧</span>
                    Get in Touch
                  </button>
                </Link>
                <Link href="/resume">
                  <button className={styles.ghostButton}>
                    <span className={styles.buttonIcon}>📄</span>
                    Resume
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className={styles.statsContainer}>
            {quickStats.map((stat, index) => (
              <div 
                key={index} 
                className={styles.statCard}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
                <div className={styles.statUnit}>{stat.unit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlights Section */}
        <div className={styles.highlightsSection}>
          <div className={styles.highlightsGrid}>
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className={styles.highlightCard}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <span className={styles.highlightIcon}>{highlight.icon}</span>
                <span className={styles.highlightText}>{highlight.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <Link href="/experience">
            <div className={styles.quickLink}>
              <span className={styles.linkIcon}>💼</span>
              <span className={styles.linkText}>Experience</span>
            </div>
          </Link>
          <Link href="/education">
            <div className={styles.quickLink}>
              <span className={styles.linkIcon}>🎓</span>
              <span className={styles.linkText}>Education</span>
            </div>
          </Link>
          <Link href="/github">
            <div className={styles.quickLink}>
              <span className={styles.linkIcon}>💻</span>
              <span className={styles.linkText}>GitHub</span>
            </div>
          </Link>
        </div>

        {/* Status Card */}
        <div className={styles.statusBar}>
          <span className={styles.statusItem}>
            <span className={styles.statusDot}></span>
            Available for opportunities
          </span>
          <span className={styles.statusItem}>📍 Gainesville, FL</span>
          <span className={styles.statusItem}>⚡ Full Stack & AI/ML</span>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
