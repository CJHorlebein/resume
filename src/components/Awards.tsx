import { Section } from './Section';

export const Awards = ({ body }) => {
  return (
    <Section title='Awards'>
      <>
        {body.map((award) => (
          <div key={award.content}>
            {award.content} (<i>{award.date})</i>
          </div>
        ))}
      </>
    </Section>
  );
};
