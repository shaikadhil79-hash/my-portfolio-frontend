import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".education-label", {
        scrollTrigger: {
          trigger: ".education-section",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      gsap.from(".education-heading", {
        scrollTrigger: {
          trigger: ".education-section",
          start: "top 70%",
        },
        opacity: 0,
        y: 70,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".education-card", {
        scrollTrigger: {
          trigger: ".education-card",
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="education-section" ref={sectionRef}>

      <div className="education-top">
        <div className="education-label">
          06 — EDUCATION
        </div>

        <div className="education-line"></div>
      </div>

      <div className="education-heading">
        <span>WHERE I'VE</span>
        <span className="education-outline">LEARNED.</span>
    </div>

      <div className="education-card">

        <div className="education-year">
          2022 — 2026
        </div>

        <div className="education-content">

          <div className="education-degree">
            B.Tech
          </div>

          <div className="education-field">
            INFORMATION TECHNOLOGY
          </div>

          <h3>
            Meenakshi College of Engineering
          </h3>

          <p>
            Chennai, Tamil Nadu
          </p>

          <div className="education-details">

            <div>
              <span>DEGREE</span>
              <strong>B.Tech IT</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>2026 Graduate</strong>
            </div>

            <div>
              <span>FOCUS</span>
              <strong>Web Development</strong>
            </div>

          </div>

        </div>

        <div className="education-mark">
          07
        </div>

      </div>

    </section>
  );
}

export default Education;