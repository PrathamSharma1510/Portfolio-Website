import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useSWR from 'swr';
import ExperienceCard from '../components/ExperienceCard';  // Import ExperienceCard component

const fetcher = url => fetch(url).then(res => res.json());

const ExperiencePage = () => {
  const { data: experiences, error } = useSWR('/api/experience', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!experiences) return <div>Loading...</div>;

  return (
    <VerticalTimeline>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} experience={experience} />
      ))}
    </VerticalTimeline>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Experience' },
  };
}


export default ExperiencePage;
