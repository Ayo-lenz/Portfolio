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