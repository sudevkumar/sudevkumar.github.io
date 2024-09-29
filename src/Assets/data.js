import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaGithub,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";
import Work7 from "./assets/project-7.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Sudev",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Kumar",
  },

  {
    id: 3,
    title: "DOB : ",
    description: "12-6-1999",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Indian",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Cuttack, Odisha, India",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+91 8328847712",
  },

  {
    id: 8,
    title: "Email : ",
    description: "sudevkumar@gmail.com",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Odia, Hindi, English",
  },
];

export const resume = [
  {
    id: 1,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2021 - 2023",
    title: "Master's Degree <span> Mansarover Global University </span>",
    desc: "Pursued Master Of Computer Application From Mansarover Collage with a CGPA of 7.67.",
  },
  {
    id: 1,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022 - 2023",
    title: "Master's In Full Stack <span> Masai School </span>",
    desc: "Pursued Full Stack Web Development From Masai School.",
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017 - 2020",
    title:
      "Bachelor's Degree <span> Utkal University, Bhubaneswar, Odisha </span>",
    desc: "Pursued Bachelor's In Computer Application From Ipsar Collage with a CGPA of 7.64.",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015 - 2017",
    title:
      "Higher Secondary Eduction <span> Stewart Science College, Cuttack, Odisha</span>",
    desc: "Pursued Higher Secondary Education From Stewart Science College with percentage of 53.33%.",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "80",
  },

  {
    id: 2,
    title: "Css",
    percentage: "70",
  },

  {
    id: 3,
    title: "Javascript",
    percentage: "75",
  },

  ,
  {
    id: 4,
    title: "React",
    percentage: "75",
  },

  {
    id: 5,
    title: "Tailwind Css",
    percentage: "85",
  },

  {
    id: 6,
    title: "Express",
    percentage: "50",
  },

  {
    id: 7,
    title: "Node Js",
    percentage: "50",
  },

  {
    id: 8,
    title: "Mongo Db",
    percentage: "45",
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "AirBnb",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "AirBnb",
      },
      {
        icon: <FaGithub />,
        title: "Tech : ",
        desc: "Git Hub Link",
        link: "https://github.com/sudevkumar/airbnb",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN Stack, Tailwind Css",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "Live Site Link",
        link: "https://airbnb-eta-lime-89.vercel.app/",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "The Fit Club",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "The Fit Club",
      },
      {
        icon: <FaGithub />,
        title: "Tech : ",
        desc: "Git Hub Link",
        link: "https://github.com/sudevkumar/Sudev-projects/tree/main/gym_website",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React Js, Css3",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "Live Site Link",
        link: "https://sudev-gym-website.netlify.app/",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Avira Shop",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Avira Shop",
      },
      {
        icon: <FaGithub />,
        title: "Tech : ",
        desc: "Git Hub Link",
        link: "https://github.com/crusher8010/Avira-Shop",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN Stack, Chakra UI",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "Live Site Link",
        link: "https://magenta-eclair-cf1ece.netlify.app/",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Fitness Club",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Fitness Club",
      },
      {
        icon: <FaGithub />,
        title: "Tech : ",
        desc: "Git Hub Link",
        link: "https://github.com/sudevkumar/Sudev-projects/tree/main/Advance%20Gym%20Web-site",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React Js, MUI, Rapid API",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "Live Site Link",
        link: "https://goldsgymsudev.netlify.app/",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Star War",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Star War",
      },
      {
        icon: <FaGithub />,
        title: "Tech : ",
        desc: "Git Hub Link",
        link: "https://github.com/masai-course/Sudev_fw18_0175/tree/master/unit-3/sprint-2/optional/PSC%20",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, Css, Javascript",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "Live Site Link",
        link: "https://genuine-faun-4f0839.netlify.app/",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Star War",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "E-commerce",
      },
      {
        icon: <FaGithub />,
        title: "Tech : ",
        desc: "Git Hub Link",
        link: "https://github.com/sudevkumar/Sudev-projects/tree/main/mobile-shop",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React Js, Bootstrap",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "Live Site Link",
        link: "https://sudevsmart.netlify.app/",
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: "iPhone 15",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "iPhone 15",
      },
      {
        icon: <FaGithub />,
        title: "Tech : ",
        desc: "Git Hub Link",
        link: "https://github.com/sudevkumar/Apple",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React Js, Tailwind CSS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "Live Site Link",
        link: "https://66f9620fff441c200807a01b--rad-concha-0f93ba.netlify.app/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];

export const stats = [
  {
    id: 1,
    no: "100 hrs+",
    title: "Programming <br /> Practice",
  },

  {
    id: 2,
    no: "10+",
    title: "Completed <br /> Projects",
  },

  {
    id: 3,
    no: "2+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "1",
    title: "Awards  Won <br /> for body donation.",
  },
];
