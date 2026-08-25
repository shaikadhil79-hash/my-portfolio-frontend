import "./hero.css";

function Hero() {
  return (
    <section className="adhil-hero" id="home">

      {/* LEFT CONTENT */}
      <div className="adhil-hero-content">

        {/* SMALL INTRO */}
        <div className="adhil-hero-meta">
          <span className="meta-dot"></span>
          <span>WEB DEVELOPER</span>
          <span className="meta-separator">·</span>
          <span>CHENNAI</span>
        </div>


        {/* MAIN TITLE */}
        <h1 className="adhil-hero-title">
          <span>WEB</span>
          <span>DEVELOPER</span>
        </h1>


        {/* SOCIAL LINKS */}
        <div className="adhil-hero-links">

          <a
            href="https://github.com/shaikadhil79-hash"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-arrow">↗</span>
            <span>GITHUB</span>
          </a>

          <a
            href="https://www.linkedin.com/in/shaik-adhil-1051sj"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-arrow">↗</span>
            <span>LINKEDIN</span>
          </a>

        </div>

      </div>


      {/* RIGHT SIDE — YOUR IMAGE */}
      <div className="adhil-hero-photo">

        <img
          src="/images/my-image.png"
          alt="Shaik Adhil - Web Developer"
        />

      </div>


      {/* BOTTOM CIRCLE */}
      <div className="adhil-hero-circle"></div>

    </section>
  );
}

export default Hero;