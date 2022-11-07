//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
  FiFacebook,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';



// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
 
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/berk-bozok-512998168/',
  },
  {
    icon: <FiFacebook />,
    href: 'https://www.facebook.com/berk.bozok/',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/berkbozok',
  },
  
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: "https://www.huseyinkalayci.com/wp-content/uploads/2021/02/turmob.png",
    name: 'Union of Chamers of Certified Public Accountants of Turkiye Website Design',
    category: 'UI/UX design',
    detail: "The new approved modern design of the website,made with Figma",
  },
  {
    id: '2',
    image: "https://imgur.com/a/J0gIjph",
    name: 'Capstone Flutter WebSite/Application',
    category: 'web development',
    detail: "Personal Companion mobile application, using flutter and firebase as our datastore.",
  },
  {
    id: '3',
    image: 'https://images.immediate.co.uk/production/volatile/sites/21/2021/01/Style-Council-04-b45d4fc.jpg?quality=90&resize=620,413',
    name: 'Bike E-Commerce UI/UX Design',
    category: 'UI/UX design',
    detail: "Mini-Capstone project entire website design, made with Figma",
  },
 
  {
    id: '5',
    image: "https://www.transitionbikes.com/images/2022_PatrolCarbon_Gallery1.jpg",
    name: ' React Bike E-Commerce',
    category: 'web development',
    detail: "React E-Commerce Website where the user can order bike parts and admin can track the order",
  },
  {
    id: '6',
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47aa61101334781.5f1c660e2b883.jpg",
    name: ' React Portfolio Page',
    category: 'web development',
    detail: "The website which you are looking at right now :)",
  },
  {
    id: '7',
    image: "https://helios-i.mashable.com/imagery/articles/050bXhdmNaL9bDGAINptcrL/hero-image.fill.size_1200x1200.v1617973265.jpg",
    name: 'Spotify Clone',
    category: 'web development',
    detail: "Spotify 2.0 with NEXT.JS 12.0!, also with Middleware, Spotify API, Tailwind, NextAuth,and Recoil",
  },
  {
    id: '8',
    image: 'https://s.yimg.com/os/creatr-uploaded-images/2022-01/602660f0-6fe3-11ec-aff7-6b39b1a526bc',
    name: 'Twitter Clone',
    category: 'web development',
    detail: "Twitter Clone with REACT.JS!,also with Next.js, Sanity CMS, Typescript, SSR, Tailwind & NextAuth",
  }, {
    id: '9',
    image: 'https://login.gov/assets/img/login-gov-600x314.png',
    name: 'Login Form Demo',
    category: 'web development',
    detail: "The Login demo where we can test username and correct inputs in order to see success page",
  },
  {
    id: '10',
    image: 'https://www.otip.com/getattachment/e7745e90-fa6f-4cb8-aed6-c1fababe1049/file.aspx',
    name: 'Travel Companion',
    category: 'Projects',
    detail: "A MERN stack application that displays Covid-19 restrictions for countrie, where you can see the restrictions before your flight or travel",
  },
  {
    id: '11',
    image: 'https://education.nsw.gov.au/content/dam/main-education/parents-and-carers/media/images/maths/Risk_board_game.jpg',
    name: 'C++ Card/Risk Game',
    category: 'Projects',
    detail: "4 player \"Risk\" game where players take turn and try to take over each other's territory",
  },

];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'Projects',
  },
  
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Looking for a brilliant design for your software and you understand that it is the key to success for your company? I am here to help you. I will study your business, create intuitive UX and appealing UI which will be highly appreciated by your customers and users.'
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'I will build you a responsive website so that it looks great on all screens, including small and wide ones. As a Developer, I primarily strive to deliver complete work of high quality to you. I have a rigorous amount of skills in HTML, CSS, Bootstrap, React Bootstrap, JavaScript, React JS, Node JS, Express JS, MongoDB, Firebase, etc. ',
  },
  {
    icon: <FiPenTool />,
    name: 'Documentation',
    description:
      'Every development project requires software technical documentation, and having it in place is a key to accomplish the desired outcomes. However, it is not an easy task to synchronize the thoughts of clients and developers whose technical knowledge differ a lot. That\'s where I come into place to help you.'
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'I have successfully ranked local businesses in our Midwest market, and now I want to help you rank in your market. I have crafted a \'recipe\' that when we add the right ingredients, the right way, the result is a ranking boost that is fast and lasts. It\'s the ranking boost result we get for your business. ',
  },
]; 


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at berk_bozok@live.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Montreal, Canada',
    description: 'Ready to Work Worldwide',
  },
];
