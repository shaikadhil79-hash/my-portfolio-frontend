import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const sectionRef = useRef(null);
  const [active, setActive] = useState("FRONTEND");

  const skillGroups = {
    FRONTEND: {
      number: "01",
      title: "FRONTEND",
      description:
        "Building responsive, accessible and interactive interfaces with modern frontend technologies.",
      skills: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "GSAP",
        "Responsive Design",
      ],
    },

    BACKEND: {
      number: "02",
      title: "BACKEND",
      description:
        "Connecting frontend experiences with reliable APIs and server-side applications.",
      skills: [
        "Python",
        "Flask",
        "REST APIs",
        "Spring Boot",
        "JWT",
      ],
    },

    DATABASE: {
      number: "03",
      title: "DATABASE",
      description:
        "Working with structured data, SQL queries and application database design.",
      skills: [
        "PostgreSQL",
        "SQL",
        "Database Design",
      ],
    },

    AI: {
      number: "04",
      title: "AI / ML",
      description:
        "Exploring machine learning, NLP and AI-powered features for modern applications.",
      skills: [
        "Python",
        "Machine Learning",
        "NLP",
        "Transformers",
        "AI APIs",
      ],
    },

    TOOLS: {
      number: "05",
      title: "TOOLS",
      description:
        "Using modern development and collaboration tools to build and ship projects.",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Vite",
        "Figma",
      ],
    },
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-label", {
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      gsap.from(".skills-heading", {
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 70%",
        },
        opacity: 0,
        y: 70,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: ".skill-list",
          start: "top 80%",
        },
        opacity: 0,
        x: -40,
        duration: 0.7,
        stagger: 0.12,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = skillGroups[active];

  return (
    <section className="skills-section" ref={sectionRef}>

      <div className="skills-top">
        <div className="skills-label">
          03 — EXPERTISE
        </div>

        <div className="skills-line"></div>
      </div>

      <div className="skills-heading">
        <span>WHAT I</span>
        <span className="skills-outline">WORK WITH.</span>
      </div>

      <div className="skills-layout">

        <div className="skill-list">
          {Object.values(skillGroups).map((group) => (
            <button
              key={group.title}
              className={`skill-category ${
                active === group.title ? "active" : ""
              }`}
              onMouseEnter={() => setActive(group.title)}
              onClick={() => setActive(group.title)}
            >
              <span>{group.number}</span>
              <strong>{group.title}</strong>
              <span className="skill-arrow">↗</span>
            </button>
          ))}
        </div>

        <div className="skill-display">

          <div className="skill-display-number">
            {current.number}
          </div>

          <h3>{current.title}</h3>

          <p>{current.description}</p>

          <div className="skill-tags">
            {current.skills.map((skill) => (
              <span key={skill}>
                {skill}
              </span>
            ))}
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;