import React from "react";
import Card from "./Card";
import "./App.css";

// Import images from the assets folder
import reactLogo from "./assets/react.svg";
import jsLogo from "./assets/js.png";
import cssTricksLogo from "./assets/csstricks.png";
import mdnLogo from "./assets/mdn.png";
import frontendMentorLogo from "./assets/frontendmentor.png";
import tailwindLogo from "./assets/tailwindcss.svg";
import codeSandboxLogo from "./assets/codesandbox.jpg";
import netlifyLogo from "./assets/netlify.png";
import githubLogo from "./assets/github.png";
import jsInfoLogo from "./assets/js-info.png";

const App = () => {
  const resources = [
    {
      title: "React Basics",
      description: "Learn the basics of React.",
      link: "https://reactjs.org",
      image: reactLogo, // React logo
    },
    {
      title: "JavaScript Essentials",
      description: "Master JavaScript fundamentals.",
      link: "https://javascript.com",
      image: jsLogo, // JavaScript logo
    },
    {
      title: "CSS Tricks",
      description: "Advanced CSS tricks for responsive design.",
      link: "https://css-tricks.com",
      image: cssTricksLogo, // CSS Tricks logo
    },
    {
      title: "MDN Web Docs",
      description:
        "Comprehensive guides and documentation for web development.",
      link: "https://developer.mozilla.org",
      image: mdnLogo, // MDN logo
    },
    {
      title: "Frontend Mentor",
      description: "Practice frontend development projects.",
      link: "https://frontendmentor.io",
      image: frontendMentorLogo, // Frontend Mentor logo
    },
    {
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development.",
      link: "https://tailwindcss.com",
      image: tailwindLogo, // Tailwind CSS logo
    },
    {
      title: "CodeSandbox",
      description: "An online code editor tailored for frontend developers.",
      link: "https://codesandbox.io",
      image: codeSandboxLogo, // CodeSandbox logo
    },
    {
      title: "Netlify",
      description: "Deploy your frontend projects with ease.",
      link: "https://netlify.com",
      image: netlifyLogo, // Netlify logo
    },
    {
      title: "GitHub",
      description: "Collaborate and host your frontend projects.",
      link: "https://github.com",
      image: githubLogo, // GitHub logo
    },
    {
      title: "JavaScript.info",
      description: "Deep dive into JavaScript, the language of the web.",
      link: "https://javascript.info",
      image: jsInfoLogo, // JavaScript.info logo
    },
  ];

  return (
    <div>
      <header>
        <h1>Web Development Resource Board</h1>
        <p>Your go-to resources for mastering web development</p>
      </header>

      <div className="card-container">
        {resources.map((resource, index) => (
          <Card
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
            image={resource.image} // Pass the image prop
          />
        ))}
      </div>
    </div>
  );
};

export default App;
