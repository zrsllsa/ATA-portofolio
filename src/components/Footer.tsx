import { site } from "../data/site.ts";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span>© ATTAR.CO</span>
      <span className="footer-rule" aria-hidden="true">
        |
      </span>
      <span>All rights reserved</span>
      <span className="footer-rule" aria-hidden="true">
        |
      </span>
      <a href={site.instagramUrl} target="_blank" rel="noreferrer">
        {site.instagram}
      </a>
    </footer>
  );
}
