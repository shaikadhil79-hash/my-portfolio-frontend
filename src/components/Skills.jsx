import { useState } from "react";

const skillGroups = {
  FRONTEND: {
    number: "01",
    title: "FRONTEND",
    description:
      "Building modern, responsive and interactive web interfaces with clean component architecture and smooth animations.",
    skills: [
      "React",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Angular",
      "GSAP",
      "Responsive Design",
    ],
  },

  BACKEND: {
    number: "02",
    title: "BACKEND",
    description:
      "Developing server-side applications and REST APIs that connect web interfaces with business logic, authentication and data services.",
    skills: [
      "Python",
      "Flask",
      "Java",
      "Spring Boot",
      "REST APIs",
      "JWT",
    ],
  },

  LANGUAGES: {
    number: "03",
    title: "LANGUAGES",
    description:
      "Programming languages used across web development, backend systems, databases and AI projects.",
    skills: ["JavaScript", "Python", "Java", "SQL"],
  },

  DATABASE: {
    number: "04",
    title: "DATABASE",
    description:
      "Working with structured application data using relational databases, SQL queries and practical database design.",
    skills: [
      "PostgreSQL",
      "SQL",
      "Database Design",
      "CRUD Operations",
      "Relationships",
    ],
  },

  AI: {
    number: "05",
    title: "AI / ML",
    description:
      "Exploring machine learning and NLP to build intelligent features and smarter application experiences.",
    skills: [
      "Python",
      "Machine Learning",
      "NLP",
      "Transformers",
      "Text Classification",
      "AI Integration",
    ],
  },

  TOOLS: {
    number: "06",
    title: "TOOLS",
    description:
      "Using modern development, testing, version-control and design tools throughout the application lifecycle.",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Vite",
      "npm",
      "Figma",
    ],
  },
};

function Skills() {
  const [active, setActive] = useState("FRONTEND");

  const current = skillGroups[active];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-top">
        <div className="skills-label">03 — EXPERTISE</div>
        <div className="skills-line" />
      </div>

      <div className="skills-heading">
        <span>WHAT I</span>
        <span className="skills-outline">WORK WITH.</span>
      </div>

      <div className="skills-layout">
        <div className="skill-list">
          {Object.values(skillGroups).map((group) => (
            <button
              type="button"
              key={group.title}
              className={`skill-category ${
                active === group.title ? "active" : ""
              }`}
              onMouseEnter={() => setActive(group.title)}
              onFocus={() => setActive(group.title)}
              onClick={() => setActive(group.title)}
            >
              <span>{group.number}</span>
              <strong>{group.title}</strong>
              <span className="skill-arrow">↗</span>
            </button>
          ))}
        </div>

        <div className="skill-display">
          <div className="skill-display-content" key={active}>
            <div className="skill-display-number">
              {current.number}
            </div>

            <h3>{current.title}</h3>

            <p>{current.description}</p>

            <div className="skill-tags">
              {current.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;