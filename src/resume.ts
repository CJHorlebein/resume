export type ExperienceSchema = {
  jobs: JobSchema[];
};

export type JobSchema = {
  company: string;
  location: string;
  roles: {
    title: string;
    dates: { from: string; to: string };
    bullets: string[];
  }[];
};

interface Resume {
  basics: {
    name: string;
    address: string;
    number?: string; // added locally
    email?: string; // added locally
    linkedin: string;
    github: string;
  };
  summary: {
    body: string;
  };
  experience: ExperienceSchema;
  skills: {
    technologies: string[];
  };
  awards: {
    body: {
      content: string;
      date: string;
    }[];
  };
  education: {
    schools: {
      date: string;
      degree: string;
      field: string;
      name: string;
      address: string;
      gpa: string;
    }[];
  };
}

export const data: Resume = {
  basics: {
    name: `Christian "CJ" Horlebein`,
    address: 'Atlanta, GA',
    linkedin: 'linkedin.com/in/cjhorlebein',
    github: 'github.com/cjhorlebein',
  },
  summary: {
    body: `Experienced Full Stack Developer and Technical Lead with 7 years of experience in React, TypeScript, Gatsby, Jest, AWS Lambdas, and analytics platforms (Google Analytics, Mixpanel, Domo). Skilled in designing and developing E-commerce platforms, RESTful APIs, and cross-platform applications. Proficient in code review, test-driven development, and managing analytics to track user metrics and performance.`,
  },
  experience: {
    jobs: [
      {
        company: 'Integrated Specialty Coverages, LLC',
        location: 'Remote',
        roles: [
          {
            title: 'Frontend Technical Lead',
            dates: { from: 'Oct 2023', to: 'Present' },
            bullets: [
              `Led a team of 4 developers, ensuring efficient project management and task delegation`,
              `Implemented a <b>Feature Flagging</b> system for dynamic feature releases`,
              `Utilized <b>Github Actions</b> to implement Test Coverage reporting on Pull Requests`,
              `Overhauled our agile methodology, reducing time on testing and repeat meetings`,
              `Mentored junior developers on best practices and coding standards`,
            ],
          },
          {
            title: 'Senior Software Engineer',
            dates: { from: 'Apr 2023', to: 'Oct 2023' },
            bullets: [
              `Integrated new features and pages using <b>React</b>, <b>TypeScript</b>, <b>Jest</b>, and <b>Storybook</b>`,
              `Designed and architected a page builder to generate dynamic forms`,
              `Collaborated with product managers and designers to define feature requirements`,
              `Developed a robust permissions system for different user roles`,
              'Built a components library using <b>Mantine UI</b> with <b>HTML / CSS</b> to ensure consistent and reusable components',
            ],
          },
        ],
      },
      {
        company: 'Reibus International',
        location: 'Sandy Springs, GA',
        roles: [
          {
            title: 'Full Stack Developer',
            dates: { from: 'Apr 2021', to: 'Mar 2023' },
            bullets: [
              `Developed an E-commerce platform using <b>React</b>, <b>Typescript</b>, <b>Jest</b>, and <b>Gatsby</b>, including greenfield work and new features`,
              `Led feature teams to build new pages for the platform using <b>Material UI</b> and <b>HTML / CSS</b>`,
              `Built serverless API endpoints with <b>AWS Lambda</b>, employing <b>Node.js / Express.js</b> and utilizing <b>Prisma</b> for database updates`,
              `Led the rollout of <b>Google Analytics / Mixpanel</b> for user behavior tracking, utilizing <b>SQL / PostgreSQL</b> and <b>Domo</b> to build funnels and dashboards for performance monitoring`,
              `Collaborated with development teams to create robust solutions meeting client requirements for functionality, scalability, and performance`,
            ],
          },
        ],
      },
      {
        company: 'Ware2Go',
        location: 'Atlanta, GA',
        roles: [
          {
            title: 'Software Engineer',
            dates: { from: 'Mar 2019', to: 'Apr 2021' },
            bullets: [
              `Developed new user-facing features using <b>React.js / Typescript</b> and <b>HTML / CSS</b>.`,
              `Engineered API <b>Microservices</b> utilizing <b>Nest.js</b> for efficient and scalable backend solutions.`,
              `Coordinated with development team to deliver a new enterprise platform built from scratch.`,
              `Performed as team lead for 8-person feature development squad.`,
              `Improved developer experience as part of engineering processes committee.`,
            ],
          },
        ],
      },
      {
        company: 'Panasonic Automotive',
        location: 'Peachtree City, GA',
        roles: [
          {
            title: 'Electrical Design Engineer',
            dates: { from: 'Aug 2017', to: 'Feb 2019' },
            bullets: [
              `Developed electrical designs / schematics for car audio systems.`,
              `Performed analysis on technical designs and prototypes in development stage.`,
              `Maintained Bill of Materials for multiple technical drawings / schematics.`,
            ],
          },
        ],
      },
    ],
  },
  skills: {
    technologies: [
      'React.JS',
      'Microservices',
      'HTML / CSS / Javascript / Typescript',
      'Jest / Testing / Storybook.JS',
      'Google Analytics / Mixpanel',
      'Node.JS',
      'Amazon Web Services (AWS)',
      'Mantine UI / Material UI',
      'GraphQL',
      'Gatsby.JS',
      'CRUD / REST',
      'Agile / JIRA',
      'API Design',
      'Git / GitHub',
    ],
  },
  awards: {
    body: [
      {
        content: 'Reibus Engineering Culture Award for Curiosity',
        date: 'Dec 2022',
      },
    ],
  },
  education: {
    schools: [
      {
        date: 'May 2014',
        degree: 'Bachelor of Science',
        field: 'Electrical Engineering',
        name: 'Western Carolina University',
        address: 'Cullowhee, NC',
        gpa: '3.4',
      },
      {
        date: 'Apr 2019',
        degree: 'Technical Certificate',
        field: 'Full Stack Software Development',
        name: 'DigitalCrafts',
        address: 'Atlanta, GA',
        gpa: '',
      },
    ],
  },
};

// old
// {
//   title: 'Electrical Engineer',
//   company: 'Caterpillar (Contract via Belcan)',
//   location: 'Peachtree City, GA',
//   dates: { from: 'Oct 2015', to: 'Jul 2017' },
//   bullets: [
//     'Reduced 1000 man hours per year by automating install process for optional software features.',
//     'Performed software validation and testing for new engine builds.',
//     'Managed engine witness tests to international auditor requirements.',
//   ],
// },
