// Skills Icons
import dockerIcon from "./images/docker.svg"
import vueIcon from "./images/vue.png"
import nodejsLogo from "./images/nodejs.png"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/js.png"
import designIcon from "./images/design.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import instagramIcon from "./images/instagram.svg"

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
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",

  //Contact Email
  contactEmail: "alhidalgodev@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Bohios", //Project Title - Add Your Project Title Here
      para:
        "For real estate agencies, agents & individuals looking to promote, sell or rent their properties.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://www.bohios.net/mainlogo.png",
      //Project URL - Add Your Project Url Here
      url: "https://play.google.com/store/apps/details?id=com.bohios.bohios",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Afterman", //Project Title - Add Your Project Title Here
      para:
        "Create beutiful docs in markdown and HTML from postman collection.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://camo.githubusercontent.com/fc0f324963ca646f02532dc70d4a977c79eb276235192c8176b28673deabac73/68747470733a2f2f692e6962622e636f2f51636a375373672f6d61696e2e706e67",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/itsalb3rt/afterman",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Cloudcsv", //Project Title - Add Your Project Title Here
      para:
        "Open source web application for the storage of dynamic CSV files, user management, email notifications and more.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://camo.githubusercontent.com/b6589073158df98a876ca00bffa2e365aaad5de6cf6d543d6a64fd6146e98db6/68747470733a2f2f692e696d6775722e636f6d2f5a5770474a324b2e706e67",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/itsalb3rt/cloudcsv",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Sheiley Shop", //Project Title - Add Your Project Title Here
      para:
        "Sheiley Shop is a PWA to track personal purchases, No more paper and pencil to go to the supermarket.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://camo.githubusercontent.com/abc7904699f508c865eca6b24ed69ed52b68c206c23cef5ae696c0ad8384e9a6/68747470733a2f2f692e696d6775722e636f6d2f6e4c436f5152722e706e67",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/itsalb3rt/sheiley_shop_app",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Agile Visitors", //Project Title - Add Your Project Title Here
      para:
        "Application for registering employee entries with the possibility of generating reports, validating and storing users with minimal effort.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://raw.githubusercontent.com/itsalb3rt/agile-visitors/master/src/assets/DEMO-image-mobile-1.PNG",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/itsalb3rt/agile-visitors"
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "More", //Project Title - Add Your Project Title Here
      para:
        "Explore all my open source projects.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
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

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/itsalb3rt" },
    {
      img: codepenIcon,
      url: "https://codepen.io/itsalb3rt",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/itsalb3rt/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
