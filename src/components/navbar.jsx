import { useEffect, useState } from "react";
import { nav, profile, socials } from "../data";
import { IconGithub, IconLinkedin, IconInstagram } from "./icons";

const icons = {
  github: IconGithub,
  linkedin: IconLinkedin,
  instagram: IconInstagram,
};

function Navbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = nav.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <a className="nav-brand" href="#home">
        <span className="nav-prompt">~/</span>
        <span>david.oprea</span>
      </a>

      <button
        className={`nav-toggle ${open ? "is-open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav-links ${open ? "is-open" : ""}`}>
        {nav.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className={active === item.id ? "is-active" : ""}
            onClick={() => setOpen(false)}
          >
            <span className="mono">/</span>
            {item.label}
          </a>
        ))}
        <a
          className="nav-resume"
          href={profile.resumeUrl}
          download={profile.resumeFilename}
          onClick={() => setOpen(false)}
        >
          resume.pdf
        </a>
      </nav>

      <div className="nav-socials">
        {socials.map((social) => {
          const Icon = icons[social.id];
          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              <Icon className="icon" />
            </a>
          );
        })}
      </div>
    </header>
  );
}

export default Navbar;
