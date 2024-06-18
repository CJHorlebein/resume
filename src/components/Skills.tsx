import { Section } from './Section';

export const Skills = ({ technologies }) => {
  return (
    <div className='skills-container'>
      <Section title='Skills'>
        <div className='bullets'>
          <ul className='skill-list'>
            {technologies.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
};
