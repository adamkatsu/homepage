import avatar from "../assets/adamkatsu.png";
import ScrambleText from "../components/ScrambleText";

export default function Hero() {

  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-title">
          <span className="txt-name">
            Hi! I’m Adam Katsu 
            <span className="txt-regular">⋆˙⟡(˶ˆ▽ˆ˵)⟡˙⋆</span>
          </span>
          <ScrambleText text="Front-End Web Developer Based In Indonesia"/>
        </div>
        <div className="hero-main">
          <div className="hero-main-image">
            <img src={avatar} alt="Adam Katsu" />
          </div>
          <div className="hero-main-description">
            <p>
            Not here for boring websites. I craft clean, powerful builds that are ready to roll — with a focus on <span className="cl-orange">Webflow</span> and <span className="cl-orange">Shopify</span>, plus everything else to bring your vision to life. 
            <br /><br />
            From custom sites to smart e-commerce solutions, I’m here to make sure your brand stands out, shows up, and actually hits. Let’s create something that leaves a mark.
            </p>
            <div className="hero-main-cta">
              <p className="txt-slots">
                ⋆˙⟡ <span className="cl-orange">[1]</span> Slot(s) Available ! ⋆˙⟡
              </p>
              <div className="cta-wrapper">
                <div className="cta-item">
                  <span className="cta-title">★ Email</span>
                  <a href="mailto:adamkatsu369@gmail.com" className="txt-link">adamkatsu369@gmail.com</a>
                </div>
                <div className="cta-item">
                  <span className="cta-title">★ Social Media</span>
                  <div className="socials-wrapper">
                    <a target="_blank" href="https://www.linkedin.com/in/adamkatsu/" className="txt-link">LinkedIn</a>
                    <a target="_blank" href="https://github.com/adamkatsu" className="txt-link">Github</a>
                    <a target="_blank" href="https://www.instagram.com/_k_a_t_s_u._/" className="txt-link">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}