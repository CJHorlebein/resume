import React from 'react';

export const Section = ({ title, children }: { title: string; children: React.ReactElement }) => {
  return (
    <section>
      <h5 className='section-title'>{title}</h5>
      <div className='section-body'>{children}</div>
    </section>
  );
};
