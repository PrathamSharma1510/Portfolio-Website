import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import useSWR from 'swr';
import EducationCard from '../components/EducationCard';

const fetcher = url => fetch(url).then(res => res.json());

const EducationPage = () => {
  const { data: educations, error } = useSWR('/api/education', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!educations) return <div>Loading...</div>;

  return (
    <VerticalTimeline>
      {educations.map((education) => (
        <EducationCard key={education.id} education={education} />
      ))}
    </VerticalTimeline>
  );
};
export async function getStaticProps() {
    return {
      props: { title: 'Education' },
    };
  }

export default EducationPage;
