import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const internships = [
  {
    number: "01",
    year: "2025",

    title: "MACHINE LEARNING",
    role: "Machine Learning Intern",
    company: "Neural Transformer AI",

    category: "MACHINE LEARNING / NLP",

    image: "/images/machine-learning.png",

    description:
      "Worked on machine learning and natural language processing solutions, gaining practical experience in transformer-based models and intelligent text classification.",

    details: [
      "Developed an MT599 financial message classification system.",
      "Worked with Natural Language Processing and transformer-based models.",
      "Implemented message classification and filtering functionality.",
      "Built an interactive Streamlit interface for the application.",
      "Implemented role-based authentication for application access.",
      "Worked with model integration and application deployment.",
    ],

    technologies: [
      "Python",
      "Machine Learning",
      "NLP",
      "Transformers",
      "Streamlit",
    ],
  },

  {
    number: "02",
    year: "2025",

    title: "ESSENTIAL IoT",
    role: "Essential IoT Training",
    company: "NSIC",

    category: "INTERNET OF THINGS",

    image: "/images/iot.png",

    description:
      "Gained hands-on experience with Internet of Things concepts, Arduino-based development, embedded programming and electronic circuit simulation.",

    details: [
      "Worked with Arduino IDE and Arduino-based development.",
      "Learned the fundamentals of embedded programming.",
      "Worked with data transfer between devices and Arduino.",
      "Created basic IoT experiments using Arduino boards.",
      "Used Proteus for circuit design and simulation.",
      "Learned fundamental concepts of sensors, circuits and IoT systems.",
    ],

    technologies: [
      "Arduino",
      "Arduino IDE",
      "Proteus",
      "IoT",
      "Embedded Systems",
    ],
  },

  {
    number: "03",
    year: "2024",

    title: "CORE JAVA",
    role: "Full-Stack Development Trainee",
    company: "TNS India Foundation × Capgemini",

    category: "FULL-STACK DEVELOPMENT",

    image: "/images/core-java.png",

    description:
      "Completed practical full-stack development training covering frontend development, backend development, REST APIs and database integration.",

    details: [
      "Developed responsive frontend interfaces using Angular.",
      "Worked with Core Java programming concepts.",
      "Developed backend applications using Spring Boot.",
      "Created and integrated REST APIs.",
      "Worked with SQL databases and application data.",
      "Built a practical full-stack mini project.",
    ],

    technologies: [
      "Angular",
      "Java",
      "Spring Boot",
      "REST API",
      "SQL",
    ],
  },
];

function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".experience-label", {
        scrollTrigger: {
          trigger: ".experience-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      gsap.from(".experience-heading span", {
        scrollTrigger: {
          trigger: ".experience-heading",
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });

     
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="experience-section"
      ref={sectionRef}
    >
      {/* SECTION HEADER */}

      <div className="experience-top">
        <div className="experience-label">
          05 — INTERNSHIPS
        </div>

        <div className="experience-line"></div>
      </div>

      <div className="experience-heading">
        <span>THE FOUNDATION</span>

        <span className="experience-outline">
          BEHIND THE WORK.
        </span>
      </div>

      {/* INTERNSHIPS */}

      <div className="internships-list">
        {internships.map((internship, index) => (
          <article
            className={`internship-slide ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
            key={internship.number}
          >
            {/* NUMBER */}

            <div className="internship-number">
              <span>{internship.number}</span>

              <small>{internship.year}</small>
            </div>

            {/* IMAGE */}

            <div className="internship-image">
              <img
                src={internship.image}
                alt={`${internship.title} internship`}
              />

              <div className="internship-image-overlay">
                <span>
                  INTERNSHIP {internship.number}
                </span>

                <strong>↗</strong>
              </div>
            </div>

            {/* CONTENT */}

            <div className="internship-content">
              <div className="internship-category">
                {internship.category}
              </div>

              <h3>{internship.title}</h3>

              <div className="internship-role">
                {internship.role}
              </div>

              <div className="internship-company">
                {internship.company}
              </div>

              <p className="internship-description">
                {internship.description}
              </p>

              {/* DETAILS */}

              <div className="internship-details">
                <div className="internship-detail-title">
                  WHAT I LEARNED & DID
                </div>

                <div className="internship-points">
                  {internship.details.map(
                    (detail, i) => (
                      <div
                        className="internship-point"
                        key={i}
                      >
                        <span>+</span>

                        <p>{detail}</p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* TECHNOLOGIES */}

              <div className="internship-tech-section">
                <div className="internship-detail-title">
                  TECHNOLOGIES
                </div>

                <div className="internship-tech">
                  {internship.technologies.map(
                    (technology) => (
                      <span key={technology}>
                        {technology}
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

export default Experience;