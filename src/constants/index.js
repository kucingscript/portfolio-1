// Header
export const headerLists = [
  { icons: "bx bx-home nav__icon active__link", text: "Home" },
  { icons: "bx bx-user-pin nav__icon", text: "About" },
  { icons: "bx bx-git-branch nav__icon", text: "Skills" },
  { icons: "bx bx-briefcase nav__icon", text: "Services" },
  { icons: "bx bx-git-compare nav__icon", text: "Portfolio" },
  { icons: "bx bx-send nav__icon", text: "Contact" },
];

// Home
export const homeLinks = [
  {
    href: "https://www.instagram.com/kucingscript/",
    icon: "bx bxl-instagram",
    delay: 300,
  },
  {
    href: "https://www.linkedin.com/in/ar-rasyid-sarifullah-71b1b11b1/?locale=ms_MY",
    icon: "bx bxl-linkedin",
    delay: 400,
  },
  {
    href: "https://github.com/rasyidzkun",
    icon: "bx bxl-github",
    delay: 500,
  },
];

// About
export const aboutLists = [
  {
    icon: "bx bx-award about__icon",
    text: "Experience",
    subtext: "1 Years Working",
    delay: 400,
  },
  {
    icon: "bx bx-message-rounded-check about__icon",
    text: "Completed",
    subtext: "14 + Projects",
    delay: 500,
  },
  {
    icon: "bx bx-support about__icon",
    text: "Support",
    subtext: "Online 24/7",
    delay: 600,
  },
];

// Skills
export const feSkills = [
  [
    { name: "HTML", level: "Advanced", delay: 400, icon: "bx bxl-html5" },
    { name: "CSS", level: "Advanced", delay: 500, icon: "bx bxl-css3" },
    {
      name: "JavaScript",
      level: "Intermediate",
      delay: 600,
      icon: "bx bxl-javascript",
    },
  ],
  [
    { name: "React", level: "Beginner", delay: 450, icon: "bx bxl-react" },
    {
      name: "Tailwind",
      level: "Intermediate",
      delay: 550,
      icon: "bx bxl-tailwind-css",
    },
    {
      name: "Bootstrap",
      level: "Beginner",
      delay: 650,
      icon: "bx bxl-bootstrap",
    },
  ],
];

export const beSkills = [
  [
    { name: "Node", level: "Beginner", delay: 500, icon: "bx bxl-nodejs" },
    {
      name: "Express",
      level: "Beginner",
      delay: 600,
      icon: "bx bxs-file-js",
    },
  ],
  [
    { name: "MySQL", level: "Intermediate", delay: 550, icon: "bx bxs-data" },
    {
      name: "MongoDB",
      level: "Beginner",
      delay: 650,
      icon: "bx bxl-mongodb",
    },
  ],
];

// Services
export const servicesContent = [
  {
    id: 1,
    delay: 400,
    t1: "Responsive",
    t2: "Design",
    subt: "Responsive design allows your website content to flow freely across all screen resolutions and sizes, and renders it to look great on all devices.",
    icon: "bx bx-slideshow services__icon",
    modal1: "Design for thumb",
    modal2: "Leverage mobile devices native hardware",
    modal3: "Keep the typography responsive",
  },
  {
    id: 2,
    delay: 400,
    t1: "Clean",
    t2: "Code",
    subt: "The way of writing code such that the code is easily readable, testable, and less prone to errors.",
    icon: "bx bx-code-alt services__icon",
    modal1: "Easier to maintain",
    modal2: "Easier to understand",
    modal3: "Easier for search engines to understand",
  },
  {
    id: 3,
    delay: 500,
    t1: "UX",
    t2: "Design",
    subt: "UX design focuses on building products that someone can easily use and enjoy using.",
    icon: "bx bx-user-pin services__icon",
    modal1: "Increase customer loyalty and retention",
    modal2: "Increases productivity",
    modal3: "Retain users for a long time",
  },
];

// Journey
export const journeyLists = [
  {
    text: "Education",
    icon: "bx bxs-graduation journey__icon",
    delay: 350,
  },
  { text: "Experience", icon: "bx bxs-trophy journey__icon", delay: 400 },
];

// Portfolio
import Works1 from "../assets/ask__catto.webp";
import Works2 from "../assets/ingformatika.webp";
import Works3 from "../assets/nusantara__historia.webp";
import Works4 from "../assets/pokedex.webp";
import Works5 from "../assets/the__weirdos.webp";
import Works6 from "../assets/cat__facts.webp";

export const projectsData = [
  {
    id: 1,
    image: Works1,
    title: "Ask Catto",
    category: "node",
    link: "https://ask-catto.kucingscript.my.id/",
    text: "Chat GPT Clone with React",
  },
  {
    id: 2,
    image: Works4,
    title: "Pokedex",
    category: "vanilla",
    link: "https://rasyidzkun.github.io/pixel-pokedex/",
    text: "List of Pokemon Monster",
  },
  {
    id: 3,
    image: Works5,
    title: "The Weirdos",
    category: "react",
    link: "https://weirdos.kucingscript.my.id/",
    text: "The Weirdos Bighead NFt's",
  },
  {
    id: 4,
    image: Works2,
    title: "Ingformatika",
    category: "react",
    link: "https://ingformatika.kucingscript.my.id/",
    text: "Informatics Engineering Meme",
  },
  {
    id: 5,
    image: Works3,
    title: "Nusantara Historia",
    category: "react",
    link: "https://historia.kucingscript.my.id/",
    text: "History of Nusantara Articles",
  },
  {
    id: 6,
    image: Works6,
    title: "Cat Facts",
    category: "vanilla",
    link: "https://rasyidzkun.github.io/meowfacts/",
    text: "Get Daily Cat Facts",
  },
];

export const projectsNav = [
  { name: "all" },
  { name: "react" },
  { name: "node" },
  { name: "vanilla" },
];

// Contact
export const inputForm = [
  {
    label: "Name",
    inputType: "text",
    inputName: "name",
    ph: "Insert your name",
    delay: 300,
  },
  {
    label: "Email",
    inputType: "email",
    inputName: "email",
    ph: "Insert your email",
    delay: 350,
  },
];

export const socialMedia = [
  {
    title: "Facebook",
    subtitle: "rasyidz.ar",
    href: "https://www.facebook.com/RasyidzScreamo.221016",
    icon: "bx bxl-facebook-square contact__card-icon",
    delay: 300,
  },
  {
    title: "Email",
    subtitle: "arrasyidsarifullah@gmail.com",
    href: "mailto:arrasyidsarifullah@gmail.com",
    icon: "bx bxl-gmail contact__card-icon",
    delay: 350,
  },
  {
    title: "Instagram",
    subtitle: "kucingscript",
    href: "https://www.instagram.com/kucingscript/",
    icon: "bx bxl-instagram-alt contact__card-icon",
    delay: 400,
  },
];

// Footer
export const footerLists = [
  { text: "About" },
  { text: "Skills" },
  { text: "Portfolio" },
];

export const footerLinks = [
  {
    href: "https://www.instagram.com/kucingscript/",
    icon: "bx bxl-instagram",
  },
  {
    href: "https://www.linkedin.com/in/ar-rasyid-sarifullah-71b1b11b1/?locale=ms_MY",
    icon: "bx bxl-linkedin",
  },
  {
    href: "https://github.com/rasyidzkun",
    icon: "bx bxl-github",
  },
];
