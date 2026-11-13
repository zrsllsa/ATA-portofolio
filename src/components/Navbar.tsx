import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { site } from "../data/site.ts";

const eventLinks = [
  { to: "/people", label: "People" },
  { to: "/music", label: "Music" },
  { to: "/everything", label: "Everything" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const [seenPath, setSeenPath] = useState(pathname);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 12);

  if (seenPath !== pathname) {
    setSeenPath(pathname);
    setOpen(false);
    setEventOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open || pathname !== "/";
  const eventActive = eventLinks.some((link) => pathname === link.to);

  return (
    <header className={solid ? "nav is-solid" : "nav"}>
      <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
        <img src={encodeURI(site.logo)} alt="" />
        <span>
          M.ABDUS
          <br />
          SATTAR
        </span>
      </NavLink>

      <button
        type="button"
        className={open ? "nav-toggle is-open" : "nav-toggle"}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav className={open ? "nav-links is-open" : "nav-links"}>
        <NavLink to="/" end onClick={() => setOpen(false)}>
          Home
        </NavLink>

        <div className={eventOpen ? "nav-dropdown is-open" : "nav-dropdown"}>
          <button
            type="button"
            className={eventActive ? "nav-drop-btn is-active" : "nav-drop-btn"}
            aria-expanded={eventOpen}
            aria-haspopup="true"
            onClick={() => setEventOpen((value) => !value)}
          >
            Event
          </button>
          <div className="nav-submenu">
            {eventLinks.map((link) => (
              <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <NavLink to="/movingpicture" onClick={() => setOpen(false)}>
          Moving Picture
        </NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
