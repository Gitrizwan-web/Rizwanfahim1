const navLinks = [
  { name: "Work", link: "#work" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Testimonials", link: "#testimonials" },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { id: 1, value: 2, suffix: "+", label: "Years of Learning & Practice" },
  { id: 2, value: 15, suffix: "+", label: "Projects Built" },
  { id: 3, value: 100, suffix: "%", label: "Dedication to Web Development" },
  { id: 4, value: 1, suffix: "", label: "Goal: Become MERN Developer" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results with attention to detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Communication",
    desc: "Clear and consistent communication throughout projects.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Ensuring projects are completed on schedule.",
  },
];

const techStackImgs = [
  { name: "React", imgPath: "/images/logos/react.png" },
  { name: "Node", imgPath: "/images/logos/node.png" },
  { name: "Three.js", imgPath: "/images/logos/three.png" },
  { name: "Git", imgPath: "/images/logos/git.svg" },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    id: 4,
    type: "learning",
    title: "Saylani Mass IT Training (SMIT)",
    logoPath: "/images/saylani-logo.png",
    imgPath: "/images/saylani.jpg",
    date: "January 2024",
    review:
      "Built strong fundamentals in frontend development through structured learning, hands-on projects, and continuous practice. This foundation enabled my transition into professional roles.",
    responsibilities: [
      "Mastered HTML5, CSS3, and JavaScript ES6+ fundamentals",
      "Built responsive UI components with Tailwind CSS and Bootstrap",
      "Learned React hooks, context API, and component lifecycle",
      "Practiced building reusable, maintainable components",
      "Completed 15+ projects with version control using Git",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Git"],
  },
  {
    id: 5,
    type: "project",
    title: "Job Portal Web App",
    logoPath: "/images/job-logo.png",
    imgPath: "/images/job-portal.jpg",
    date: "February 2025",

    review:
      "Built a full-featured job portal project using React concepts. Demonstrates proficiency in component composition, state management, and API integration.",
    responsibilities: [
      "Designed and implemented responsive job listing UI with advanced filtering",
      "Created reusable React components for job cards, filters, and pagination",
      "Integrated with REST API to fetch job data dynamically",
      "Implemented user authentication and job favorites feature",
      "Deployed to Vercel with CI/CD pipeline using GitHub Actions",
    ],
    skills: ["React", "JavaScript", "CSS", "REST APIs", "Vercel"],
  },
  {
    id: 6,
    type: "project",
    title: "Ecommerce & Instagram Clone",
    logoPath: "/images/ecommerce-logo.png",
    imgPath: "/images/ecommerce.jpg",
    date: "March 2025 ",

    review:
      "Built UI clones for e-commerce and social media platforms to deepen React knowledge and practice modern web development patterns.",
    responsibilities: [
      "Replicated Ecommerce UI with product listings, shopping cart, and checkout flow",
      "Built Instagram feed with infinite scroll and like/comment features",
      "Used React hooks and context API for state management",
      "Implemented responsive design for mobile and desktop",
      "Practiced code organization and component reusability",
    ],
    skills: [
      "React",
      "JavaScript",
      "CSS",
      "State Management",
      "Responsive Design",
    ],
  },
];

const socialImgs = [
  { 
    name: "insta", 
    imgPath: "/images/insta.png",
    url: "https://www.instagram.com/rizwanfahim004/"
  },
  { 
    name: "fb", 
    imgPath: "/images/fb.png",
    url: "https://www.facebook.com/profile.php?id=100074311818687"
  },
  { 
    name: "linkedin", 
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/rizwan-fahim-gitrizwan-web/"
  },
];
const testimonials = [
  {
    id: 1,
    name: "Esther Howard",
    mentions: "@estherhoward",
    role: "CEO",
    company: "Creative Studios",
    location: "New York, USA",
    review:
      "I can't say enough good things about Rizwan. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    id: 2,
    name: "Wade Warren",
    mentions: "@wadewarren",
    role: "Startup Founder",
    company: "TechVenture",
    location: "San Francisco, USA",
    review:
      "Working with Rizwan was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    id: 3,
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    role: "Marketing Manager",
    company: "Digital Growth Co.",
    location: "Los Angeles, USA",
    review:
      "Collaborating with Rizwan was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rizwan enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rizwan is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    id: 4,
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    role: "Project Lead",
    company: "WebSolutions Inc.",
    location: "Austin, USA",
    review:
      "Rizwan was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that's both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    id: 5,
    name: "Floyd Miles",
    mentions: "@floydmiles",
    role: "E-commerce Manager",
    company: "ShopHub Online",
    location: "Miami, USA",
    review:
      "Rizwan expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He's a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    id: 6,
    name: "Albert Flores",
    mentions: "@albertflores",
    role: "Tech Director",
    company: "Innovation Labs",
    location: "Seattle, USA",
    review:
      "Rizwan was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
