import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "A-ONE FREEZE",
    category: "SERVICE BOOKING PLATFORM",
    year: "2026",
    image: "/images/a-one-freeze.png",

    description:
      "A modern service booking platform designed to connect customers with appliance service technicians and simplify the complete booking experience.",

    responsibilities: [
      "Designed and developed responsive frontend interfaces.",
      "Created service selection and booking flows.",
      "Implemented customer profile and address management.",
      "Built booking status and technician tracking interfaces.",
      "Integrated frontend with REST APIs.",
    ],

    technologies: [
      "React",
      "JavaScript",
      "Python",
      "PostgreSQL",
      "REST API",
    ],
  },

  {
    number: "02",
    title: "FITNESS TRACKER",
    category: "AI FITNESS PLATFORM",
    year: "2026",
    image: "/images/fitness-tracking.png",

    description:
      "An interactive fitness tracking platform that helps users monitor workouts, nutrition, goals and personal progress with AI-powered features.",

    responsibilities: [
      "Designed a modern responsive fitness dashboard.",
      "Built workout and exercise tracking interfaces.",
      "Created nutrition and diet planning modules.",
      "Developed AI Coach interaction interface.",
      "Implemented progress analytics and visualizations.",
    ],

    technologies: [
      "React",
      "JavaScript",
      "Python",
      "Flask",
      "PostgreSQL",
    ],
  },

  {
    number: "03",
    title: "E-PANCHAYAT",
    category: "E-GOVERNANCE PLATFORM",
    year: "2026",
    image: "/images/e-panchayat.png",

    description:
      "A digital e-governance platform designed to simplify citizen services including certificate applications, complaint management and service tracking.",

    responsibilities: [
      "Designed citizen-facing service interfaces.",
      "Built certificate application workflows.",
      "Created complaint management interfaces.",
      "Implemented application status tracking.",
      "Integrated secure authentication and REST APIs.",
    ],

    technologies: [
      "Angular",
      "Spring Boot",
      "PostgreSQL",
      "REST API",
      "JWT",
    ],
  },
];

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================================
         SECTION HEADER
      ========================================= */

      gsap.fromTo(
        ".projects-label",
        {
          opacity: 0,
          y: 25,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-section",
            start: "top 85%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".projects-heading span",
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".projects-heading",
            start: "top 85%",
            once: true,
          },
        }
      );

      /* =========================================
         PROJECT CARDS
      ========================================= */

      const slides =
        gsap.utils.toArray(".project-slide");

      slides.forEach((slide) => {
        const image =
          slide.querySelector(
            ".project-slide-image"
          );

        const content =
          slide.querySelector(
            ".project-slide-content"
          );

        const isReverse =
          slide.classList.contains("reverse");

        /*
         * IMPORTANT:
         * Keep the project visible by default.
         * Animation is added only when it enters view.
         */
        gsap.set(image, {
          opacity: 1,
          x: 0,
          visibility: "visible",
        });

        gsap.set(content, {
          opacity: 1,
          x: 0,
          visibility: "visible",
        });

        ScrollTrigger.create({
          trigger: slide,
          start: "top 85%",
          once: true,

          onEnter: () => {
            gsap.fromTo(
              image,
              {
                opacity: 0,
                x: isReverse ? 70 : -70,
              },
              {
                opacity: 1,
                x: 0,
                duration: 0.9,
                ease: "power3.out",
              }
            );

            gsap.fromTo(
              content,
              {
                opacity: 0,
                x: isReverse ? -50 : 50,
              },
              {
                opacity: 1,
                x: 0,
                duration: 0.9,
                delay: 0.12,
                ease: "power3.out",
              }
            );
          },
        });
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="work"
      className="projects-section"
      ref={sectionRef}
    >
      {/* =========================================
          SECTION HEADER
      ========================================= */}

      <div className="projects-top">
        <div className="projects-label">
          04 — SELECTED WORK
        </div>

        <div className="projects-line" />
      </div>

      {/* =========================================
          HEADING
      ========================================= */}

      <div className="projects-heading">
        <span>THINGS</span>

        <span className="projects-outline">
          I&apos;VE BUILT.
        </span>
      </div>

      {/* =========================================
          PROJECT LIST
      ========================================= */}

      <div className="projects-list">
        {projects.map((project, index) => (
          <article
            className={`project-slide ${
              index % 2 !== 0
                ? "reverse"
                : ""
            }`}
            key={project.number}
          >
            {/* PROJECT NUMBER */}

            <div className="project-slide-number">
              <span>{project.number}</span>

              <small>{project.year}</small>
            </div>

            {/* PROJECT IMAGE */}

            <div className="project-slide-image">
              <img
                src={project.image}
                alt={`${project.title} project`}
              />

              <div className="project-image-overlay">
                <span>
                  PROJECT {project.number}
                </span>

                <strong>↗</strong>
              </div>
            </div>

            {/* PROJECT CONTENT */}

            <div className="project-slide-content">
              <div className="project-category">
                {project.category}
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              {/* WHAT I DID */}

              <div className="project-details">
                <div className="project-detail-title">
                  WHAT I DID
                </div>

                <div className="project-responsibilities">
                  {project.responsibilities.map(
                    (item) => (
                      <div
                        className="project-responsibility"
                        key={item}
                      >
                        <span>+</span>

                        <p>{item}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* TECHNOLOGIES */}

              <div className="project-tech-section">
                <div className="project-detail-title">
                  TECHNOLOGIES
                </div>

                <div className="project-tech">
                  {project.technologies.map(
                    (tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;