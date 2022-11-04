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
  },
  {
    id: '2',
    image: "https://www.mindinventory.com/blog/wp-content/uploads/2022/10/flutter-3.png",
    name: 'Capstone Flutter WebSite/Application',
    category: 'web development',
  },
  {
    id: '3',
    image: 'https://images.immediate.co.uk/production/volatile/sites/21/2021/01/Style-Council-04-b45d4fc.jpg?quality=90&resize=620,413',
    name: 'Bike E-Commerce UI/UX Design',
    category: 'UI/UX design',
  },
 
  {
    id: '5',
    image: "https://www.transitionbikes.com/images/2022_PatrolCarbon_Gallery1.jpg",
    name: 'Bike E-Commerce React',
    category: 'web development',
  },
  {
    id: '6',
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/47aa61101334781.5f1c660e2b883.jpg",
    name: 'Portfolio Page React',
    category: 'web development',
  },
  {
    id: '7',
    image: "https://helios-i.mashable.com/imagery/articles/050bXhdmNaL9bDGAINptcrL/hero-image.fill.size_1200x1200.v1617973265.jpg",
    name: 'Spotify Clone',
    category: 'web development',
  },
  {
    id: '8',
    image: 'https://s.yimg.com/os/creatr-uploaded-images/2022-01/602660f0-6fe3-11ec-aff7-6b39b1a526bc',
    name: 'Twitter Clone',
    category: 'web development',
  }, {
    id: '9',
    image: 'https://login.gov/assets/img/login-gov-600x314.png',
    name: 'Login Form Demo',
    category: 'web development',
  }

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
      'TESTTT',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Documentation',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
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
    description: 'Ready to Work Wordlwide',
  },
];
