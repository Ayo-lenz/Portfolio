import program from '../Image/program.png';
import js from '../Image/javacript.png';
import python from '../Image/python.jpg';
import css from '../Image/css.jpg';
import html from '../Image/html.png';
import react from '../Image/react.png';
import typescript from '../Image/typescript.png';
import boostrap from '../Image/boostrap.jpeg';
import nextjs from '../Image/next-js.png';
import tailwind from '../Image/tailwind.jpeg';
// project tab images
import amazon from '../Image/amazon_project.png';
import dropbox from '../Image/dropbox_project.png';
import game from '../Image/game_project.png';
import employee from '../Image/employee_project.png';
import restaurant from '../Image/Restaurant.png';
import grocery from '../Image/Grocery_Bud.png';







export const skillCategories = [
  {
    title: "Programming Languages",
    icon: program,
    skills: [
      { icon: python, label: "Python" },
      { icon: js, label: "JavaScript" },
      { icon: typescript, label: "Typescript" },
    ],
  },
  {
    title: "Structural Languages",
    icon: program,
    skills: [
      { icon: html, label: "HTML/HTML5" },
      { icon: css, label: "CSS/CSS3" },
    ],
  },
  {
    title: "Framework/Library",
    icon: program,
    skills: [
      { icon: react, label: "ReactJS" },
      { icon: nextjs, label: "NextJS" },
      { icon: tailwind, label: "Tailwind_CSS" },
      { icon: boostrap, label: "Boostrap" },
    ],
  },
  // {
  //   title: "Version Control System",
  //   icon: AiFillDatabase,
  //   skills: [
  //     { icon: SiNumpy, label: "GitHub" },
  //     { icon: SiPandas, label: "Gitlab" },

  //   ],
  // },
]; 


export const projectsData = [
  {
    id: 0,
    name: 'Amazon E-commerce',
    imageSrc: amazon,
    techStacks: 'HTML5, CSS3, JavaScript',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/know-the-ingredient',
    liveLink: 'https://know-your-food-ashusnapx.streamlit.app/',
  },
  {
    id: 1,
    name: 'Dropbox Clone',
    imageSrc: dropbox,
    techStacks: 'HTML5, CSS3',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/ai-instagram-caption',
    liveLink: 'https://ai-instagram-caption-ashusnapx.streamlit.app/',
  },
  {
    id: 2,
    name: 'Rock, Paper, Scissors',
    imageSrc: game,
    techStacks: 'HTML5, CSS3, Javascript',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/gemini-mining',
    liveLink: 'https://dgms-gemini-ashusnapx.streamlit.app/',
  },
  {
    id: 3,
    name: 'Edit and Add to employee list',
    imageSrc: employee, // Replace with actual image URL
    techStacks: 'CSS3, Boostrap, Tailwind CSS, React JS',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/gemini-chatbot',
    liveLink: 'https://ashusnapx-gemini-chatbot-main-b5ybtn.streamlit.app/',
  },
  {
    id: 4,
    name: 'Restaurant Menu',
    imageSrc: restaurant, // Replace with actual image URL
    techStacks: 'HTML5, Boostrap and JavaScript',
    // description: 'A project description goes here.',
    githubLink: 'https://github.com/ashusnapx/airbnb-x-oyo',
    liveLink: 'https://airbnb-by-ashusnapx.vercel.app/',
  },
  {
    id: 5,
    name: 'Grocery Bud',
    imageSrc: grocery, // Replace with actual image URL
    techStacks:
      'HTML5, CSS3, JavaScript',
    // description: 'Another project description.',
    githubLink:
      'https://github.com/ashusnapx/react-final-revision/tree/main/DAY%20-%204',
    liveLink: 'https://swiggie.vercel.app/',
  },
  {
    id: 5,
    name: 'Youtube Playlist Checklist',
    imageSrc:
      'https://i.postimg.cc/Gpp3VdDC/Screenshot-2023-10-01-at-1-11-58-AM.png', // Replace with actual image URL
    techStacks: 'React, Tailwind CSS',
    // description: 'Another project description.',
    githubLink: 'https://github.com/ashusnapx/checklist-app',
    liveLink: 'https://youtube-playlist-checklist.vercel.app/',
  },
  {
    id: 6,
    name: 'Youtube Playlist Analytics',
    imageSrc:
      'https://i.postimg.cc/L6dbbDP4/Screenshot-2023-10-07-at-1-10-10-AM.png', // Replace with actual image URL
    techStacks: 'Python, Django, [Revamped UI]',
    // description: 'Another project description.',
    githubLink: 'https://github.com/ashusnapx/youtube-playlist-length',
    liveLink: 'https://yt-playlist-length-4nzq.onrender.com/',
  },
]