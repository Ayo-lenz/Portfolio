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
import dashboard from '../Image/dashboard.png';
import solo_project from '../Image/Solo_project.png';







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
    techStacks: ['HTML5', 'CSS3', 'JavaScript'],
    description: 'Cloned Amazon E-commerce website and included JavaScript functionalities.',
    githubLink: 'https://github.com/Ayo-lenz/Amazon_clone',
    liveLink: 'https://ayo-lenz.github.io/Amazon_clone/',
  },
  {
    id: 1,
    name: 'Dropbox Clone',
    imageSrc: dropbox,
    techStacks: ['HTML5', 'CSS3'],
    description: 'A clone of DropBox website.',
    githubLink: 'https://github.com/Ayo-lenz/dropbox_assignment.git',
    liveLink: 'https://ayo-lenz.github.io/dropbox_assignment/',
  },
  {
    id: 2,
    name: 'Rock, Paper, Scissors',
    imageSrc: game,
    techStacks: ['HTML5', 'CSS3', 'Javascript'],
    description: 'Built a game that is based on JavaScript functionalities.',
    githubLink: 'https://github.com/Ayo-lenz/game_project.git',
    liveLink: 'https://ayo-lenz.github.io/game_project/',
  },
  {
    id: 3,
    name: 'Edit and Add to employee list',
    imageSrc: employee, // Replace with actual image URL
    techStacks: ['CSS3', 'Boostrap', 'Tailwind CSS', 'React JS'],
    description: "A project to edit and add to an organization's employee list.",
    githubLink: 'https://github.com/Ayo-lenz/My_Employee_React_Project',
    liveLink: 'https://ayo-lenz.github.io/My_Employee_React_Project/',
  },
  {
    id: 4,
    name: 'Restaurant Menu',
    imageSrc: restaurant, // Replace with actual image URL
    techStacks: ['HTML5', 'Boostrap', 'JavaScript'],
    description: 'A JavaScript based project that displays Food items in different category in a restaurant.',
    githubLink: 'https://github.com/Ayo-lenz/Restaurant_menu_assignment.git',
    liveLink: 'https://ayo-lenz.github.io/Restaurant_menu_assignment/',
  },
  {
    id: 5,
    name: 'Grocery Bud',
    imageSrc: grocery, // Replace with actual image URL
    techStacks:
      ['HTML5', 'CSS3', 'JavaScript'],
    description: 'A JavaScript based App that helps save, edit and delete a shopping list.',
    githubLink:
      'https://github.com/Ayo-lenz/Java-3/tree/grocery-list',
    liveLink: 'https://ayo-lenz.github.io/Java-3/',
  },
  {
    id: 6,
    name: 'Dashboard',
    imageSrc: dashboard, // Replace with actual image URL
    techStacks: ['HTML5', 'CSS3', 'JavaScript'],
    description: 'A Personal company dashboard.',
    githubLink: 'https://github.com/Ayo-lenz/My_dashboard',
    liveLink: 'https://ayo-lenz.github.io/My_dashboard/',
  },
  {
    id: 7,
    name: 'Farm-Tab',
    imageSrc: solo_project, // Replace with actual image URL
    techStacks: ['CSS3', 'Boostrap', 'Tailwind CSS', 'React JS'],
    description: 'An ongoing initiative Project to help  local farmers connect to buyers seamlessly.',
    githubLink: 'https://github.com/Ayo-lenz/my_solo_project',
    liveLink: 'https://ayo-lenz.github.io/my_solo_project/',
  },
]