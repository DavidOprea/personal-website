import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data";
import { IconArrow, IconDownload } from "./icons";

const MotionDiv = motion.div;

function Hero() {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return undefined;

    const timer = window.setInterval(() => {
      setStatusIndex((value) => (value + 1) % profile.currently.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <MotionDiv
        className="hero-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">
          <span className="live-dot" />
          {profile.role} · {profile.school}
        </p>
        <h1>
          <span className="hero-hello">hello, I&apos;m</span>
          <span className="hero-name">{profile.name}</span>
        </h1>
        <p className="hero-headline">{profile.headline}</p>
        <p className="hero-intro">{profile.intro}</p>

        <p className="hero-status">
          <span className="mono">$</span> currently
          <span className="hero-status-value">{profile.currently[statusIndex]}</span>
          <span className="cursor" aria-hidden="true" />
        </p>

        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            view work
            <IconArrow className="icon" />
          </a>
          <a
            className="btn btn-ghost"
            href={profile.resumeUrl}
            download={profile.resumeFilename}
          >
            <IconDownload className="icon" />
            resume.pdf
          </a>
        </div>
      </MotionDiv>

      <MotionDiv
        className="hero-stage"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="portrait-frame">
          <div className="portrait-meta">
            <span>CAM_01</span>
            <span>LIVE</span>
          </div>
          <img src={profile.portrait} alt={`${profile.name} outdoors by a stream`} />
          <div className="portrait-meta portrait-meta-bottom">
            <span>{profile.location}</span>
            <span>rgb / natural</span>
          </div>
        </div>
      </MotionDiv>
    </section>
  );
}

export default Hero;
