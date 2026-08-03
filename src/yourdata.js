// Skills Icons
import jsIcon from "./images/js.png"
import nodejsLogo from "./images/nodejs.png"
import dockerIcon from "./images/docker.svg"
import vueIcon from "./images/vue.png"
import reactIcon from "./images/react.svg"
import designIcon from "./images/design.svg"
import n8nIcon from "./images/n8n.webp"

// Work images
import mutusImage from './images/mutus.webp'
import bohiosImage from './images/bohios.png'
import savyCartImage from './images/savycart.webp'
import aftermanImage from './images/afterman.png'
import cloudCsvimage from './images/cloudcsv.png'
import agileVisitorsImage from './images/agile-visitors.png'
import moreProjectsImage from './images/more-projects.png'
import taVivoImage from './images/taVivo.webp'
import cowofiImage from './images/cowofi.png'
import laCasitaDeCharo from './images/la-casita-de-charo.png'
import reorei from './images/reorei.webp'
import zenith from './images/zenith.webp'
import anncar from './images/anncar.jpeg'
import gtc from './images/gtc.webp'
import reinapp from './images/reinapp.webp'
import bookstantify from './images/bookstantify.webp'
import calificado from './images/calificado.webp'

// About portrait (local asset — no external CDN)
import portrait from './images/albert-hidalgo.png'

export default {
  name: "Albert",

  //   Header Details ---------------------
  headerTagline: [
    //Line 1 For Header
    "Mobile apps, web platforms",
    //Line 2 For Header
    "& automation workflows,",
    //Line 3 For Header
    "built to last.",
  ],
  headerParagraph:
    "Full-stack engineering, product design, quality assurance, and n8n automation — from first wireframe to production traffic.",

  //Contact Email
  contactEmail: "contact@albert.do",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "MUTUS",
      para: "All-in-one fitness app — free, cross-platform, and built with Quasar.",
      tags: ["Mobile", "Fitness", "Quasar"],
      imageSrc: mutusImage,
      url: "https://mutus.app",
    },
    {
      title: "Bookstantify",
      para: "The digital book journal for book lovers. Track reading progress, organize your library, and keep every habit in one place.",
      tags: ["Web App", "SaaS", "Lifestyle"],
      imageSrc: bookstantify,
      url: "https://bookstantify.com",
    },
    {
      title: "Calificado",
      para: "Manage your school with AI — grades, attendance, discipline, and report cards in one place, built for the Dominican education system and its MINERD regulations.",
      tags: ["SaaS", "AI", "EdTech"],
      imageSrc: calificado,
      url: "https://calificado.do",
    },
    {
      title: "REOREI",
      para: "AI real estate analysis with Python microservices automating data analysis and high-demand workloads.",
      tags: ["AI", "Real Estate", "Microservices"],
      imageSrc: reorei,
      url: "https://reorei.com",
    },
    {
      title: "ReinAPP",
      para: "Connecting local entrepreneurs with their customers.",
      tags: ["Mobile", "Web"],
      imageSrc: reinapp,
      url: "https://reinapp.com.do",
    },
    {
      title: "GT Consulting store",
      para: "Full e-commerce storefront for GT Consulting.",
      tags: ["E-commerce"],
      imageSrc: gtc,
      url: "https://tienda.gtconsultingonline.com",
    },
    {
      title: "Zenith Residential Properties",
      para: "Real estate investment and property management. Automation with n8n and LLM models over warehouse data and external datasets.",
      tags: ["Automation", "AI", "Real Estate"],
      imageSrc: zenith,
      url: "https://www.zenithresidentialproperties.com",
    },
    {
      title: "Anncar Equipment Parts",
      para: "A vast catalog of new aftermarket, rebuilt and used parts for Caterpillar, Komatsu, JCB and other heavy equipment manufacturers.",
      tags: ["Web App", "E-commerce"],
      imageSrc: anncar,
      url: "https://app.anncarequipment.com",
    },
    {
      title: "La Casita de Charo",
      para: "Villa rental landing page in Constanza, Dominican Republic.",
      tags: ["Landing", "Travel"],
      imageSrc: laCasitaDeCharo,
      url: "https://lacasitadecharo.com",
    },
    {
      title: "Prevenseg SRL",
      para: "Security solutions for businesses — corporate presence with a clean, trustworthy feel.",
      tags: ["Web", "Business"],
      imageSrc: "https://prevensegsrl.com/prevenseg-logo.jpeg",
      url: "https://prevensegsrl.com",
    },
    {
      title: "Ta vivo",
      para: "Know your service is down before your customers do. Alerts via Discord, Email, Slack, Telegram or WhatsApp.",
      tags: ["SaaS", "DevTools"],
      imageSrc: taVivoImage,
      url: "https://landing-tavivo.albert.do",
    },
    {
      title: "Cowofi",
      para: "Find the perfect workspace near you.",
      tags: ["Web App", "Productivity"],
      imageSrc: cowofiImage,
      url: "https://cowofi.netlify.app",
    },
    {
      title: "Bohios",
      para: "Real estate listings for agencies, agents and individuals — promote, sell or rent with confidence.",
      tags: ["Landing", "Real Estate"],
      imageSrc: bohiosImage,
      url: "https://bohio-landing.netlify.app",
    },
    {
      title: "SavyCart",
      para: "The grocery list that lives in your pocket — no more pencil and paper.",
      tags: ["Mobile", "Productivity"],
      imageSrc: savyCartImage,
      url: "https://savycart.albert.do",
    },
    {
      title: "Afterman",
      para: "Turn Postman collections into beautiful Markdown and HTML documentation.",
      tags: ["Open Source", "DevTools"],
      imageSrc: aftermanImage,
      url: "https://github.com/itsalb3rt/afterman",
    },
    {
      title: "Cloudcsv",
      para: "Open-source web app for dynamic CSV storage, user management, email notifications and more.",
      tags: ["Open Source", "SaaS"],
      imageSrc: cloudCsvimage,
      url: "https://github.com/itsalb3rt/cloudcsv",
    },
    {
      title: "Agile Visitors",
      para: "Employee entry registration with reports, validation and user management — minimal effort, maximum visibility.",
      tags: ["Open Source", "Web App"],
      imageSrc: agileVisitorsImage,
      url: "https://github.com/itsalb3rt/agile-visitors",
    },
    {
      title: "AMV Restoration",
      para: "Expert solutions for water damage, mold remediation, sewage clean-up and construction projects.",
      tags: ["Web", "Business"],
      imageSrc: "https://amvrestoration.com/img/logo.png",
      url: "https://amvrestoration.com",
    },
    {
      title: "More",
      para: "Explore all my open-source projects.",
      tags: ["Open Source", "GitHub"],
      imageSrc: moreProjectsImage,
      url: "https://github.com/itsalb3rt",
    },
  ],

  // End Work Section -----------------------

  // About Section --------------
  aboutParaOne:
    "Full-stack developer with 10+ years building web and hybrid mobile products end to end. I work deep in the JavaScript ecosystem — Node.js, TypeScript, React, Vue and the Quasar framework for Android and iOS — and I'm equally at home in PHP, Go and Docker.",
  aboutParaTwo:
    "Relational and spatial databases, CI/CD pipelines and Linux servers are part of my daily toolkit. I care as much about the work between the feature and the deploy as I do about the feature itself.",
  aboutParaThree:
    "Recently I've specialized in automation: n8n workflows, LLM integrations and AI agents that replace manual busywork. At Zenith, I connected warehouse data and external datasets with LLM models to turn raw numbers into decisions.",
  aboutImage: "https://pbs.twimg.com/profile_images/2044217314015326208/e3M01aIu_400x400.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------
  skills: [
    {
      img: jsIcon,
      name: "JavaScript",
      para: "Deep foundation in the language and its frameworks — from core semantics to modern tooling.",
    },
    {
      img: nodejsLogo,
      name: "Node.js & APIs",
      para: "RESTful APIs with Node, Express, Sequelize and the rest of the server-side toolbox.",
    },
    {
      img: dockerIcon,
      name: "Docker & Infra",
      para: "Professional experience with Docker, Traefik, CI/CD pipelines and Linux servers.",
    },
    {
      img: vueIcon,
      name: "Vue & Quasar",
      para: "Multi-purpose web apps and hybrid mobile apps — Vuex, Vue Router and the Quasar framework.",
    },
    {
      img: reactIcon,
      name: "React & Next.js",
      para: "Professional experience with React, Redux, Next.js and the wider React ecosystem.",
    },
    {
      img: designIcon,
      name: "Design & UX",
      para: "Interface design, user experience and prototyping with Figma.",
    },
    {
      img: n8nIcon,
      name: "n8n & AI Automation",
      para: "Workflow automation, LLM integrations over warehouse and external data, email processing, Telegram business communication and WhatsApp AI agents.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion / Activity Section --------------------------
  promotionHeading: "Elsewhere on the internet",
  promotionPara:
    "I write about engineering, automation and the business of software — plus the occasional open-source release.",
  activity: [
    {
      name: "Blog",
      url: "https://blog.albert.do",
      desc: "Notes on engineering, automation and AI",
    },
    {
      name: "GitHub",
      url: "https://github.com/itsalb3rt",
      desc: "Open-source projects and experiments",
    },
    {
      name: "X / Twitter",
      url: "https://twitter.com/alhidalgodev",
      desc: "Short thoughts, 280 characters at a time",
    },
  ],
  // End Promotion Section -----------------

  //   Contact Section --------------
  contactSubHeading: "Let's build something that lasts",
  social: [
    { name: "GitHub", url: "https://github.com/itsalb3rt" },
    { name: "X / Twitter", url: "https://twitter.com/alhidalgodev" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/alhidalgodev" },
  ],

  // End Contact Section ---------------
  sponsors: [],
}
