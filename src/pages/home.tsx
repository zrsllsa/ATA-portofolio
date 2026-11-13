import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AutoVideo from "../components/AutoVideo.tsx";
import FrameImage from "../components/FrameImage.tsx";
import PhotoGrid from "../components/PhotoGrid.tsx";
import ScrollReveal from "../components/ScrollReveal.tsx";
import {
  backgrounds,
  galleryCards,
  homeIntro,
  homePhotos,
  portfolioIntro,
} from "../data/site.ts";

function Hero() {
  const mediaRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const media = mediaRef.current;
    if (!media) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const update = () => {
      const distance = Math.min(Math.max(window.scrollY / (window.innerHeight * 0.92), 0), 1);
      media.style.opacity = String(1 - distance);
      media.style.transform = `translate3d(0, ${-distance * 36}px, 0) scale(${1.05 - distance * 0.05})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="hero-fixed" aria-hidden="true">
      <div className="hero-media" ref={mediaRef}>
        <FrameImage src={backgrounds.home} alt="" eager />
        <div className="hero-vignette" />
      </div>
    </div>
  );
}

export default function Home() {
  const [people, everything, music] = galleryCards;

  return (
    <div className="home">
      <Hero />
      <div className="hero-spacer">
        <div className="hero-copy">
          <h1>{homeIntro.heading}</h1>
          <p>{homeIntro.body}</p>
        </div>
      </div>

      <main className="home-sheet">
        <section className="portfolio-intro" aria-label="Portfolio introduction">
          <p>{portfolioIntro.lead}</p>
          <p>{portfolioIntro.collab}</p>
        </section>

        <section className="home-photos" aria-label="Selected work">
          <PhotoGrid photos={homePhotos} showCaption />
        </section>

        <section className="gallery-block" aria-label="Attar visual photo gallery">
          <div className="gallery-cards">
            <ScrollReveal>
              <Link to={people.to} className="tile">
                <FrameImage src={people.src} alt="" />
                <span>{people.title}</span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={80}>
              <div className="gallery-badge">
                <span>
                  Attar
                  <br />
                  Visual
                  <br />
                  Photo
                  <br />
                  Gallery
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={40}>
              <Link to={everything.to} className="tile">
                <FrameImage src={everything.src} alt="" />
                <span>{everything.title}</span>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <Link to={music.to} className="tile">
                <FrameImage src={music.src} alt="" />
                <span>{music.title}</span>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <section className="moving-section" aria-label="Moving picture">
          <ScrollReveal>
            <Link to="/movingpicture" className="section-label">
              Moving Picture
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <Link to="/movingpicture" className="moving-frame">
              <AutoVideo />
            </Link>
          </ScrollReveal>
        </section>
      </main>
    </div>
  );
}
