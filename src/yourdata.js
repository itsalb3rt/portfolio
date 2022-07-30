// Skills Icons
import dockerIcon from "./images/docker.svg"
import vueIcon from "./images/vue.png"
import nodejsLogo from "./images/nodejs.png"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/js.png"
import designIcon from "./images/design.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import instagramIcon from "./images/instagram.svg"
import twitterIcon from "./images/twitter.png"

// Work images
import facilPiezasImage from './images/facil-piezas.jpg'
import bohiosImage from './images/bohios.png'
import sheileyShopImage from './images/sheiley-shop.png'
import aftermanImage from './images/afterman.png'
import cloudCsvimage from './images/cloudcsv.png'
import agileVisitorsImage from './images/agile-visitors.png'
import moreProjectsImage from './images/more-projects.png'
import taVivoImage from './images/taVivo.png'

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Albert",
  headerTagline: [
    //Line 1 For Header
    "Web apps,",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "Planing, design, development, quality assurance.",

  //Contact Email
  contactEmail: "contact@albert.do",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Ta vivo",
      para: "Check if you API or web is down made easy",
      imageSrc: taVivoImage,
      url: "https://landing-tavivo.albert.do",
    },
    {
      title: "Fácil Piezas", //Project Title - Add Your Project Title Here
      para:
        "Android, IOS and Web App for sale of vehicle parts, geolocation, in app chat and much more features", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: facilPiezasImage,
      //Project URL - Add Your Project Url Here
      url: "https://facilpiezas.com.do",
    },
    {
      title: "Bohios", //Project Title - Add Your Project Title Here
      para:
        "For real estate agencies, agents & individuals looking to promote, sell or rent their properties.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: bohiosImage,
      //Project URL - Add Your Project Url Here
      url: "https://play.google.com/store/apps/details?id=com.bohios.bohios",
    },
    {
      title: "Sheiley Shop", //Project Title - Add Your Project Title Here
      para:
        "Sheiley Shop is a PWA to track personal purchases, No more paper and pencil to go to the supermarket.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: sheileyShopImage,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/itsalb3rt/sheiley_shop_app",
    },
    {
      title: "Afterman", //Project Title - Add Your Project Title Here
      para:
        "Create beutiful docs in markdown and HTML from postman collection.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: aftermanImage,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/itsalb3rt/afterman",
    },
    {
      title: "Cloudcsv", //Project Title - Add Your Project Title Here
      para:
        "Open source web application for the storage of dynamic CSV files, user management, email notifications and more.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: cloudCsvimage,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/itsalb3rt/cloudcsv",
    },
    {
      title: "Agile Visitors", //Project Title - Add Your Project Title Here
      para:
        "Application for registering employee entries with the possibility of generating reports, validating and storing users with minimal effort.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: agileVisitorsImage,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/itsalb3rt/agile-visitors"
    },
    {
      title: "More", //Project Title - Add Your Project Title Here
      para:
        "Explore all my open source projects.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: moreProjectsImage,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/itsalb3rt",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Albert is a Frontend and Backend developer with experience in the website and web application creation industry.",
  aboutParaTwo:
    "He Specialize in JavaScript and have professional experience working with PHP, Node JS, Docker, React and VUE. ",
  aboutParaThree:
    "He also have experience working with relational and spatial databases.",
  aboutImage:
    "https://pbs.twimg.com/profile_images/1195145668416946177/QrdEfW8C_400x400.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: jsIcon,
      para:
        "Extensive knowledge in the foundations of the language and different frameworks.",
    },
    {
      img: nodejsLogo,
      para:
        "Experience in creating restful APIs using Node Js, Express, Sequelize among other server-side tools.",
    },
    {
      img: dockerIcon,
      para:
        "Extensive professional experience with Docker, traefik and more. Technical studies at Platzi.",
    },
    {
      img: vueIcon,
      para:
        "Vue is the tool of choice for building multi-purpose web applications, Vuex, Vue router, Quasar and much more.",
    },
    {
      img: reactIcon,
      para:
        "Professional experience working with React, redux, redux form and many more tools of the react ecosystem.",
    },
    {
      img: designIcon,
      para:
        "Knowledge of graphic interface design and user experience, prototyping with Adobe XD.",
    }
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "My recent activity on the internet",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/itsalb3rt" },
    {
      img: twitterIcon,
      url: "https://twitter.com/alhidalgodev",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/itsalb3rt/",
    },
  ],

  // End Contact Section ---------------
  sponsors: [
    {
      img: 'https://avatars.githubusercontent.com/u/539774?v=4',
      url: 'https://github.com/psanders',

    }
  ]
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
