/* Change this file to get your personal Porfolio */
// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};
// logo_path:
//SEO Related settings
const seo = {
  title: "Pratham's Portfolio",
  description:
    "I am a passionate software engineer, currently pursuing a Master's in Computer Science, dedicated to developing end-to-end products that build sustainable and scalable social and technical systems for meaningful impact.",
  og: {
    title: "Pratham Sharma Portfolio",
    type: "website",
    // url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Pratham Sharma",
  logo_name: "Prathamsharma",
  subTitle:
    "I am a passionate software engineer, currently pursuing a Master's in Computer Science, dedicated to developing end-to-end products that build sustainable and scalable social and technical systems for meaningful impact.",
  resumeLink:
    "https://drive.google.com/file/d/1CWxHrazdJjA4y2vw3F8IxrLKfbUvUgua/view?usp=sharing",
  // portfolio_repository: "",
  githubProfile: "https://github.com/PrathamSharma1510",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/PrathamSharma1510",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pratham-sharma-9a15271b7/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:pratham.sharma6113@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   // need to change this
  //   name: "Leetcode",
  //   link: "https://leetcode.com/u/user2217AM/",
  //   fontAwesomeIcon: "simple-icons:leetcode", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   // backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building highly responsive and interactive front-end websites using React-Redux to ensure a seamless user experience across various devices and screen sizes.",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Worked with hosting and maintaining websites on virtual machine instances, integrating databases for seamless data management.",
        "⚡ Learned to containerize applications using Docker, ensuring consistent and efficient deployment across different environments.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developed a comprehensive understanding of machine learning engineering, focusing on LLMs, CNNs, and RNNs, through coursework and hands-on projects.",
        "⚡ Completed an in-depth project on deep fake detection, applying advanced machine learning techniques and gaining practical experience in model development and evaluation.",
        "⚡  Enhanced skills in natural language processing and data science by fine-tuning models and tackling complex assignments, achieving a solid grasp of the principles and applications of AI.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/user2217AM/",
    },
    {
      siteName: "GFG",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "green",
      },
      profileLink: "https://www.geeksforgeeks.org/user/prathamsharma6113/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "UNIVERSITY OF FLORIDA",
      subtitle: "Master of Science in Computer Science and Engineering",
      logo_path: "UF.png",
      alt_name: "IIITDM Kurnool",
      duration: "August 2023 - December 2024 (Expected)",
      descriptions: [
        "⚡ Completed advanced courses in Computer Vision, Advanced Data Structures, Human-Computer Interaction, Machine Learning Engineering, Natural Language Processing, Data Engineering, Software Engineering, Computer Networks, and Distributed Operating System.",
        "⚡ Awarded the Achievement Award Scholarship, representing a savings of $4,500 during the Master’s degree program for academic excellence.",
        "⚡ Worked as a Teaching Assistant for INTRO TO COMPUTER ORGANIZATION (CDA3101) and SENIOR DESIGN PROJECT (CIS4914) and as a Research Assistant under Ivan Ruchkin during Summer 2024.",
      ],
      website_link: "https://www.ufl.edu/",
    },
    {
      title: "BENNETT UNIVERSITY",
      subtitle: "B.Tech in Computer Science",
      logo_path: "Bennett_University.webp",
      alt_name: "BENNETT UNIVERSITY",
      duration: "August 2019 - May 2023",
      descriptions: [
        "⚡ Studied Data Structures, Algorithms, Machine Learning, Cloud Computing, Web Development, and more.",
        "⚡ Secured a 30% tuition scholarship for high school grades and received a Letter of Appreciation for a perfect SGPA of 10/10 in the 7th semester.",
        "⚡ One of the few students selected for a research internship at Georgia Tech from Bennett University.",
      ],
      website_link: "https://www.bennett.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web Developers",
      subtitle: "John Hopkins University",
      logo_path: "jk.jpg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/4PEFZWXPWMT3",
      alt_name: "John Hopkins University",
      color_code: "white",
    },
    {
      title: "C++",
      subtitle: "Data Structures and algorithms",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-a281df1f-6e6d-43de-8f53-74017fe2d1bd/",
      alt_name: "Data Structures and algorithms",
      color_code: "white",
    },
    {
      title: "Data Structures and algorithms",
      subtitle: "Python Data Structures Michigan university.",
      logo_path: "UM.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/G4PA8DKVJAGW",
      alt_name: "Data Structures and algorithms",
      color_code: "#1F70C199",
    },
    {
      title: "cognitiveclass",
      subtitle: "Introduction to Data Science",
      logo_path: "CC.jpg",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/f6fa89fea2a14819985ad32f9fbb81e3",
      alt_name: "Introduction to Data Science",
      color_code: "#D83B0199",
    },
    {
      title: "Pro Javascript backend developer",
      subtitle: "Pro Javascript backend developer",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-a19a88e1-145c-40fb-a4ee-3c246f0d0ef2/",
      alt_name: "Pro Javascript backend developer",
      color_code: "white",
    },
    {
      title: "Microsoft Certified",
      subtitle: "Microsoft Certified: Azure AI Fundamentals",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.credly.com/badges/f31d8326-9151-462f-b464-dcf978327d65?source=linked_in_profile",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Microsoft Certified",
      subtitle: "Microsoft Certified: Azure AI Fundamentals",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1pAf0N-4uze-T4LPpUkqi05G5I5ekgzYY/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Microsoft Certified",
      subtitle: "Microsoft Certified: Azure Administrator Associate",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15O0Eal-g7PD5Vogi3c3aUeun9ZZNEBno/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Introduction to Project Management",
      subtitle: "SkillUP",
      logo_path: "SU.png",
      certificate_link:
        "https://drive.google.com/file/d/1Xa5p4Ei7vEBI8dkQOJ9MBbCsCUazF8Yc/view",
      alt_name: "SkillUP",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to Containers, Kubernetes, and OpenShift V2",
      subtitle: "cognitiveclass",
      logo_path: "CC.jpg",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/a06484e3c82a433f819c1ceba11a4a41",
      alt_name: "cognitiveclass",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experiences",
      work: true,
      experiences: [
        {
          title: "Full Stack Developer",
          company: "Global Education Ltd",
          company_url: "https://globaledu.net.in/",
          logo_path: "global.jpeg",
          duration: "February 2022 – August 2023",
          location: "Maharashtra, INDIA (Hybrid)",
          description:
            "Architected and deployed an innovative Learning Management System, increasing student engagement by 40%. Executed a mobile-first approach, boosting mobile revenue by 50% and improving user satisfaction by 30%. Developed a multi-tier 'Proctor Quiz' dashboard, minimizing cheating by 80% and reducing admin workload by 30% through features like private file sharing, graph reporting, and automated checks. Utilized React, TypeScript, NestJs/NodeJS, MongoDB, CSS, Bootstrap, and Tailwind.",
          color: "#000000",
        },
        {
          title: "Research Internship",
          company: "Georgia Tech",
          company_url: "https://www.gatech.edu/",
          logo_path: "GT.svg",
          duration: "August 2022 - December 2022",
          location: "Atlanta, United States",
          description:
            "Engaged in an innovative web analysis project under Prof. Frank Li and Dr. Dhruv Kuchhal, comparing landing pages and logged-in pages across over 90 websites. Utilized Python libraries such as Beautiful Soup, regex, and NumPy to collect and analyze web data, focusing on parameters like third-party dependencies, certificates, headers, and security configurations.",
          color: "#0879bf",
        },
        {
          title: "Web developer",
          company: "Oriole Entertainment",
          company_url: "https://www.orioleentertainment.com",
          logo_path: "OE.png",
          duration: "October 2021 – December 2021",
          location: "Freelancing, INDIA",
          description:
            "Engineered a comedy show website with ReactJS, attracting over 12k Instagram followers and increasing the user base by 75%. Implemented a one-click ticketing platform, profile management, and advertisement banners. Utilized Node.js, Express.js, and JavaScript to streamline ticket purchases and enhance user functionality.",
          color: "#9b1578",
        },
        {
          title: "Web developer and Project Manager",
          company: "Sahu Industries",
          company_url: "",
          logo_path: "SU.jpeg",
          duration: "May 2021 – June 2021",
          location: "Remote, INDIA",
          description:
            "Transformed Figma UI designs into a fully functional website using React.js, HTML, CSS, Bootstrap-5, and JavaScript, achieving a 50% increase in site performance and user engagement. Provided mentorship and guidance to 30+ interns, leading to a 40% faster project delivery time and enhancing the development of responsive web pages.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "University Extracurricular Activities",
      experiences: [
        {
          title: "Research Assistant Summer 2024",
          company: "University Of Florida",
          company_url: "https://www.ufl.edu/",
          logo_path: "UF.png",
          duration: "May 2024 - Present",
          location: "Gainesville, US",
          description:
            "Worked as a Research Assistant under Professor Ivan Ruchkin, developing a simulation tool for missiles using ROS2. Contributed to the design and implementation of advanced simulation algorithms, enhancing the accuracy and efficiency of missile simulations.",
          color: "#000000",
        },
        {
          title: "Teaching Assistant Summer 2024",
          company: "University Of Florida",
          company_url: "https://www.ufl.edu/",
          logo_path: "UF.png",
          duration: "May 2024 - Aug 2024",
          location: "Gainesville, US",
          description:
            "Provided support and guidance to students in INTRO TO COMPUTER ORGANIZATION (CDA3101) during Summer 2024, assisting with course-related questions and programming assignments. Modified grading scripts to reduce workload by 50% and collaborated with the instructor to enhance instructional materials, improving the overall learning experience.",
          color: "#000000",
        },
        {
          title: "Teaching Assistant Fall 2024",
          company: "University Of Florida",
          company_url: "https://www.ufl.edu/",
          logo_path: "UF.png",
          duration: "Jan 2024 - May 2024",
          location: "Gainesville, US",
          description:
            "As a Teaching Assistant for SENIOR DESIGN PROJECT (CIS4914) in Fall 2024, reviewed and graded weekly project reports, provided detailed feedback, and offered personalized guidance to enhance project quality. Assisted students in optimizing their GitHub submissions, ensuring code quality and best practices in version control and collaboration.",
          color: "#000000",
        },
        {
          title: "CSI Research Community",
          company: "Bennett University",
          company_url: "https://www.bennett.edu.in/",
          logo_path: "Bennett_University.webp",
          duration: "Feb 2021 - Aug 2021",
          location: "Greater Noida, UF",
          description:
            "Managed a team for sponsorships and led the core research team, maintaining connections between professors and students for research activities.",
          color: "#ee3c26",
        },
        {
          title: "Member of Sponsorship & Outreach Team, Student Council",
          company: "Bennett University",
          company_url: "https://www.bennett.edu.in/",
          logo_path: "Bennett_University.webp",
          duration: "Feb 2021 - Aug 2021",
          location: "Greater Noida, UF",
          description:
            "Served on the Sponsorship & Outreach Team of the Student Council at Bennett University, facilitating partnerships and enhancing student engagement through effective outreach initiatives.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide array of cutting-edge technology tools. I excel in creating full-stack applications and deploying them efficiently. This hands-on experience has honed my skills in both front-end and back-end development, ensuring robust and scalable solutions.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am active on most social media platforms and typically respond within 24 hours. I am currently seeking a full-time job or internship. If my profile interests you, please feel free to reach out to me.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle: "4000 SW BLVD Gainesville, Florida",
    locality: "Gainesville",
    country: "USA",
    region: "Florida",
    postalCode: "32608",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/BLVD+Gainesville/@29.6172036,-82.3776998,15z/data=!4m2!3m1!1s0x0:0xdde82d5dd219c8a3?sa=X&ved=1t:2428&ictx=111",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
