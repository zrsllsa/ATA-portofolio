import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { backgrounds, site } from "./data/site.ts";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./pages/contact.tsx";
import Everything from "./pages/everything.tsx";
import Home from "./pages/home.tsx";
import MovingPicturePage from "./pages/movingpicture.tsx";
import Music from "./pages/music.tsx";
import People from "./pages/people.tsx";

// preload semua background + portrait supaya pindah halaman tidak menunggu download
for (const src of [...Object.values(backgrounds), site.logo]) {
  new Image().src = encodeURI(src.replace(/\.png$/i, ".webp"));
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/music" element={<Music />} />
        <Route path="/everything" element={<Everything />} />
        <Route path="/movingpicture" element={<MovingPicturePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event-people" element={<Navigate to="/people" replace />} />
        <Route path="/event-music" element={<Navigate to="/music" replace />} />
        <Route path="/event-everything" element={<Navigate to="/everything" replace />} />
        <Route path="/design" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
