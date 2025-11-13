import styles from '../styles/About.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      {/* Text Section with more growth on flex-grow */}
      <div className={styles.textSection}>
        <p><span style={{ color: '#2c9ffe' }}>{'<h3>'}</span> A Little Bit About Me <span style={{ color: '#2c9ffe' }}>{'</h3>'}</span></p>
        <br/>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'<p>'}</p>
        <p style={{ marginLeft: '20px' }}>
          Hi! I'm <span style={{ color: 'lightcoral' }}>Pratham Sharma</span>, a <span style={{ color: '#c586c0' }}>Full Stack Developer</span> and Master's student in Computer Science at the <span style={{ color: 'yellow' }}>University of Florida</span> (graduating December 2024). 
          I'm passionate about building <span style={{ color: 'green' }}>scalable, user-focused applications</span> and exploring the intersection of <span style={{ color: '#c586c0' }}>software engineering</span>, <span style={{ color: 'green' }}>machine learning</span>, and <span style={{ color: '#c586c0' }}>intelligent automation</span>. 
          I believe in engineering solutions that are not only technically strong but also accessible, impactful, and crafted with attention to user experience.
        </p>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'</p>'}</p>

        <br/>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'<p>'}</p>
        <p style={{ marginLeft: '20px' }}>
          Over the years, I've gained hands-on experience developing full-stack platforms, optimizing backend systems, and integrating ML-driven features into production applications. 
          I love working across the entire stack—whether it's designing intuitive interfaces with <span style={{ color: '#c586c0' }}>React</span>, <span style={{ color: '#c586c0' }}>Next.js</span>, and <span style={{ color: 'green' }}>TypeScript</span>, 
          or architecting robust APIs and backend pipelines using <span style={{ color: 'green' }}>Node.js</span>, <span style={{ color: '#c586c0' }}>Django</span>, <span style={{ color: 'green' }}>PostgreSQL</span>, and <span style={{ color: '#c586c0' }}>MongoDB</span>. 
          My curiosity for Machine Learning drives me to experiment with predictive modeling, data engineering workflows, and AI-powered automation to solve complex real-world problems.
        </p>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'</p>'}</p>

        <br/>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'<p>'}</p>
        <p style={{ marginLeft: '20px' }}>
          I've had the opportunity to contribute to diverse projects ranging from accessibility automation and simulation research to building complete full-stack products from the ground up. 
          These experiences have taught me the importance of clean architecture, strong collaboration, and building systems that can scale with real users in mind.
        </p>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'</p>'}</p>

        <br/>
        <p><span style={{ color: '#2c9ffe' }}>&lt;p</span> <span style={{ color: 'lightskyblue' }}>class</span>=<span style={{ color: 'orange' }}>"interests"</span><span style={{ color: '#2c9ffe' }}>&gt;</span></p>
        <p style={{ marginLeft: '20px' }}>
          Outside of tech, I'm an avid sports enthusiast with a competitive spirit. I love playing <span style={{ color: 'lightcoral' }}>cricket</span>, <span style={{ color: 'lightcoral' }}>football</span>, and <span style={{ color: 'lightcoral' }}>table tennis</span>, which help me stay active and balanced. 
          I also enjoy listening to tech podcasts, where I keep up with the latest trends in AI, software development, product design, and emerging innovations. 
          These conversations often spark new ideas and inspire the way I approach engineering challenges.
        </p>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'</p>'}</p>

        <br/>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'<p>'}</p>
        <p style={{ marginLeft: '20px' }}>
          I'm always excited to connect with like-minded individuals, collaborate on innovative ideas, or contribute to projects that push technological boundaries. 
          If you're working on something exciting or looking for someone passionate about full-stack development and machine learning—let's connect!
        </p>
        <p style={{ color: '#2c9ffe', textAlign: 'left' }}>{'</p>'}</p>
      </div>
      
      
      {/* Image Section with less growth on flex-grow */}
      <div className={styles.imageSection}>
        <img src="/me.jpeg" alt="Pratham Sharma" style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
