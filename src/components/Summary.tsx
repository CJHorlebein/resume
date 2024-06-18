import { Section } from './Section';

export const Summary = ({ body }) => {
  return (
    <Section title='Summary'>
      <p>{body}</p>
    </Section>
  );
};
