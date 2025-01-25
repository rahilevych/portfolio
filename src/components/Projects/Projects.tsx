import styles from './Projects.module.css';

import ProjectComponent from '../Project/ProjectComponent';

function Projects() {
  const projects = [
    {
      title: 'Bookery',
      technologies: [
        'HTML5',
        'Tailwind CSS',
        'TypeScript',
        'ReactJS',
        'Next',
        'MongoDB',
      ],
      desc: 'Bookery is a bookstore built with Next.js. The main goal of this project was to get acquainted with Next.js. ',
      img: '/public/img/bookery.png',
      git: 'https://github.com/rahilevych/bookery',
      link: 'https://bookery-sbic.vercel.app/',
    },
    {
      title: 'Instclone',
      technologies: [
        'HTML5',
        'TypeScript',
        'ReactJS',
        'MongoDB',
        'Tailwind CSS',
        'Node',
        'Express',
      ],
      desc: 'A simplified version of Instagram built with the MERN stack and TypeScript.',
      img: '/public/img/instclon.png',

      git: 'https://github.com/rahilevych/instclone',
      link: 'https://instclone-client.vercel.app/',
    },
    {
      title: 'Pictures',
      technologies: ['HTML5', 'CSS3', 'TypeScript', 'ReactJS', 'Firebase'],
      desc: 'This project was built to familiarize myself with Firebase and deepen my knowledge of React.js.',
      img: '/public/img/pictures.png',
      git: 'https://github.com/rahilevych/pictures',
      link: 'https://pictures-sigma.vercel.app/',
    },
  ];

  return (
    <div className={styles.wrapper} id='projects'>
      <div className='container'>
        <div className={styles.projects}>
          <h2>Projects</h2>
          <div className={styles.projects_grid}>
            {projects.map((project, index) => (
              <ProjectComponent project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
