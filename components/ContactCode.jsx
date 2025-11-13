import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'sharmapratham1510@gmail.com',
    href: 'mailto:sharmapratham1510@gmail.com',
    icon: '📧',
    color: '#EA4335'
  },
  {
    social: 'Phone',
    link: '+1 (352) 328-0436',
    href: 'tel:+13523280436',
    icon: '📱',
    color: '#34A853'
  },
  {
    social: 'GitHub',
    link: 'PrathamSharma1510',
    href: 'https://github.com/PrathamSharma1510',
    icon: '💻',
    color: '#181717'
  },
  {
    social: 'LinkedIn',
    link: 'pratham-sharma',
    href: 'https://www.linkedin.com/in/pratham-sharma-9a15271b7/',
    icon: '💼',
    color: '#0A66C2'
  },
];

const ContactCode = () => {
  return (
    <div className={styles.socialCards}>
      {contactItems.map((item, index) => (
        <a 
          key={index}
          href={item.href} 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.socialCard}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className={styles.cardIcon} style={{ backgroundColor: `${item.color}20`, borderColor: `${item.color}60` }}>
            <span style={{ filter: 'grayscale(0)' }}>{item.icon}</span>
          </div>
          <div className={styles.cardContent}>
            <div className={styles.socialName}>{item.social}</div>
            <div className={styles.socialLink}>{item.link}</div>
          </div>
          <div className={styles.cardArrow}>→</div>
        </a>
      ))}
    </div>
  );
};

export default ContactCode;
