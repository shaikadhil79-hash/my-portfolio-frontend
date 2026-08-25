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
        "REST APIs",
        "JWT",
      ],
    },

    LANGUAGES: {
      number: "03",
      title: "LANGUAGES",
      description:
        "Programming languages used across my web development, backend, database and AI projects.",
      skills: [
        "JavaScript",
        "Python",
        "SQL",
      ],
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Keep everything visible by default.
      gsap.set(
        [
          ".skills-label",
          ".skills-heading",
          ".skill-category",
          ".skill-display",
        ],
        {
          opacity: 1,
          clearProps: "transform",
        }
      );

      // Section label animation
      gsap.from(".skills-label", {
        scrollTrigger: {
          trigger: ".skills-section",
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 25,
        duration: 0.6,
        ease: "power3.out",
      });

      // Heading animation
      gsap.from(".skills-heading", {
        scrollTrigger: {
          trigger: ".skills-heading",
          start: "top 85%",
          once: true,
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power4.out",
      });

      // Left skill categories
      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: ".skill-list",
          start: "top 90%",
          once: true,
        },
        opacity: 0,
        x: -30,
        duration: 0.55,
        stagger: 0.08,
        ease: "power3.out",
      });

      // Right display card
      gsap.from(".skill-display", {
        scrollTrigger: {
          trigger: ".skill-display",
          start: "top 90%",
          once: true,
        },
        opacity: 0,
        x: 30,
        duration: 0.7,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const current = skillGroups[active];

  return (
    <section
      className="skills-section"
      id="skills"
      ref={sectionRef}
    >
      <div className="skills-top">
        <div className="skills-label">
          03 — EXPERTISE
        </div>

        <div className="skills-line"></div>
      </div>

      <div className="skills-heading">
        <span>WHAT I</span>

        <span className="skills-outline">
          WORK WITH.
        </span>
      </div>

      <div className="skills-layout">
        {/* LEFT — SKILL CATEGORIES */}
        <div className="skill-list">
          {Object.values(skillGroups).map((group) => (
            <button
              type="button"
              key={group.title}
              className={`skill-category ${
                active === group.title
                  ? "active"
                  : ""
              }`}
              onMouseEnter={() =>
                setActive(group.title)
              }
              onClick={() =>
                setActive(group.title)
              }
            >
              <span>{group.number}</span>

              <strong>{group.title}</strong>

              <span className="skill-arrow">
                ↗
              </span>
            </button>
          ))}
        </div>

        {/* RIGHT — ACTIVE SKILL CARD */}
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