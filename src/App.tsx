import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./pages/contact.tsx";
import Everything from "./pages/everything.tsx";
import Home from "./pages/home.tsx";
import MovingPicturePage from "./pages/movingpicture.tsx";
import Music from "./pages/music.tsx";
import People from "./pages/people.tsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
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
