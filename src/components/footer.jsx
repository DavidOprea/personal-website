import { profile, socials } from "../data";
import { IconGithub, IconLinkedin, IconInstagram } from "./icons";

const icons = {
  github: IconGithub,
  linkedin: IconLinkedin,
  instagram: IconInstagram,
};

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <p className="footer-brand">
          <span className="nav-prompt">~/</span>
          {profile.name.toLowerCase().replace(" ", ".")}
        </p>
        <div className="footer-links">
          {socials.map((social) => {
            const Icon = icons[social.id];
            return (
              <a key={social.id} href={social.href} target="_blank" rel="noreferrer">
                <Icon className="icon" />
                {social.label}
              </a>
            );
          })}
        </div>
      </div>

      <div className="status-bar">
        <span className="status-chip">main*</span>
        <span>UTF-8</span>
        <span>{profile.location}</span>
        <span className="status-spacer" />
        <span>portfolio v2</span>
        <span className="status-ok">ready</span>
      </div>
    </footer>
  );
}

export default Footer;
