export interface Project {
  title: string;
  technologies: string[];
  desc: string;
  img: string;
  git: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: 'Bodhi Balance',
    technologies: [
      'TypeScript',
      'React',
      'MongoDB',
      'Node.js',
      'Express.js',
      'React Testing Library',
      'Jest',
    ],
    desc: 'A responsive web application for a yoga studio where users can create an account, purchase subscriptions, book training sessions, and manage their personal profiles',
    img: '/img/bodhi.png',
    git: 'https://github.com/rahilevych/bodhi-balance',
    link: 'https://bodhi-balance-8ucr.vercel.app',
  },
  {
    title: 'Bookery',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Next',
      'MongoDB',
    ],
    desc: 'Bookery is a bookstore built with Next.js. The main goal of this project was to get acquainted with Next.js. ',
    img: '/img/bookery.png',
    git: 'https://github.com/rahilevych/bookery',
    link: 'https://bookery-sbic.vercel.app/',
  },
  {
    title: 'Moments',
    technologies: [
      'TypeScript',
      'React',
      'MongoDB',
      'Node.js',
      'Express.js',
      'Socket.IO',
      'React Testing Library',
      'Jest',
    ],
    desc: 'A simplified version of Instagram built with the MERN stack and TypeScript.',
    img: '/img/moments.png',

    git: 'https://github.com/rahilevych/moments',
    link: 'https://moments-client1.onrender.com',
  },
  {
    title: 'Pictures',
    technologies: ['HTML5', 'CSS3', 'TypeScript', 'ReactJS', 'Firebase'],
    desc: 'This project was built to familiarize myself with Firebase and deepen my knowledge of React.js.',
    img: '/img/pictures.png',
    git: 'https://github.com/rahilevych/pictures',
    link: 'https://pictures-sigma.vercel.app/',
  },
];
