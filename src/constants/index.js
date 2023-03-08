import {
    webflowImg,
    mobile,
    backend,
    creator,
    web,
    javascript,
    booststrap,
    html,
    css,
    reactjs,
    mysql,
    photoshop,
    premier,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    jobit,
    tripguide,
    wordpress,
    ayb,
    webflow,
    pixabay,
    weather,
    yoga,
    myfootordering,
    aura,
    sass,
    restaurant,
    furniture,
  } from "../assets";

  import csph from '../assets/company/csph.png';
  import alcaldia from '../assets/company/alcaldia.png';
  import oculaser from '../assets/company/oculaser.png';
  
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "IT Support Analyst",
      icon: mobile,
    },
    {
      title: "Graphic Design",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Booststrap",
      icon: booststrap,
    },
    {
      name: "Sass",
      icon: sass,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
    {
      name: "Webflow",
      icon: webflow,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "photoshop",
      icon: photoshop,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Carlos Soto PH",
      icon: csph,
      iconBg: "black",
      date: "September 2022 - Actual",
      points: [
        "Lead Web development, creating a new department in this company.",
        "Team work with the graphic designers and photograph.",
        "Implementing of Google Workspace for workflow to the team.",
        "With this department this company raise the profit to 30% the last 5 months.",
      ],
    },
    {
      title: "Graphic/Web Designer",
      company_name: "Alcaldía de San Diego",
      icon: alcaldia,
      iconBg: "white",
      date: "April 2005 - April 2008",
      points: [
        "Design of digital and printed material with 95% of projects completed before their deadlines.",
        "Design website of institution, redesigning and updating all content, using Dreamweaver by Macromedia.",
        "As a Graphic Designer I Collaborated with the IT department Resolving Help Desk tasks Tier 1 and 2, managing over 300 users, reducing the number of callbacks by 40%.",
        "Used PowerPoint to create presentations for Journalists, Planning and Project, Treasury, and the city Mayor.",
      ],
    },
    {
      title: "Help Desk Support",
      company_name: "Oculaser",
      icon: oculaser,
      iconBg: "white",
      date: "April 2001 - January 2002",
      points: [
        "Graphic and Web Designer to Organization.",
        "keeping ~100 Users satisfied and Systems up providing Tier I and II support, Increased overall issue resolution rate by 10%.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "A&B Bookcafe",
      description:
        "Web-based in a Food Restaurant, implementing Booking reservation, and all information about the Restaurant, This project was started with Booststrap template where I adapted to customer needed. All images in this project were minify by using a bash script.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Booststrap v5",
          color: "green-text-gradient",
        },
        {
          name: "Saas",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
      ],
      image: ayb,
      web_code_link: "https://aybbookcafe.com/",
      source_code_link: "https://github.com/rafael-agar/aybBookCafe-vzla.git",
    },
    {
      name: "El Aura Creativa",
      description:
        "Ecommerce, based in Woocommerce for handbags made for the modern woman! Integration of payment method Stripe. Uploading all info about taxes fee, Products, Shipping rates and setting SEO configuration. All images in this project were minify by using a bash script",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "Woocommerce",
          color: "green-text-gradient",
        },
        {
          name: "Stripe",
          color: "pink-text-gradient",
        },
        {
          name: "No/Code",
          color: "blue-text-gradient",
        },
      ],
      image: aura,
      web_code_link: "https://elauracreativa.com/",
      source_code_link: "https://github.com/rafael-agar",
    },
    {
      name: "The Weather API",
      description:
        "Personal project: : Web application https://www.weatherapi.com/ API to fetch Weather data.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "fetch()",
          color: "blue-text-gradient",
        },
      ],
      image: weather,
      web_code_link: "https://cat-weather.netlify.app",
      source_code_link: "git@github.com:rafael-agar/weather-cat.git",
    },
  ];

  const projectsA = [
    {
      name: "Pixabay API",
      description:
        "Personal project: Fetching Images From Pixabay API. ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Async/await",
          color: "pink-text-gradient",
        },
      ],
      image: pixabay,
      web_code_link: "https://pixa-cat.netlify.app",
      source_code_link: "git@github.com:rafael-agar/pixa-cat.git",
    },
    {
      name: "Yoga School",
      description:
        "Personal project: Yoga Wesite school, using https://elfsight.com/ widget for Calendar, Events and Staff list. All images in this project were minify by using a bash script",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Saas",
          color: "green-text-gradient",
        },
        {
          name: "Booststrap v4",
          color: "pink-text-gradient",
        },
        {
          name: "elfsight",
          color: "blue-text-gradient",
        },
      ],
      image: yoga,
      web_code_link: "https://frolicking-horse-6a11b4.netlify.app/",
      source_code_link: "git@github.com:rafael-agar/yogaCat.git",
    },
    {
      name: "Blog",
      description:
        "Personal project: Blog created in Webflow platform using CMS Collection, Also I used AI Midjourney to create the image for Hero section.",
      tags: [
        {
          name: "Webflow",
          color: "blue-text-gradient",
        },
        {
          name: "CMS Collection",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "Low/Code",
          color: "green-text-gradient",
        },
      ],
      image: webflowImg,
      web_code_link: "https://techapp.webflow.io/",
      source_code_link: "https://github.com/rafael-agar",
    },
  ];

  const projectsB = [
    {
      name: "Food Ordering",
      description:
        "Web-App Implementing, configuration and customitation take online orders for pickup, delivery, table side, services, menus, pricing, automate kitchen orders using the platform https://www.gloriafood.com/",
      tags: [
        {
          name: "Wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "gloriafood",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "No/Code",
          color: "green-text-gradient",
        },
      ],
      image: myfootordering,
      web_code_link: "https://myfoodordering-demo.online",
      source_code_link: "https://github.com/rafael-agar",
    },
    {
      name: "Restaurant - Figma",
      description:
        "Example Restaurant design.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Design",
          color: "green-text-gradient",
        },
      ],
      image: restaurant,
      web_code_link: "../../porject-restaurant.jpg",
      source_code_link: "https://github.com/rafael-agar",
    },
    {
      name: "Ecommerce Furniture - Figma",
      description:
        "Example Ecommerce Furniture design.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "Design",
          color: "green-text-gradient",
        },
      ],
      image: furniture,
      web_code_link: "../../porject-furniture.jpg",
      source_code_link: "https://github.com/rafael-agar",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, projectsA, projectsB };