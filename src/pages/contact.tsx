import PageBackground from "../components/PageBackground.tsx";
import { InstagramIcon, MailIcon, PhoneIcon } from "../components/Icons.tsx";
import { backgrounds, site } from "../data/site.ts";

export default function Contact() {
  return (
    <div className="inner-page contact-page">
      <PageBackground src={backgrounds.contact} />
      <main className="contact-main">
        <img className="contact-portrait" src={encodeURI(site.logo)} alt={site.name} />
        <div className="contact-copy">
          <h1>
            M ABDUS
            <br />
            SATTAR
          </h1>
          <a href={site.instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon />
            {site.instagram}
          </a>
          <a href={`mailto:${site.email}`}>
            <MailIcon />
            {site.email}
          </a>
          <a href={site.phoneUrl}>
            <PhoneIcon />
            {site.phone}
          </a>
        </div>
      </main>
    </div>
  );
}
