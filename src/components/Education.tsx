import { Section } from './Section';

export const Education = ({ schools }) => {
  return (
    <Section title='Education'>
      <>
        {schools.map((school) => (
          <SchoolSection key={school.name} {...school} />
        ))}
      </>
    </Section>
  );
};

const SchoolSection = ({ name, degree, field, date, gpa, address }) => {
  return (
    <div className='school-section'>
      <i>{date}</i>
      <p>
        <b>{degree}</b>: {field}
      </p>
      <p>
        {name}, {address}
      </p>
    </div>
  );
};
