

function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-label">
          ✦ INDEPENDENT CREATIVE AGENCY
        </p>

        <h1>
          We turn ideas into
          <br />
          <span>digital experiences.</span>
        </h1>

        <p className="hero-description">
          We are a creative studio passionate about building
          beautiful brands, meaningful digital experiences,
          and innovative solutions that make an impact.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button">
            Explore Our Work 
          </a>

          <a href="#about" className="secondary-button">
            Learn More
          </a>
        </div>

      </div>

      <div className="hero-decoration">
        <div className="decoration-circle">
          <span>CREATIVITY</span>
          <h2>∞</h2>
          <span>WITHOUT LIMITS</span>
        </div>
      </div>

    </section>
  );
}

export default Hero;
