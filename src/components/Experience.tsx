import { FC } from 'react';
import { Section } from './Section';
import { ExperienceSchema, JobSchema } from '../resume';

export const Experience: FC<ExperienceSchema> = ({ jobs }) => {
  return (
    <Section title='Experience'>
      <>
        {jobs.map((job) => (
          <JobSection key={job.company} {...job} />
        ))}
      </>
    </Section>
  );
};

export const JobSection: FC<JobSchema> = ({
  company,
  location,
  roles = [],
}) => {
  return (
    <div className='job-section'>
      <div className='job-company'>
        <span>{company}</span> - {location}
      </div>
      {roles.map(({ title, dates, bullets }, i) => (
        <div key={i} className='job-role'>
          <div>
            <div className='job-role-title'>{title}</div>
            <div className='job-role-dates'>
              {dates.from} - {dates.to}
            </div>
          </div>
          <ul>
            {bullets.map((bullet, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: bullet }} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
