import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "HOME", id: "home" },
    { name: "ABOUT", id: "about" },
    { name: "SKILLS", id: "skills" },
    { name: "WORK", id: "work" },
    { name: "EXPERIENCE", id: "experience" },
  ];

  /* =========================================
     SCROLL SPY
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (!section) return;

        const sectionTop =
          section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = item.id;
        }
      });

      setActive(currentSection);
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  /* =========================================
     SCROLL TO SECTION
  ========================================= */

  const scrollToSection = (id) => {
  const section = document.getElementById(id);

  if (!section) {
    console.warn(`Section #${id} not found`);
    return;
  }

  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setActive(id);
};

  return (
    <header className="adhil-navbar">

      {/* =====================================
          LOGO
      ====================================== */}

      <button
        type="button"
        className="adhil-logo"
        onClick={() =>
          scrollToSection("home")
        }
        aria-label="Go to home"
      >
        ADHIL<span>°</span>
      </button>


      {/* =====================================
          NAVIGATION
      ====================================== */}

      <nav
        className="adhil-nav"
        aria-label="Main navigation"
      >

        {navItems.map(
          (item, index) => (
            <button
              type="button"
              key={item.id}
              className={`adhil-nav-link ${
                active === item.id
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                scrollToSection(
                  item.id
                )
              }
              aria-current={
                active === item.id
                  ? "page"
                  : undefined
              }
            >

              <span className="nav-number">
                {String(index + 1).padStart(
                  2,
                  "0"
                )}
              </span>

              <span className="nav-text">
                {item.name}
              </span>

              <span
                className="nav-dot"
                aria-hidden="true"
              ></span>

            </button>
          )
        )}

      </nav>


      {/* =====================================
          LET'S TALK
      ====================================== */}

      <button
        type="button"
        className="adhil-talk"
        onClick={() =>
          scrollToSection("contact")
        }
      >

        <span>
          CONTACT=ME
        </span>

        <span
          className="talk-arrow"
          aria-hidden="true"
        >
          ↗
        </span>

      </button>

    </header>
  );
}

export default Navbar;