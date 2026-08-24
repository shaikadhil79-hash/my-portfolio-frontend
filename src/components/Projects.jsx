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

    accent: "blue",
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

    accent: "green",
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

    accent: "violet",
  },
];

function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* ================================
         SECTION LABEL
      ================================= */

      gsap.from(".projects-label", {
        scrollTrigger: {
          trigger: ".projects-section",
          start: "top 80%",
          once: true,
        },

        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });


      /* ================================
         SECTION HEADING
      ================================= */

      gsap.from(".projects-heading span", {
        scrollTrigger: {
          trigger: ".projects-heading",
          start: "top 80%",
          once: true,
        },

        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });


      /* ================================
         PROJECT SLIDES
      ================================= */

      gsap.utils
        .toArray(".project-slide")
        .forEach((slide) => {

          const image =
            slide.querySelector(
              ".project-slide-image"
            );

          const content =
            slide.querySelector(
              ".project-slide-content"
            );


          /* IMAGE ANIMATION */

          gsap.from(image, {
            scrollTrigger: {
              trigger: slide,
              start: "top 80%",
              once: true,
            },

            opacity: 0,

            x: slide.classList.contains(
              "reverse"
            )
              ? 80
              : -80,

            duration: 1,

            ease: "power4.out",
          });


          /* CONTENT ANIMATION */

          gsap.from(content, {
            scrollTrigger: {
              trigger: slide,
              start: "top 80%",
              once: true,
            },

            opacity: 0,

            x: slide.classList.contains(
              "reverse"
            )
              ? -60
              : 60,

            duration: 1,

            delay: 0.15,

            ease: "power4.out",
          });

        });

    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      id="work"
      className="projects-section"
      ref={sectionRef}
    >

      {/* =================================
          SECTION HEADER
      ================================== */}

      <div className="projects-top">

        <div className="projects-label">
          04 — SELECTED WORK
        </div>

        <div className="projects-line"></div>

      </div>


      {/* =================================
          MAIN HEADING
      ================================== */}

      <div className="projects-heading">

        <span>
          THINGS
        </span>

        <span className="projects-outline">
          I'VE BUILT.
        </span>

      </div>


      {/* =================================
          PROJECT LIST
      ================================== */}

      <div className="projects-list">

        {projects.map(
          (project, index) => (

            <article
              className={`project-slide ${
                index % 2 !== 0
                  ? "reverse"
                  : ""
              }`}

              key={project.number}
            >

              {/* ===========================
                  PROJECT NUMBER
              ============================ */}

              <div className="project-slide-number">

                <span>
                  {project.number}
                </span>

                <small>
                  {project.year}
                </small>

              </div>


              {/* ===========================
                  PROJECT IMAGE
              ============================ */}

              <div
                className={`project-slide-image ${project.accent}`}
              >

                <img
                  src={project.image}
                  alt={`${project.title} project`}
                />

                <div className="project-image-overlay">

                  <span>
                    PROJECT {project.number}
                  </span>

                  <strong>
                    ↗
                  </strong>

                </div>

              </div>


              {/* ===========================
                  PROJECT CONTENT
              ============================ */}

              <div className="project-slide-content">

                <div className="project-category">
                  {project.category}
                </div>


                <h3>
                  {project.title}
                </h3>


                <p className="project-description">
                  {project.description}
                </p>


                {/* =========================
                    WHAT I DID
                ========================== */}

                <div className="project-details">

                  <div className="project-detail-title">
                    WHAT I DID
                  </div>

                  <div className="project-responsibilities">

                    {project.responsibilities.map(
                      (item, i) => (

                        <div
                          className="project-responsibility"
                          key={i}
                        >

                          <span>
                            +
                          </span>

                          <p>
                            {item}
                          </p>

                        </div>

                      )
                    )}

                  </div>

                </div>


                {/* =========================
                    TECHNOLOGIES
                ========================== */}

                <div className="project-tech-section">

                  <div className="project-detail-title">
                    TECHNOLOGIES
                  </div>

                  <div className="project-tech">

                    {project.technologies.map(
                      (tech) => (

                        <span
                          key={tech}
                        >
                          {tech}
                        </span>

                      )
                    )}

                  </div>

                </div>

              </div>

            </article>

          )
        )}

      </div>

    </section>
  );
}

export default Projects;