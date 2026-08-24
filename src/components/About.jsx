import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-label", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      gsap.from(".about-title", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 70%",
        },
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".about-text", {
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 1,
        delay: 0.2,
      });

      gsap.from(".about-stat", {
        scrollTrigger: {
          trigger: ".about-stats",
          start: "top 80%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" ref={sectionRef}>

      <div className="about-top">
        <div className="about-label">
          02 — ABOUT ME
        </div>

        <div className="about-line"></div>
      </div>

      <div className="about-content">

        <h2 className="about-title">
          I DON'T JUST BUILD
          <br />
          <span>WEBSITES.</span>
        </h2>

        <div className="about-text">
          <p>
            I'm Adhil, a Frontend Developer focused on building
            modern, responsive and interactive digital experiences.
          </p>

          <p>
            I enjoy turning ideas and designs into functional
            interfaces using React, JavaScript, HTML and CSS.
            I also work with Python, APIs, databases and AI-powered
            applications.
          </p>

          <p>
            My goal is simple — create interfaces that look great,
            feel natural and perform smoothly across every device.
          </p>
        </div>

      </div>

      <div className="about-stats">

        <div className="about-stat">
          <span className="stat-number">04+</span>
          <span className="stat-label">PROJECTS</span>
        </div>

        <div className="about-stat">
          <span className="stat-number">03+</span>
          <span className="stat-label">INTERNSHIPS</span>
        </div>

        <div className="about-stat">
          <span className="stat-number">2026</span>
          <span className="stat-label">GRADUATION</span>
        </div>

        <div className="about-stat">
          <span className="stat-number">∞</span>
          <span className="stat-label">CURIOSITY</span>
        </div>

      </div>

    </section>
  );
}

export default About;