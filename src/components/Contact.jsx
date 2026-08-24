import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);

  const [status, setStatus] = useState("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-label", {
        scrollTrigger: {
          trigger: ".contact-section",
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });

      gsap.from(".contact-heading span", {
        scrollTrigger: {
          trigger: ".contact-heading",
          start: "top 75%",
        },
        opacity: 0,
        y: 80,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });

      gsap.from(".contact-main", {
        scrollTrigger: {
          trigger: ".contact-main",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    setStatus("SENDING...");

    try {
      await emailjs.sendForm(
        "service_i2l35kk",
        "template_dgnxabz",
        formRef.current,
        {
          publicKey: "RQblZp59f8Uzjdfzj",
        }
      );

      setStatus("MESSAGE SENT ✓");

      formRef.current.reset();

      setTimeout(() => {
        setStatus("");
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus("FAILED TO SEND");

      setTimeout(() => {
        setStatus("");
      }, 4000);
    }
  };

  return (
    <section
      className="contact-section"
      id="contact"
      ref={sectionRef}
    >
      {/* SECTION HEADER */}

      <div className="contact-top">
        <div className="contact-label">
          07 — CONTACT
        </div>

        <div className="contact-line"></div>
      </div>


      {/* MAIN HEADING */}

      <div className="contact-heading">
        <span>AVAILABLE FOR</span>

        <span className="contact-outline">
          DISCUSSION.
        </span>
      </div>


      {/* CONTACT CONTENT */}

      <div className="contact-main">

        {/* LEFT SIDE */}

        <div className="contact-intro">

          <p>
            Have a project, opportunity or idea
            you'd like to discuss?
          </p>

          <p>
            Send me a message and I'll get back
            to you as soon as possible.
          </p>


          {/* DIRECT CONTACT */}

          <div className="contact-direct">

            <div className="direct-label">
              DIRECT CONTACT
            </div>

            <a
              href="mailto:shaikadhil79@gmail.com"
              className="direct-email"
            >
              <span>
                shaikadhil79@gmail.com
              </span>

              <span>↗</span>
            </a>

            <a
              href="tel:+919363965359"
              className="direct-phone"
            >
              <span>
                +91 93639 65359
              </span>

              <span>↗</span>
            </a>

          </div>

        </div>


        {/* CONTACT FORM */}

        <form
          className="contact-form"
          ref={formRef}
          onSubmit={sendEmail}
        >

          {/* NAME + EMAIL */}

          <div className="form-row">

            <div className="form-field">

              <label>
                YOUR NAME
              </label>

              <input
                type="text"
                name="from_name"
                placeholder="John Doe"
                required
              />

            </div>


            <div className="form-field">

              <label>
                EMAIL
              </label>

              <input
                type="email"
                name="from_email"
                placeholder="john@example.com"
                required
              />

            </div>

          </div>


          {/* SUBJECT */}

          <div className="form-field">

            <label>
              SUBJECT
            </label>

            <input
              type="text"
              name="subject"
              placeholder="Project / Job Opportunity"
              required
            />

          </div>


          {/* MESSAGE */}

          <div className="form-field">

            <label>
              MESSAGE
            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project or opportunity..."
              required
            ></textarea>

          </div>


          {/* SEND BUTTON */}

          <button
            type="submit"
            className="send-button"
          >

            <span>
              {status || "SEND MESSAGE"}
            </span>

            <span>
              ↗
            </span>

          </button>

        </form>

      </div>


      {/* FOOTER */}

      <footer className="footer">

        <div>
          © 2026 ADHIL
        </div>

        <div>
          FRONTEND DEVELOPER
        </div>

        <div>
          CHENNAI, INDIA
        </div>

      </footer>

    </section>
  );
}

export default Contact;